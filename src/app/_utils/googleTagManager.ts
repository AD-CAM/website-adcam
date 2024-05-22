


type WindowWithDataLayer = Window & {
    dataLayer: Record<string, any>[]
}


  
declare const window: WindowWithDataLayer


const GTM_ID = process.env.NEXT_PUBLIC_GTM
let gtmId: string

if(!GTM_ID) {
    gtmId = "undefined"
} else {
    gtmId = GTM_ID
}


const GTAG_ID = process.env.NEXT_PUBLIC_GTAG



const pageview = (url: string) => {
    if (typeof window.dataLayer !== "undefined") {
        window.dataLayer.push({
            event: "pageview",
            page: url,
        })
    } else {
        console.log({
            event: "pageview",
            page: url,
        })
    }
}



export { gtmId, GTAG_ID, pageview }