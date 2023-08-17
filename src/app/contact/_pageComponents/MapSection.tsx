'use client'
/* Assets Imports */
import ajaxInstaller from "public/ad-cam_authorized_installer.png"
/* Library Imports */
import { makeStyles } from 'tss-react/mui'
import { motion, Variants } from 'framer-motion'
/* Components Imports */
import { ImageTitle } from '../../_components/SectionTitle'
import MapComponent from '../../_components/Map'
import { useTheme, useMediaQuery } from "@mui/material"



const useStyles = makeStyles()((theme) => {
    return {
        root: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",

            boxSizing: "border-box",

            width: "100%",

            paddingTop: theme.spacing(15),
            paddingBottom: theme.spacing(10),
        },
        subRoot: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",

            boxSizing: "border-box",

            width: "100%",
            maxWidth: "1450px",

            [theme.breakpoints.up('sm')]: {
                paddingLeft: theme.spacing(6),
                paddingRight: theme.spacing(6),   
            },
        },
        mainContainer: {
            width: "100%",

            [theme.breakpoints.down('sm')]: {
                maxWidth: "90%",
                marginBottom: theme.spacing(2),
            },
            [theme.breakpoints.up('sm')]: {
                maxWidth: "864px",   
            },
        },
        mapContainer: {
            height: "450px",
            width: "100%",
            maxWidth: "864px",

            [theme.breakpoints.down('sm')]: {
                height: "300px",
            },
            [theme.breakpoints.up('sm')]: {
                height: "450px",   
            },
        },
    }
})



export default function MapSection() {
    const { classes } = useStyles()

    const theme = useTheme()
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'))



    return (      
        <section className={ classes.root }>
            <div className={ classes.subRoot }>
                <div className={ classes.mainContainer }>
                    <ImageTitle image={ ajaxInstaller } alt={ `AD-Cam est un installateur agréé AJAX` } width={ isSmallScreen ? "80%" : "450px" } />

                    <div className={ classes.mapContainer }>
                        <MapComponent radius={50} />
                    </div>
                </div>
            </div>
        </section>
    )
}
