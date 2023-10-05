/* Assets Imports */
import '../globals.css'
import alarmBannerPhoto from "public/banners/alarm_stock_photo.png"
/* Components Imports */
import CallUs from '../_components/CallUs'
import Header from '../_components/Header'
import Footer from '../_components/Footer'
import Banner from '../_components/Banner'
/* Page Components Imports */
import FirstSection from './_pageComponents/FirstSection'
import HubSection from './_pageComponents/HubSection'
import LeakSection from './_pageComponents/LeakSection'



export default function AlarmPage() {
    return (
        <>
            <Header activePage={ "alarm" } />
            <CallUs />
            <main>
                <FirstSection />
                <HubSection />
                <LeakSection />
            </main>
            <Footer />
        </>
    )
}
