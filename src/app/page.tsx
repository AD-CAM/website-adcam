/* Assets Imports */
import './globals.css'
/* Components Imports */
import CallUs from './_components/CallUs'
import Header from './_components/Header'
import Footer from './_components/Footer'
/* Page Components Imports */
import HomeBanner from './_pageComponents/HomeBanner'
import AboutSection from './_pageComponents/AboutSection'
import WhatWeOffer from './_pageComponents/WhatWeOffer'
import ReviewCarousel from './_pageComponents/ReviewCarousel'



export default function Home() {
    return (
        <>
            <Header activePage={ "home" } />
            <CallUs />
            <main>
                <HomeBanner />
                <AboutSection />
                <WhatWeOffer sectionType={ "ourPledges"} />
                <ReviewCarousel />
                <WhatWeOffer sectionType={ "ourServices"} />
            </main>
            <Footer />
        </>
    )
}
