/* Assets Imports */
import './globals.css'
import { Quicksand } from 'next/font/google'

/* Library Imports */
import { NextAppDirEmotionCacheProvider } from "tss-react/next/appDir"

/* Components Imports */
import ScrollToTop from './_components/ScrollToTop'
import Analytics from './_components/Analytics'
import Script from 'next/script'
import { Suspense } from 'react'

/* Utils Imports */
import { GTM_ID } from "./_utils/googleTagManager"




const quicksand = Quicksand({ subsets: ['latin'] })



export const metadata = {
    title: `AD CAM | Installateur d'alarme et vidéo surveillance à Orléans`,
    description: `Installateur d'alarme et vidéo surveillance à Orléans (45) | 100% autonome | Sans abonnement | Installation de qualité | AD CAM | 06 95 86 91 76`,
    openGraph: {
        url: `https://www.ad-cam.fr`,
        siteName: `AD CAM`,
        title: `AD CAM, Installateur de systèmes de télésurveillance à Orléans`,
        description: `AD CAM est un installateur d'alarmes et de systèmes de télésurveillance aux alentours d'Orléans, proposant un service sans aucun abonnement et 100% autonome.`
    }    
}



export default function RootLayout({ children, }: { children: React.ReactNode }) {
    return (
                <html lang="fr">
                    <body className={ quicksand.className }>
                        <NextAppDirEmotionCacheProvider options={{ key: "css" }}>
                            { children }
                            <ScrollToTop />
                        </NextAppDirEmotionCacheProvider>
                    </body>
                    <Script
                        async
                        src={ `https://www.googletagmanager.com/gtag/js?id=${GTM_ID}` }
                    />
                    <Script id='gtag'>
                        { `window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', '${GTM_ID}');` }
                    </Script>
                </html>
    )
}
