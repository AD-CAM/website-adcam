/* Modules Imports */
const fs = require('fs')
/* Utils & Data Imports */
import { PageInfo } from "./_types/dataFiles"
const conditionsList: PageInfo[] = require("./_data/conditionsList.json")
const filteredConditionsList: PageInfo[] = conditionsList.filter((page) => page.name !== "termsOfUse")
const normalPagesList: PageInfo[] = require("./_data/pageList.json")
const pageList: PageInfo[] = normalPagesList.concat(filteredConditionsList)



const rootUrl = "https://www.ad-cam.fr";



interface PageStats {
    link: string;
    mtime: Date;
}



async function getFilesLastModifiedDate() {
    try {
        const pagesStats: PageStats[] = []

        for(const page of pageList) {
            const fileStats = await fs.promises.stat(`${process.cwd()}/src/app${page.link}page.tsx`)

            pagesStats.push({ link: page.link, mtime: fileStats.mtime })
        }

        return pagesStats

    } catch (error) {
        console.error(`Error getting file last modified date: ${error}`)

        return []
    }
}
  


export default async function sitemap() {
    try {
        const url = "/api/routes/contentful/entries"
        
        const pageData = await getFilesLastModifiedDate()



        const pages = pageData.map((page: PageStats) => ({
            url: `${rootUrl}${page.link}`,
            lastModified: page.mtime,
        }))
    
        return [...pages]

    } catch (error) {
        console.error("Error", error)
    }
}