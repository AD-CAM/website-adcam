/*
 * Google Ads conversion tracking (gtag.js). The account tag loads site-wide only where
 * NEXT_PUBLIC_ADS_ENABLED is "true" (see GoogleAdsTag), so conversions never fire in dev or
 * preview. Each conversion is sent when a quote form is submitted, never on page load - there is
 * no dedicated thank-you page to host it.
 */

const ADS_ID = "AW-11094514911"

// One conversion label per quote form.
const CONVERSION = {
    devisExpress: "AW-11094514911/Nh1_COmLiYEZEN-5o6op",
    contact: "AW-11094514911/-z47CJSTi4EZEN-5o6op",
} as const

type ConversionKey = keyof typeof CONVERSION

type WindowWithGtag = Window & { gtag?: (...args: any[]) => void }



/** Sends a Google Ads conversion for a submitted quote form. No-op until the account tag has loaded (production only). */
function trackConversion(key: ConversionKey): void {
    const w = window as WindowWithGtag

    if (typeof w.gtag !== "function") {
        return
    }

    w.gtag("event", "conversion", { send_to: CONVERSION[key] })
}



export { ADS_ID, trackConversion }
