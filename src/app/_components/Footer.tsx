'use client'
/* Assets Imports */
import adCamFooterLogo from "/public/ad-cam_logo_nobg.png"
/* Library Imports */
import { makeStyles } from 'tss-react/mui'
/* Components Imports */
import Image from "next/image"
import IconButton from "./IconButton"



const useStyles = makeStyles()((theme) => {
    return {
        root: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",

            position: "relative",
            zIndex: 4,

            width: "100%",
            height: theme.spacing(24),
            marginTop: theme.spacing(5),

			boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.37)",
            background: "linear-gradient(350deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.9) 50%, rgba(0, 0, 0, 1) 100%)",
            backdropFilter: "blur(2px)",
        },
        logoRoot: {
            display: "flex",
            alignItems: "center",
            
            height: "100%",
            width: "auto",
        },
        logoImage: {
            height: "60%",
            width: "auto",

            marginRight: theme.spacing(2),
        },
        logoInfoContainer: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
        },
        logoInfoTitle: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",

            marginTop: 0,

            color: "#FFF",
        }
    }
})



export default function Footer() {
    const { classes } = useStyles()

    return (      
        <footer className={ classes.root }>
            <div className={ classes.logoRoot }>
                <Image  className={ classes.logoImage }
                        src={ adCamFooterLogo }
                        alt="AD CAM, installateurs de systèmes de télésurveillance à Orléans"
                />
                <div className={ classes.logoInfoContainer }>
                    <h3 className={ classes.logoInfoTitle }>
                        <span>{ `Installateur d’alarme et vidéo` }</span>
                        <span>{ `surveillance à Orléans (45)` }</span>
                    </h3>
                    <IconButton icon={ 'phone' } text={ '06 95 86 91 76' } link={ 'tel:+33695869176' } description={ 'Appelez nous au 06 95 86 91 76' }/>
                </div>
            </div>
        </footer>
    )
}
