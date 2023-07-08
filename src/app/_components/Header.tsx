'use client'
/* Assets Imports */
import adCamHeaderLogo from "/public/ad-cam_logo-title_nobg.png"
/* Library Imports */
import { makeStyles } from 'tss-react/mui'
/* Components Imports */
import Link from 'next/link'
import Image from 'next/image'
import NavLink from './NavLink'
import IconButton from './IconButton'



const useStyles = makeStyles()((theme) => {
    return {
        root: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",

            position: "relative",
            zIndex: 4,

            width: "100%",
            height: theme.spacing(12),
            marginTop: theme.spacing(5),

			boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.37)",
            background: "linear-gradient(350deg, rgba(37,16,5,0.1) 0%, rgba(136,37,16,0.2) 35%, rgba(179,39,36,0.25) 63%, rgba(255,23,0,0.3) 100%)",
            backdropFilter: "blur(2px)",
        },
        headerContent: {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",

            marginLeft: theme.spacing(6),
            marginRight: theme.spacing(6),

            height: "100%",
            width: "100%",
            maxWidth: "1450px",
        },
        logoRoot: {
            height: "75%",
        },
        logoImage: {
            height: "100%",
            width: "auto",
        },
        nav: {
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",

            display: "flex",
            alignItems: "flex-end",
            justifyContent: "center",

            height: "60%",
        },
    }
})

interface HeaderProps {
    activePage: string;
}



export default function Header({ activePage }: HeaderProps) {
    const { classes } = useStyles()

    return (      
        <header className={ classes.root }>
            <div className={ classes.headerContent }>
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
                <IconButton icon={ 'invoice' } text={ 'DEVIS GRATUIT' } link={ '/contact' }/>
            </div>
        </header>
    )
}
