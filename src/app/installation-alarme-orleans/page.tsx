/* Assets Imports */
import '../globals.css'
import alarmBannerPhoto from "public/alarm_stock_photo.png"
/* Components Imports */
import CallUs from '../_components/CallUs'
import Header from '../_components/Header'
import Footer from '../_components/Footer'
import Banner from '../_components/Banner'
/* Page Components Imports */



export default function AlarmPage() {
    return (
        <>
            <Header activePage={ "alarm" } />
            <CallUs />
            <main>
                <Banner image={ alarmBannerPhoto } isSmall={ true } />
            </main>
            <Footer />
        </>
    )
}
