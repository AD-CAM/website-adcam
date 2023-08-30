'use client'
/* Assets Imports */
import adCamFullLogo from "/public/logos/logo-full_white.png"
import adCamFooterLogo from "/public/logos/logo_white.png"
/* Utils & Data Imports */
import { PageInfo } from "../_types/dataFiles"
const pageList: PageInfo[] = require("../_data/pageList.json")
const conditionsList: PageInfo[] = require("../_data/conditionsList.json")
/* Library Imports */
import { useTheme, useMediaQuery } from "@mui/material"
import { makeStyles } from 'tss-react/mui'
/* Components Imports */
import Image from "next/image"
import { IconButton, SocialButton } from "./Button"
import { NavLinkFooter } from "./NavLink"
import { ContactForm } from "./ContactForm"



const useStyles = makeStyles()((theme) => {
    return {
        root: {
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-around",

            position: "relative",
            zIndex: 4,

            width: "100%",
            height: "auto",
            marginTop: theme.spacing(5),
            paddingTop: theme.spacing(4),

			boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.37)",

            [theme.breakpoints.down('sm')]: {
                flexDirection: "column",
                flexWrap: "nowrap",

                height: "auto",

                backgroundColor: "rgba(15, 15, 15, 1)",
            },
            [theme.breakpoints.up('sm')]: {
                flexDirection: "row",
                
                backgroundColor: "rgba(24, 24, 24, 1)",
            },
            [theme.breakpoints.down('lg')]: {
                flexWrap: "wrap",
            },
            [theme.breakpoints.up('lg')]: {
                flexWrap: "wrap",
            },
        },
        logoRoot: {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            
            
            height: "100%",
            width: "auto",

            [theme.breakpoints.down('sm')]: {
                flexBasis: "auto",
                flexDirection: "column",
                alignItems: "center",
                alignSelf: "center",
                justifyContent: "space-between",

                height: "auto",

                marginBottom: 0,
            },
            [theme.breakpoints.up('sm')]: {
                flexBasis: "100%",
                justifyContent: "center",
                flexDirection: "row",
                
                marginBottom: theme.spacing(8),
            },
            [theme.breakpoints.up('md')]: {
                flexBasis: "45%",
                justifyContent: "center",

                marginBottom: theme.spacing(10),
            },
            [theme.breakpoints.up('lg')]: {
                flexBasis: "auto",
                justifyContent: "space-between",

                marginBottom: 0,
            },
        },
        logoImage: {
            alignSelf: "center",

            [theme.breakpoints.down('sm')]: {
                width: "75%",
                height: "auto",

                marginRight: "0",
                marginBottom: theme.spacing(2),
            },
            [theme.breakpoints.up('sm')]: {
                height: "140px",
                width: "auto",
                
                marginRight: theme.spacing(4),
            },
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
            marginBottom: theme.spacing(2),

            color: "#FFF",
        },
        logoInfoButtons: {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",

            marginTop: 0,
            marginBottom: theme.spacing(2),

            width: "100%",
        },
        footerNavContainer: {
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",

            [theme.breakpoints.down('sm')]: {
                flexDirection: "column",
                flexBasis: "auto",
            },
            [theme.breakpoints.up('sm')]: {
                flexDirection: "row",
                flexBasis: "100%",

                marginBottom: theme.spacing(8),
            },
            [theme.breakpoints.up('md')]: {
                flexDirection: "row",
                flexBasis: "45%",
            },
            [theme.breakpoints.up('lg')]: {
                flexDirection: "row",
                flexBasis: "auto",
            },
        },
        footerNavRoot: {
            display: "flex",
            flexDirection: "column",

            [theme.breakpoints.down('sm')]: {
                alignItems: "flex-start",

                marginTop: theme.spacing(6),
                paddingLeft: theme.spacing(3),
                width: "100%",
            },
            [theme.breakpoints.up('sm')]: {
                height: "100%",
            },
        },
        footerNavTitle: {
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",

            marginTop: 0,
            marginBottom: theme.spacing(2),
            marginLeft: theme.spacing(2),

            color: "#FFF",

            [theme.breakpoints.down('sm')]: {
                marginLeft: theme.spacing(2),
            },
        },
        copyright: {
            alignSelf: "flex-end",
            flexBasis: "100%",

            width: "100vw",

            fontSize: theme.typography.pxToRem(15),
            fontWeight: 600,
            textAlign: "center",

            backgroundColor: "rgba(0, 0, 0, 0.6)",
            color: "#FFF",

            marginTop: theme.spacing(5),
            marginBottom: 0,
            paddingTop: theme.spacing(1),
            paddingBottom: theme.spacing(1),
        }
    }
})

function FooterNavigation() {
    const { classes } = useStyles()

    return (
        <div className={ classes.footerNavRoot }>
            <h3 className={ classes.footerNavTitle }>
                { `Navigation` }
            </h3>
            {
                pageList.map(({ name, link, text }) => (
                    <NavLinkFooter  key={ name }
                                    isActive={ false }
                                    link={ link }
                                    linkText={ text } />
                ))
            }
        </div>
    )
}

function FooterConditions() {
    const { classes } = useStyles()

    return (
        <div className={ classes.footerNavRoot }>
            <h3 className={ classes.footerNavTitle }>
                { `Conditions` }
            </h3>
            {
                conditionsList.map(({ name, link, text }) => (
                    <NavLinkFooter  key={ name }
                                    isActive={ false }
                                    link={ link }
                                    linkText={ text } />
                ))
            }
        </div>
    )
}



export default function Footer() {
    const { classes } = useStyles()

    const theme = useTheme()
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'))

    return (      
        <footer className={ classes.root }>
            <div className={ classes.logoRoot }>
                {   !isSmallScreen  ? (
                                        <Image  className={ classes.logoImage }
                                            src={ adCamFooterLogo }
                                            alt="Logo de AD CAM, installateurs de systèmes de surveillance près d'Orléans"
                                        />
                                )   : (
                                        <Image  className={ classes.logoImage }
                                            src={ adCamFullLogo }
                                            alt="Logo de AD CAM, installateurs de systèmes de surveillance près d'Orléans"
                                        />
                                )

                }
                <div className={ classes.logoInfoContainer }>
                    <h3 className={ classes.logoInfoTitle }>
                        <span>{ `Installateur d’alarme et vidéo` }</span>
                        <span>{ `surveillance à Orléans (45)` }</span>
                    </h3>
                    <div className={ classes.logoInfoButtons }>
                        <IconButton icon={ 'phone' } text={ '06 95 86 91 76' } link={ 'tel:+33695869176' } description={ 'Appelez nous au 06 95 86 91 76' }/>
                        <SocialButton icon={ 'facebook' } link={ 'https://www.facebook.com/AD-CAM-103597488861540' } description={ 'Suivez nous sur Facebook.' }/>
                    </div>
                    <IconButton icon={ 'certificate' } text={ 'Certifié AJAX Fibra' } link={ '/files/ajax-fibra_certificate.pdf' } description={ `Nous sommes certifiés pour l'installation d'équipements AJAX Fibra.` }/>
                </div>
            </div>
            <div className={ classes.footerNavContainer }>
                <FooterNavigation />
                <FooterConditions />
            </div>
            <ContactForm location={ "footer" } />

            <p className={ classes.copyright }>
                AD CAM © { new Date().getFullYear() } - Tous droits réservés
            </p>
        </footer>
    )
}
