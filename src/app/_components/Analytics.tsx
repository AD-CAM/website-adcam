"use client"
import { gtmId, GTAG_ID, pageview } from "../_utils/googleTagManager"
import { usePathname, useSearchParams } from "next/navigation"
import Script from "next/script"
import { useEffect } from "react"



function Analytics() {
    const pathname = usePathname()
    const searchParams = useSearchParams()



    useEffect(() => {
        if (pathname) {
        pageview(pathname)
        }
    }, [pathname, searchParams])



    if (process.env.NEXT_PUBLIC_VERCEL_ENV !== "production") {
        return null
    }



    return (
        <>
            <noscript>
                <iframe
                    src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
                    height="0"
                    width="0"
                    style={{ display: "none", visibility: "hidden" }}
                />
            </noscript>
            <Script
                id="gtm-script"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                __html: `
                        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                        })(window,document,'script','dataLayer', "${gtmId}");
                        `,
                }}
            />
        </>
    )
}

function GoogleTagScript() {
    return (
        <>
            <Script
                async
                src={ `https://www.googletagmanager.com/gtag/js?id=${GTAG_ID}` }
            />
            <Script id='gtag'>
                { `window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GTAG_ID}');` }
            </Script>
        </>
    )
}

export { Analytics, GoogleTagScript }