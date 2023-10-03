'use client'
/* Data & Types Imports */
const placeholderTechSheetsList = require("../_pageData/placeholderTechSheetsList.json")
/* Assets Imports */

/* Library Imports */
import { makeStyles } from 'tss-react/mui'
import YouTube from "react-youtube"
/* Components Imports */
import TechSheet from '@/app/_components/TechSheet'
import { TechSheetData } from '@/app/_types/dataFiles'



const useStyles = makeStyles()((theme) => {
    return {
        root: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",

            boxSizing: "border-box",

            width: "100%",

            boxShadow: "0px -50px 25px -50px rgba(0, 0, 0, 0.3)",
        },
        subRoot: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",

            width: "80%",
        },
        youtubeContainer: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",

            marginTop: theme.spacing(6),

            [theme.breakpoints.down('sm')]: {
                width: "90%",
            },
            [theme.breakpoints.up('sm')]: {
                width: "650px",
                maxWidth: "90%",
            },
        },
    }
})



export default function FirstSection() {
    const { classes } = useStyles()



    return (      
        <section className={ classes.root }>
            <div className={ classes.subRoot }>
                {
                    placeholderTechSheetsList.map((techSheetData: TechSheetData, index: number) => {
                        return <TechSheet 
                                            key={ index }
                                            image={ techSheetData.image }
                                            alt={ techSheetData.alt }
                                            isLeft={ techSheetData.isLeft }
                                            boldTitle={ techSheetData.boldTitle }
                                            regularTitle={ techSheetData.regularTitle }
                                            subTitle={ techSheetData.subTitle }
                                            techSheet={ techSheetData.techSheet }
                                />
                    })
                }
            </div>
        </section>
    )
}
