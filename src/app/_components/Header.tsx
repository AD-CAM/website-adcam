'use client'

import adCamHeaderLogo from "/public/ad-cam_logo-title_nobg.png"
import { makeStyles } from 'tss-react/mui'

import Link from 'next/link'
import Image from 'next/image'
import NavLink from './NavLink'



const useStyles = makeStyles()((theme) => {
    return {
        root: {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",

            position: "relative",
            zIndex: 4,

            width: "100%",
            height: theme.spacing(12),
            marginTop: theme.spacing(5),
            paddingLeft: theme.spacing(24),
            paddingRight: theme.spacing(24),

			boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.37)",
            background: "linear-gradient(350deg, rgba(37,16,5,0.1) 0%, rgba(136,37,16,0.2) 35%, rgba(179,39,36,0.25) 63%, rgba(255,23,0,0.3) 100%)",
            backdropFilter: "blur(2px)",
        },
        logoRoot: {
            height: "75%",
        },
        logoImage: {
            height: "100%",
            width: "auto",
        },
        nav: {
            display: "flex",
            alignItems: "flex-end",

            height: "60%",
        },
        devisButton: {

        }
    }
})

interface HeaderProps {
    activePage: string;
}



export default function Header({ activePage }: HeaderProps) {
    const { classes } = useStyles()

    return (      
        <header className={ classes.root }>
            <Link className={ classes.logoRoot } href="/">
                <Image className={ classes.logoImage }
                    src={ adCamHeaderLogo }
                    alt="AD CAM, installateurs de systèmes de télésurveillance à Orléans"
                />
            </Link>
            <nav className={ classes.nav }>
                <NavLink isActive={ activePage === "home" } link="/" linkText="ACCUEIL"/>
                <NavLink isActive={ activePage === "alarm" } link="/installation-alarme-orleans/" linkText="ALARME"/>
                <NavLink isActive={ activePage === "video" } link="/installation-video-surveillance-orleans/" linkText="VIDÉO SURVEILLANCE"/>
                <NavLink isActive={ activePage === "contact" } link="/contact/" linkText="CONTACT"/>
                <NavLink isActive={ activePage === "support" } link="/assistance-technique/" linkText="ASSISTANCE TECHNIQUE"/>
            </nav>
            <Link className={ classes.devisButton } href="/contact">
                DEVIS GRATUIT
            </Link>
        </header>
    )
}
