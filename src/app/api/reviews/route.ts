/* Data & Utils Imports */
import { requestEndpoint } from "../../_utils/handleEnvVariables"
/* Library Imports */
import axios from 'axios'
import { NextApiRequest, NextApiResponse } from "next"



/* export async function GET(req: NextApiRequest, res: NextApiResponse) {
    try {

        const response = await axios.get( requestEndpoint )

        console.log('-----------Received response is-----------', response)

        const reviews = response.data.result.reviews
        res.status(200).json(reviews)

    } catch (error) {
        console.error('Error while fetching Google reviews:', error)
        res.status(500).json({ error: 'Unable to fetch Google reviews' })
    }
} */