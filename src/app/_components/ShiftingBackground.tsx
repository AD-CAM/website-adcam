'use client'
/* Types & Utils imports */
import { StaticImageData } from "next/image"
/* Library Imports */
import { makeStyles } from 'tss-react/mui'



const useStyles = makeStyles()((theme) => {
    return {
        root: {

        },
    }
})



export default function ShiftingBackground({}) {
    const { classes } = useStyles()

    return (      
        <div className={ classes.root }>

        </div>
    )
}