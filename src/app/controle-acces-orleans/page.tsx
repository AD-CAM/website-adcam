/* Assets Imports */
import '../globals.css'
/* Components Imports */
import CallUs from '../_components/CallUs'
import Header from '../_components/Header'
import Footer from '../_components/Footer'
/* Page Components Imports */
import HeroSection from './_pageComponents/HeroSection'
import FirstSection from './_pageComponents/FirstSection'



export default function AlarmPage() {
    return (
        <>
            <Header activePage={ "access-control" } />
            <CallUs />
            <main>
                <HeroSection />
                <FirstSection />
            </main>
            <Footer />
        </>
    )
}
