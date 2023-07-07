'use client'

import { makeStyles } from 'tss-react/mui'



const useStyles = makeStyles()((theme) => {
    return {
        root: {
            position: "fixed",
            top: "0",

            display: "flex",
            alignItems: "center",
            justifyContent: "center",

            width: "100%",
            height: theme.spacing(5),

            backgroundColor: "#C80404",
        },
        bannerPercentage: {
            fontSize: theme.typography.pxToRem(26),
        },
        bannerText: {
            color: "#000",
            fontWeight: 500,
        },
        bannerPhone: {
            color: "#FFF",
            fontWeight: 800,

            fontSize: theme.typography.pxToRem(26),
        },
    }
})



export default function CallUs() {
    const { classes } = useStyles()

    return (      
        <div className={ classes.root }>
            <p className={ classes.bannerText }>
                <span className={ classes.bannerPercentage }>100%</span> AUTONOME <strong className={ classes.bannerPhone }>06 95 86 91 76</strong> SANS ABONNEMENT
            </p>
        </div>
    )
}
