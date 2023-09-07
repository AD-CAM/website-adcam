const isOnMaintenance = handleIsOnMaintenance()
const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
const accountId = process.env.NEXT_PUBLIC_GMB_ACCOUNT_ID
const locationId = process.env.NEXT_PUBLIC_GMB_LOCATION_ID
const requestEndpoint = ``



function handleIsOnMaintenance(): boolean {
    if(process.env.NEXT_PUBLIC_IS_ON_MAINTENANCE === "false") {
        return false
    } else if(process.env.NEXT_PUBLIC_IS_ON_MAINTENANCE === "true") {
        return true
    }

    return false
}



export { apiKey, accountId, locationId, requestEndpoint, isOnMaintenance }