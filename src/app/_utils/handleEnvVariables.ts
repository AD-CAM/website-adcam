const isOnMaintenance = process.env.NEXT_PUBLIC_IS_ON_MAINTENANCE
const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY



function handleIsOnMaintenance(): boolean {
    if(isOnMaintenance === "false") {
        return false
    } else if(isOnMaintenance === "true") {
        return true
    }

    return false
}



export { apiKey, handleIsOnMaintenance }