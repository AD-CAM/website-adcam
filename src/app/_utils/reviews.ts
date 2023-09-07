/* Data & Utils Imports */
import { apiKey } from "./handleEnvVariables"
/* Types Imports */
import { ReviewObject } from "../_types/reviews"
/* Library Imports */
import axios from "axios"



function formatDate(timestamp: number) {
    const date = new Date(timestamp * 1000)
    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const day = String(date.getDate()).padStart(2, '0')
  
    return `${year}-${month}-${day}`
}



export { formatDate }