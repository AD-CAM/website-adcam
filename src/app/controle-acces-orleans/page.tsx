/* Assets Imports */
import '../globals.css'
import accessBannerPhoto from "public/banners/access_stock_photo.jpg"
/* Components Imports */
import CallUs from '../_components/CallUs'
import Header from '../_components/Header'
import Footer from '../_components/Footer'
import Banner from '../_components/Banner'
/* Page Components Imports */
import FirstSection from './_pageComponents/FirstSection'



export default function AlarmPage() {
    return (
        <>
            <Header activePage={ "access-control" } />
            <CallUs />
            <main>
                <Banner image={ accessBannerPhoto } isSmall={ false } position='right' />
                <FirstSection />
            </main>
            <Footer />
        </>
    )
}
