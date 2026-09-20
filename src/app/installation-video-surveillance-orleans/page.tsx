/* Assets Imports */
import '../globals.css'
import cameraBannerPhoto from "public/banners/camera_stock_photo.jpg"
/* Components Imports */
import CallUs from '../_components/CallUs'
import Header from '../_components/Header'
import Footer from '../_components/Footer'
import Banner from '../_components/Banner'
/* Page Components Imports */
import FirstSection from './_pageComponents/FirstSection'
import ThirdSection from './_pageComponents/ThirdSection'
import SecondSection from './_pageComponents/SecondSection'



export default function AlarmPage() {
    return (
        <>
            <Header activePage={ "video" } />
            <CallUs />
            <main>
                <FirstSection />
                <ThirdSection />
                <SecondSection />
            </main>
            <Footer />
        </>
    )
}
