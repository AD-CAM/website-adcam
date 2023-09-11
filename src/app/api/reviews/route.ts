/* Data & Utils Imports */
import { requestEndpoint } from "../../_utils/handleEnvVariables"
/* Library Imports */
import axios from 'axios'
import { NextRequest, NextResponse } from "next/server"



export async function GET(req: NextRequest) {
    const response = await axios.get( requestEndpoint )

    console.log('-----------Received response is-----------', response)

    return new NextResponse(JSON.stringify({ response }), {status: 200})
}