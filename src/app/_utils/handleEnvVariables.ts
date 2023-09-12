const isOnMaintenance = handleIsOnMaintenance()
const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
const placesId = process.env.NEXT_PUBLIC_GOOGLE_PLACES_ID
const requestEndpoint = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placesId}&fields=reviews&key=${apiKey}`



function handleIsOnMaintenance(): boolean {
    if(process.env.NEXT_PUBLIC_IS_ON_MAINTENANCE === "false") {
        return false
    } else if(process.env.NEXT_PUBLIC_IS_ON_MAINTENANCE === "true") {
        return true
    }

    return false
}



export { apiKey, placesId, requestEndpoint, isOnMaintenance }