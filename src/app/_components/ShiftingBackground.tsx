'use client'
/* Types & Utils imports */
import { StaticImageData } from "next/image"
/* Library Imports */
import { makeStyles } from 'tss-react/mui'



const useStyles = makeStyles()((theme) => {
    return {
        root: {
            position: "absolute",
            height: "100%",
            width: "100%",
        },
        imageRoot: {
            height: "100%",
            width: "100%",

            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
        }
    }
})



export default function ShiftingBackground({}) {
    const { classes } = useStyles()

    return (      
        <div className={ classes.root }>
            <div className={ classes.imageRoot }></div>
            <div className={ classes.imageRoot }></div>
        </div>
    )
}