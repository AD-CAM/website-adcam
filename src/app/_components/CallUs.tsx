'use client'
/* Library Imports */
import { makeStyles } from 'tss-react/mui'
import { useTheme, useMediaQuery } from '@mui/material'



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

            backgroundColor: "#C80404",

            [theme.breakpoints.down('sm')]: {
                minHeight: theme.spacing(8),
                height: "auto",
            },
            [theme.breakpoints.up('sm')]: {
                height: theme.spacing(5),
            },
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
        mobileTextRoot: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",

            color: "#FFF",
            fontWeight: 500,
        },
        mobileText: {
            margin: "0",
            padding: "0",

            width: "100%",

            fontSize: theme.typography.pxToRem(18),
            textAlign: "center",
        },
        mobilePhone: {
            color: "#FFF",

            margin: "0",
            padding: "0",

            width: "100%",

            fontWeight: 800,
            fontSize: theme.typography.pxToRem(22),
            textAlign: "center",
        },
    }
})



export default function CallUs() {
    const { classes } = useStyles()

    const theme = useTheme()
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'))



    return (      
        <div className={ classes.root }>
            {
                !isSmallScreen   ? (
                                    <a className={ classes.bannerText } href="tel:0695869176">
                                        <span className={ classes.bannerPercentage }>100%</span> AUTONOME <strong className={ classes.bannerPhone }>06 95 86 91 76</strong> SANS ABONNEMENT
                                    </a>
                                )
                                : (
                                    <a className={ classes.mobileTextRoot } href="tel:0695869176">
                                        <p className={ classes.mobileText }>100% autonome et sans abonnement</p>
                                        <p className={ classes.mobilePhone }>06 95 86 91 76</p>
                                    </a>
                                )
            }
        </div>
    )
}
