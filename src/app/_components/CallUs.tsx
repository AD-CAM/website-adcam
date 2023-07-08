'use client'
/* Library Imports */
import { makeStyles } from 'tss-react/mui'



const useStyles = makeStyles()((theme) => {
    return {
        root: {
            position: "fixed",
            zIndex: 9999,
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
            color: "#FFF",
            fontWeight: 500,
        },
        bannerPhone: {
            color: "#FFF",

            marginLeft: theme.spacing(1),
            marginRight: theme.spacing(1),

            fontWeight: 800,
            fontSize: theme.typography.pxToRem(26),
        },
    }
})



export default function CallUs() {
    const { classes } = useStyles()

    return (      
        <div className={ classes.root }>
            <a className={ classes.bannerText } href="tel:0695869176">
                <span className={ classes.bannerPercentage }>100%</span> AUTONOME <strong className={ classes.bannerPhone }>06 95 86 91 76</strong> SANS ABONNEMENT
            </a>
        </div>
    )
}
