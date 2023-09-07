/* Types Imports */
import { ReviewObject } from "../_types/reviews"



async function getReviews(): Promise<ReviewObject[]> {
    try {
        const response = await fetch('/api/reviews')
        const reviews = await response.json()

        console.log(reviews)

        return reviews

    } catch (error) {

        console.log('Error while fetching reviews:', error)

        throw error
    }
}



function formatDate(timestamp: number) {
    const date = new Date(timestamp * 1000)
    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const day = String(date.getDate()).padStart(2, '0')
  
    return `${year}-${month}-${day}`
}



export { formatDate, getReviews }