/* Data & Utils Imports */
import { apiKey, placeId, placeEndpoint } from "../../_utils/handleEnvVariables"
/* Library Imports */
import axios from 'axios'
import { NextApiRequest, NextApiResponse } from 'next'



export async function GET(req: NextApiRequest, res: NextApiResponse) {
    try {

        const response = await axios.get(
            `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews&key=${apiKey}`
        )

        const reviews = response.data.result.reviews
        res.status(200).json(reviews)

    } catch (error) {
        console.error('Error while fetching Google reviews:', error)
        res.status(500).json({ error: 'Unable to fetch Google reviews' })
    }
}