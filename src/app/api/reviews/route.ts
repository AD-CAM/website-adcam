/* Data & Utils Imports */
import { requestEndpoint } from "../../_utils/handleEnvVariables"
/* Library Imports */
import axios from 'axios'
import { NextRequest, NextResponse } from "next/server"
import { NextApiResponse } from "next"



export async function GET(req: NextRequest, res: NextApiResponse) {
    try {

        const response = await axios.get( requestEndpoint )

        console.log('-----------Received response is-----------', response)

        return NextResponse.json({ response })

    } catch (error) {
        console.error('Error while fetching Google reviews:', error)
        res.status(500).json({ error: 'Unable to fetch Google reviews' })
    }
}