const isOnMaintenanceEnv = process.env.NEXT_PUBLIC_IS_ON_MAINTENANCE

const isOnMaintenance = handleIsOnMaintenance()
const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
const placeId = process.env.NEXT_PUBLIC_GOOGLE_PLACES_ID
const placeEndpoint = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews&key=${apiKey}`



function handleIsOnMaintenance(): boolean {
    if(isOnMaintenanceEnv === "false") {
        return false
    } else if(isOnMaintenanceEnv === "true") {
        return true
    }

    return false
}



export { apiKey, placeId, placeEndpoint, isOnMaintenance }