/* Assets Imports */
import './globals.css'
/* Components Imports */
import CallUs from './_components/CallUs'
import Header from './_components/Header'
import HomeBanner from './_pageComponents/HomeBanner'
import AboutSection from './_pageComponents/AboutSection'



export default function Home() {
    return (
        <>
            <Header activePage={ "home" } />
            <CallUs />
            <main>
                <HomeBanner />
                <AboutSection />
            </main>
        </>
    )
}
