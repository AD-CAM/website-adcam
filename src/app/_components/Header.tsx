'use client'
/* Assets Imports */
import adCamHeaderLogo from "/public/ad-cam_logo-title_nobg.png"
/* Library Imports */
import { makeStyles } from 'tss-react/mui'
import { useTheme, useMediaQuery } from "@mui/material"
/* Components Imports */
import Link from 'next/link'
import Image from 'next/image'
import { HamburgerNav } from "./HamburgerNav"
import { IconButton } from "./Button"



const useStyles = makeStyles()((theme) => {
    return {
        root: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",

            position: "relative",
            

            width: "100%",
            height: theme.spacing(12),

			boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.37)",
            backgroundColor: "#FFF",
            backdropFilter: "blur(2px)",

            [theme.breakpoints.down('sm')]: {
                position: "fixed",
                top: "0",
                left: "0",
                zIndex: 9999,

                marginTop: theme.spacing(8),
            },
            [theme.breakpoints.up('sm')]: {
                position: "relative",
                marginTop: theme.spacing(5),

                zIndex: 4,
            },
        },
        headerContent: {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",

            height: "100%",
            width: "100%",
            maxWidth: "1450px",

            [theme.breakpoints.down('sm')]: {
                marginLeft: theme.spacing(2),
                marginRight: theme.spacing(2),
            },
            [theme.breakpoints.up('sm')]: {
                marginLeft: theme.spacing(6),
                marginRight: theme.spacing(6),
            },
        },
        logoRoot: {
            height: "60%",
        },
        logoImage: {
            height: "100%",
            width: "auto",
        },
        buttonsRoot: {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",

            width: "250px",
        },
    }
})

interface HeaderProps {
    activePage: string;
}



export default function Header({ activePage }: HeaderProps) {
    const { classes } = useStyles()

    const theme = useTheme()
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'))



    return (      
        <header className={ classes.root }>
            <div className={ classes.headerContent }>
                <Link className={ classes.logoRoot } href="/">
                    <Image  className={ classes.logoImage }
                            src={ adCamHeaderLogo }
                            alt="AD CAM, installateurs de systèmes de télésurveillance à Orléans"
                    />
                </Link>
                
                {
                    !isSmallScreen  ? (
                                        <div className={ classes.buttonsRoot }>
                                            <IconButton icon={ 'invoice' } text={ 'Devis gratuit' } link={ '/contact' } description={ 'Obtenez rapidement un devis 100% gratuit.' }/>
                                            <HamburgerNav activePage={ activePage } hasButton={ false } />
                                        </div>
                                    ) : (
                                        <>
                                            <HamburgerNav activePage={ activePage } hasButton={ true } />
                                        </>
                                    )
                }
            </div>
        </header>
    )
}