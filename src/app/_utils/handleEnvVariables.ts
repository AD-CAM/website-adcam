const isOnMaintenance = process.env.NEXT_PUBLIC_IS_ON_MAINTENANCE

function handleIsOnMaintenance(): boolean {
    if(isOnMaintenance === "false") {
        return false
    } else if(isOnMaintenance === "true") {
        return true
    }

    return false
}

export { handleIsOnMaintenance }