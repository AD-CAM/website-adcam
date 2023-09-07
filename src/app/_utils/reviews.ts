/* Data & Utils Imports */
import { apiKey, placeId, placeEndpoint } from "./handleEnvVariables"
/* Types Imports */
import { ReviewObject } from "../_types/reviews"
/* Library Imports */
import axios from "axios"



function getReviews(): Promise<ReviewObject[]> {
    return axios.get(placeEndpoint)
                .then((response) => {
                    const reviews = response.data.result.reviews
                
                    console.log(reviews)

                    return reviews
                })
                .catch((error) => {
                    console.log('Error while fetching reviews:', error)
                })
}



function formatDate(timestamp: number) {
    const date = new Date(timestamp * 1000)
    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const day = String(date.getDate()).padStart(2, '0')
  
    return `${year}-${month}-${day}`
}



export { formatDate, getReviews }