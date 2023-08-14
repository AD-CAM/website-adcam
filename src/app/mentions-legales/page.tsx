/* Assets Imports */
import '../globals.css'
/* Components Imports */
import CallUs from '../_components/CallUs'
import Header from '../_components/Header'
import Footer from '../_components/Footer'
/* Page Components Imports */
import LegalNotices from './_pageComponents/LegalNotice'



export default function LegalNoticesPage() {
    return (
        <>
            <Header activePage={ "home" } />
            <CallUs />
            <main>
                <LegalNotices />
            </main>
            <Footer />
        </>
    )
}