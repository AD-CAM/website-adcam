'use client'

import { makeStyles } from 'tss-react/mui'
import CallUs from './_components/CallUs'
import Header from './_components/Header'



const useStyles = makeStyles()((theme) => {
    return {
        root: {
            width: "100%",
            margin: 0,
            padding: 0,
        }
    }
})



export default function Home() {
    const { classes } = useStyles()

    return (
        <>
            <Header />
            <CallUs />
            <main className={ classes.root }>
                test
            </main>
        </>
    )
}
