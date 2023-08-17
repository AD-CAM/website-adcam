'use client'
/* Assets Imports */
import ajaxInstaller from "public/ad-cam_authorized_installer.png"
/* Library Imports */
import { makeStyles } from 'tss-react/mui'
import { motion, Variants } from 'framer-motion'
/* Components Imports */
import { ImageTitle } from '../../_components/SectionTitle'
import MapComponent from '../../_components/Map'



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
            width: "864px",
        },
    }
})



export default function MapSection() {
    const { classes } = useStyles()

    return (      
        <section className={ classes.root }>
            <div className={ classes.subRoot }>
                <div className={ classes.mainContainer }>
                    <ImageTitle image={ ajaxInstaller } alt={ `AD-Cam est un installateur agréé AJAX` } />

                    <div className={ classes.mapContainer }>
                        <MapComponent radius={50} />
                    </div>
                </div>
            </div>
        </section>
    )
}
