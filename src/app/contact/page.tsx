/* Assets Imports */
import '../globals.css'
import contactBannerPhoto from "public/contact_stock_photo.jpg"
/* Components Imports */
import CallUs from '../_components/CallUs'
import Header from '../_components/Header'
import Footer from '../_components/Footer'
/* Page Components Imports */
import Banner from './_pageComponents/Banner'



export default function ContactPage() {
    return (
        <>
            <Header activePage={ "home" } />
            <CallUs />
            <main>
                <Banner image={ contactBannerPhoto } />
            </main>
            <Footer />
        </>
    )
}
