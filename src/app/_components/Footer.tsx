'use client'
/* Assets Imports */
import adCamFooterLogo from "/public/ad-cam_logo_nobg.png"
/* Library Imports */
import { makeStyles } from 'tss-react/mui'
/* Components Imports */
import Image from "next/image"



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
        logoImage: {
            height: "60%",
            width: "auto",
        },
    }
})



export default function Footer() {
    const { classes } = useStyles()

    return (      
        <footer className={ classes.root }>
            <Image  className={ classes.logoImage }
                    src={ adCamFooterLogo }
                    alt="AD CAM, installateurs de systèmes de télésurveillance à Orléans"
            />
        </footer>
    )
}
