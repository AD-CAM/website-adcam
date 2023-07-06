'use client'

import Image from 'next/image'
import { makeStyles } from 'tss-react/mui'

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
            <main className={ classes.root }>
                test
            </main>
        </>
    )
}
