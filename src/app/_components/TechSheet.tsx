/* eslint-disable @next/next/no-img-element */
'use client'
/* Types & Utils imports */
import { ReactNode } from "react"
import Image, { StaticImageData } from "next/image"
import { TechSheetData, TechSheetTextData, TechSheetBannerData, TechSheetSubBannerData } from "../_types/dataFiles"
/* Library Imports */
import { Variants, motion } from "framer-motion"
import { makeStyles } from 'tss-react/mui'
import { useMediaQuery, useTheme } from "@mui/material"
/* Components Imports */
import Paper from "@mui/material"



const useStyles = makeStyles()((theme) => {
    return {
        root: {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",

            width: "100%",
            maxWidth: "1100px",

            marginTop: theme.spacing(4),
            marginBottom: theme.spacing(4),

            [theme.breakpoints.down('lg')]: {
                width: "600px",
                maxWidth: "90%",


                borderRadius: theme.spacing(1),
                backgroundColor: "rgba(240, 240, 240, 1)"
            },
        },
        infoImage: {
            boxSizing: "border-box",

            width: "600px",
            height: "auto",

            borderRadius: theme.spacing(1),

            objectFit: "cover",

            [theme.breakpoints.down('md')]: {
                maxWidth: "100%",
            },
            [theme.breakpoints.up('md')]: {
                maxHeight: "60vh",
            },
            [theme.breakpoints.up('lg')]: {
                maxHeight: "none",
            },
        },
        infoRoot: {
            boxSizing: "border-box",

            width: "600px",

            padding: theme.spacing(6),
            margin: 0,

            [theme.breakpoints.down('md')]: {
                padding: theme.spacing(4),
                maxWidth: "100%",
            },
        },
        infoTitle: {
            boxSizing: "border-box",

            padding: 0,
            margin: 0,

            fontSize: theme.typography.pxToRem(36),
            fontWeight: 400,

            color: "#404040",

            [theme.breakpoints.down('sm')]: {
                fontSize: theme.typography.pxToRem(28),
            },
        },
        infoTitleBold: {
            fontWeight: 700,
        },
        infoText: {
            color: "#404040",
        },
        infoTextBold: {
            fontWeight: 600,

            color: "#404040",
        },
        infoSubTitle: {
            fontWeight: 600,

            color: "#404040",
        },
        infoList: {

        },
        infoListEntry: {
            display: "flex",
            alignItems: "center",

            boxSizing: "border-box",
            paddingLeft: theme.spacing(0.5),

            fontSize: theme.typography.pxToRem(15),
        },
        infoListEntryText: {
            boxSizing: "border-box",
            marginLeft: theme.spacing(1)
        },



        bannerRoot: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",

            boxSizing: "border-box",

            width: "100%",
            height: "auto",

            overflow: "hidden",

            backgroundColor: "rgba(20, 20, 20, 1)",
        },
        bannerSubRoot: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",

            boxSizing: "border-box",
            
            width: "100%",
            height: "100%",
            maxWidth: "1100px",

            [theme.breakpoints.down('lg')]: {
                flexDirection: "column-reverse"
            },
        },
        bannerInfoRoot: {
            position: "relative",

            boxSizing: "border-box",

            padding: theme.spacing(8),
            paddingLeft: "0",
            margin: 0,

            [theme.breakpoints.down('sm')]: {
                padding: theme.spacing(4),
                paddingTop: theme.spacing(8),
            },
            [theme.breakpoints.up('sm')]: {
                paddingLeft: theme.spacing(8),
            },
            [theme.breakpoints.up('lg')]: {
                paddingLeft: "0",
            },
        },
        bannerTag: {
            position: "absolute",
            top: theme.spacing(6),
            boxSizing: "border-box",

            padding: 0,
            margin: 0,

            fontWeight: 600,


            color: "rgba(252, 105, 105, 1)",
        },
        bannerTitle: {
            boxSizing: "border-box",

            padding: 0,
            margin: 0,

            fontSize: theme.typography.pxToRem(36),
            fontWeight: 400,

            color: "#F5F5F5",

            [theme.breakpoints.down('sm')]: {
                paddingBottom: theme.spacing(4),
                fontSize: theme.typography.pxToRem(26),
            },
        },
        bannerTitleBold: {
            fontWeight: 700,
        },
        bannerText: {
            fontWeight: 500,

            color: "#F5F5F5",

            [theme.breakpoints.down('sm')]: {
                fontSize: theme.typography.pxToRem(16),
            },
        },
        bannerTextBold: {
            fontWeight: 600,

            color: "#F5F5F5",
        },
        bannerImageContainer: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",

            position: "relative",
        },
        bannerImageGlow: {
            position: "absolute",
            zIndex: "9998",
            height: "60%",
            width: "60%",

            top: "25%",
            left: "25%",

            filter: "blur(75px)",
            rotate: "45deg",

            backgroundColor: "rgba(230, 230, 255, 0.7)",
        },
        bannerImage: {
            position: "relative",
            boxSizing: "border-box",

            objectFit: "cover",

            height: "400px",
            padding: theme.spacing(4),

            zIndex: "9998",

            [theme.breakpoints.down('lg')]: {
                width: "600px",
                maxWidth: "90%",
                height: "auto",

                paddingTop: theme.spacing(8),
                paddingBottom: "0",
            },
        },
        bannerImageBackground: {
            position: "relative",
            boxSizing: "border-box",

            objectFit: "cover",

            height: "250px",
            marginTop: theme.spacing(4),
            marginBottom: theme.spacing(4),
            borderRadius: theme.spacing(1),

            overflow: "hidden",

            zIndex: "9998",

            [theme.breakpoints.down('lg')]: {
                width: "600px",
                maxWidth: "90%",
                height: "auto",

                marginTop: theme.spacing(8),
                marginBottom: "0",
            },
        },



        subBannerRoot: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",

            boxSizing: "border-box",

            width: "100%",
            height: "auto",

            backgroundColor: "rgba(30, 30, 30, 1)",
        },
        subBannerSubRoot: {
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",

            boxSizing: "border-box",

            [theme.breakpoints.down('sm')]: {
                paddingLeft: theme.spacing(4),
            },
            [theme.breakpoints.up('sm')]: {
                paddingLeft: theme.spacing(8),

                width: "1100px",
                maxWidth: "100%",
                height: "100%",
            },
            [theme.breakpoints.up('lg')]: {
                paddingLeft: 0,
            },
        },
        subBannerText: {
            fontSize: theme.typography.pxToRem(28),
            fontWeight: 600,

            padding: theme.spacing(4),
            paddingLeft: 0
        },
        subBannerTextSection: {
            color: "#F5F5F5",
        },
        subBannerTextSubSection: {
            color: "rgba(252, 105, 105, 1)",
        },
    }
})

function getVariant(isLeft: boolean): Variants {
    if(isLeft){
        return {rest: { opacity: 0, translateX: "-10%" }, loaded: { opacity: 1, translateX: "0%" }} 
    } else {
        return {rest: { opacity: 0, translateX: "10%" }, loaded: { opacity: 1, translateX: "0%" }}
    }
}

function getFlexDirection(isLeft: boolean, isSmallScreen: boolean): any {
    if(isSmallScreen) { return { flexDirection: "column" } }
    else if(isLeft) { return { flexDirection: "row" } }
    else { return { flexDirection: "row-reverse" } }
}



function TechSheetList({ image, alt, isLeft, boldTitle, regularTitle, subTitle, techSheet }: TechSheetData) {
    const { classes } = useStyles()

    const theme = useTheme()
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('lg'))



    return (      
        <motion.article
                        className={ classes.root }
                        style={ getFlexDirection(isLeft, isSmallScreen) }

                        variants={ getVariant(isLeft) }
                        initial="rest"
                        whileInView="loaded"
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
        >
            <img src={ image } alt={ alt } className={ classes.infoImage } />
            <div className={ classes.infoRoot }>
                <h4 className={ classes.infoTitle }><strong className={ classes.infoTitleBold }>{ boldTitle }</strong>{ regularTitle }</h4>
                <p className={ classes.infoSubTitle }>{ subTitle }</p>
                
                <div className={ classes.infoList }>
                    {
                        techSheet.map((entry, index) => {
                            return  <div className={ classes.infoListEntry} key={ index }>
                                        <Image src={ `ajax/icons/${entry.icon}.svg` } alt={ "" } height="32" width="32" />
                                        <p className={ classes.infoListEntryText }>{ entry.text }</p>
                                    </div>
                        })
                    }
                </div>

            </div>
        </motion.article>
    )
}

function TechSheetText({ image, alt, isLeft, boldTitle, regularTitle, text }: TechSheetTextData) {
    const { classes } = useStyles()

    const theme = useTheme()
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('lg'))



    return (      
        <motion.article
                        className={ classes.root }
                        style={ getFlexDirection(isLeft, isSmallScreen) }

                        variants={ getVariant(isLeft) }
                        initial="rest"
                        whileInView="loaded"
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
        >
            <img src={ image.src } alt={ alt } className={ classes.infoImage } />
            <div className={ classes.infoRoot }>
                <h4 className={ classes.infoTitle }><strong className={ classes.infoTitleBold }>{ boldTitle }</strong>{ regularTitle }</h4>
                {
                    text.map((paragraph, index) => {
                        return  <p key={ index } className={ paragraph.type === "bold" ? classes.infoTextBold : classes.infoText }>
                                    { paragraph.text }
                                </p>
                    })
                }
            </div>
        </motion.article>
    )
}

function TechSheetBanner({ image, alt, isTop, tag, boldTitle, regularTitle, text, transparent }: TechSheetBannerData) {
    const { classes } = useStyles()

    const theme = useTheme()
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('lg'))



    return (      
        <div className={ classes.bannerRoot }>
            <motion.div
                        className={ classes.bannerSubRoot }

                        variants={ getVariant(true) }
                        initial="rest"
                        whileInView="loaded"
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
            >
                <div className={ classes.bannerInfoRoot }>
                    <p className={ classes.bannerTag }>{ tag }</p>
                    {
                        isTop   ?   <h1 className={ classes.bannerTitle }><strong className={ classes.bannerTitleBold }>{ boldTitle }</strong>{ regularTitle }</h1>
                                :   <h2 className={ classes.bannerTitle }><strong className={ classes.bannerTitleBold }>{ boldTitle }</strong>{ regularTitle }</h2>
                    }
                    {
                        text.map((paragraph, index) => {
                            return  <p key={ index } className={ paragraph.type === "bold" ? classes.bannerTextBold : classes.bannerText }>
                                        { paragraph.text }
                                    </p>
                        })
                    }
                </div>
                <div className={ classes.bannerImageContainer }>
                    { transparent && <div className={ classes.bannerImageGlow }></div> } 
                    <img src={ image.src } alt={ alt } className={ transparent ? classes.bannerImage : classes.bannerImageBackground } />
                </div>
                
            </motion.div>
        </div>
    )
}

function TechSheetSubSectionBanner({ section, subSection }: TechSheetSubBannerData) {
    const { classes } = useStyles()



    return (      
        <div className={ classes.subBannerRoot }>
            <div className={ classes.subBannerSubRoot }>
                <h3 className={ classes.subBannerText }>
                    <span className={ classes.subBannerTextSection }>{ section }</span>
                    <span className={ classes.subBannerTextSubSection }>{ subSection }</span>
                </h3>
            </div>
        </div>
    )
}



export { TechSheetList, TechSheetText, TechSheetBanner, TechSheetSubSectionBanner }