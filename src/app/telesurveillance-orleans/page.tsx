/* Assets Imports */
import '../globals.css'
/* Components Imports */
import CallUs from '../_components/CallUs'
import Header from '../_components/Header'
import Footer from '../_components/Footer'
/* Page Components Imports */
import HeroSection from './_pageComponents/HeroSection'
import ProtectionsSection from './_pageComponents/ProtectionsSection'
import AppSection from './_pageComponents/AppSection'
import PerksSection from './_pageComponents/PerksSection'
import ContactSection from './_pageComponents/ContactSection'



export default function TelesurveillancePage() {
    return (
        <>
            <Header activePage={ "telesurveillance" } />
            <CallUs />
            <main>
                <HeroSection />
                <ProtectionsSection />
                <AppSection />
                <PerksSection />
                <ContactSection />
            </main>
            <Footer />
        </>
    )
}
