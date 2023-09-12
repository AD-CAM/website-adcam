/* Data & Utils Imports */
import axios from "axios"
import { requestEndpoint } from "../../_utils/handleEnvVariables"
/* Library Imports */
import { NextRequest, NextResponse } from "next/server"



export async function GET(req: NextRequest) {
    /* axios.get(requestEndpoint)
        .then((response) => {
            if (response.data && response.data.result && response.data.result.reviews) {
                const reviews = response.data.result.reviews

                console.log('-----------Received reviews are-----------', response)

                return new NextResponse(JSON.stringify({ response }), {status: 200})
            } else {
                console.error('Response does not match expected format:', response)
            }
        })
        .catch((error) => {
            console.log('Error while fetching reviews', error)

            return new NextResponse(JSON.stringify({ error }), {status: 400})
        }) */

    return new NextResponse('Review fetching currently unavailable', {status: 400})
}