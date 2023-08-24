/* Assets Imports */
import '../globals.css'
/* Components Imports */
import CallUs from '../_components/CallUs'
import Header from '../_components/Header'
import Footer from '../_components/Footer'
/* Page Components Imports */
import PrivacyPolicy from './_pageComponents/PrivacyPolicy'



export default function PrivacyPolicyPage() {
    return (
        <>
            <Header activePage={ "home" } />
            <CallUs />
            <main>
                <PrivacyPolicy />
            </main>
            <Footer />
        </>
    )
}