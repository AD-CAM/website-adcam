/* Assets Imports */
import './globals.css'
/* Components Imports */
import CallUs from './_components/CallUs'
import Header from './_components/Header'



export default function Home() {
    return (
        <>
            <Header activePage={ "home" } />
            <CallUs />
            <main>
                test
            </main>
        </>
    )
}
