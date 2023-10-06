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
import MotionSection from './_pageComponents/MotionSection'
import FireSection from './_pageComponents/FireSection'
import DoorSection from './_pageComponents/DoorSection'
import GlassSection from './_pageComponents/GlassSection'
import SirenSection from './_pageComponents/SirenSection'
import RexSection from './_pageComponents/RexSection'
import ButtonSection from './_pageComponents/ButtonSection'



export default function AlarmPage() {
    return (
        <>
            <Header activePage={ "alarm" } />
            <CallUs />
            <main>
                <FirstSection />
                <HubSection />
                <LeakSection />
                <MotionSection />
                <FireSection />
                <DoorSection />
                <GlassSection />
                <SirenSection />
                <RexSection />
                <ButtonSection />
            </main>
            <Footer />
        </>
    )
}
