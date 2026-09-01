/* Assets Imports */
import '../globals.css'
/* Components Imports */
import CallUs from '../_components/CallUs'
import Header from '../_components/Header'
import Footer from '../_components/Footer'
/* Page Components Imports */
import HeroSection from './_pageComponents/HeroSection'
import FormSection from './_pageComponents/FormSection'



export default function ContactPage() {
    return (
        <>
            <Header activePage={ "contact" } />
            <CallUs />
            <main>
                <HeroSection />
                <FormSection />
            </main>
            <Footer />
        </>
    )
}
