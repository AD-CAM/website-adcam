/* Assets Imports */
import '../globals.css'
/* Components Imports */
import CallUs from '../_components/CallUs'
import Header from '../_components/Header'
import Footer from '../_components/Footer'
/* Page Components Imports */
import AlmaConditions from './_pageComponents/AlmaConditions'



export default function AlmaTermsPage() {
    return (
        <>
            <Header activePage={ "alma-terms" } />
            <CallUs />
            <main>
                <AlmaConditions />
            </main>
            <Footer />
        </>
    )
}