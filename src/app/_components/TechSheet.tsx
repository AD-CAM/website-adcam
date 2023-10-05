/* eslint-disable @next/next/no-img-element */
'use client'
/* Types & Utils imports */
import { ReactNode } from "react"
import Image, { StaticImageData } from "next/image"
import { TechSheetData, TechSheetTextData, TechSheetBannerData } from "../_types/dataFiles"
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
            marginBottom: theme.spacing(4)
        },
        infoRoot: {
            boxSizing: "border-box",

            width: "600px",

            padding: theme.spacing(6),
            margin: 0,
        },
        infoTitle: {
            boxSizing: "border-box",

            padding: 0,
            margin: 0,

            fontSize: theme.typography.pxToRem(36),
            fontWeight: 400,

            color: "#404040"
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
        },
        bannerInfoRoot: {
            position: "relative",

            boxSizing: "border-box",

            padding: theme.spacing(8),
            paddingLeft: "0",
            margin: 0,
        },
        bannerTag: {
            position: "absolute",
            top: theme.spacing(6),
            boxSizing: "border-box",

            padding: 0,
            margin: 0,

            fontWeight: 600,


            color: "#C80404",
        },
        bannerTitle: {
            boxSizing: "border-box",

            padding: 0,
            margin: 0,

            fontSize: theme.typography.pxToRem(36),
            fontWeight: 400,

            color: "#F5F5F5",
        },
        bannerTitleBold: {
            fontWeight: 700,
        },
        bannerText: {
            fontWeight: 500,

            color: "#F5F5F5",
        },
        bannerTextBold: {
            fontWeight: 600,

            color: "#F5F5F5",
        },
        bannerImageContainer: {
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

            backgroundColor: "rgba(230, 230, 255, 1)",
        },
        bannerImage: {
            position: "relative",
            boxSizing: "border-box",

            height: "400px",
            paddingTop: theme.spacing(4),
            paddingRight: theme.spacing(4),

            zIndex: "9998",
        }
    }
})

function getVariant(isLeft: boolean): Variants {
    if(isLeft){
        return {rest: { opacity: 0, translateX: "-100%" }, loaded: { opacity: 1, translateX: "0%" }} 
    } else {
        return {rest: { opacity: 0, translateX: "100%" }, loaded: { opacity: 1, translateX: "0%" }}
    }
}



function TechSheetList({ image, alt, isLeft, boldTitle, regularTitle, subTitle, techSheet }: TechSheetData) {
    const { classes } = useStyles()



    return (      
        <article className={ classes.root } style={ isLeft ? { flexDirection: "row" } : { flexDirection: "row-reverse" } }>
            <Image src={ image } alt={ alt } height="600" width="600" style={ { objectFit: "contain" } } />
            <div className={ classes.infoRoot }>
                <h3 className={ classes.infoTitle }><strong className={ classes.infoTitleBold }>{ boldTitle }</strong>{ regularTitle }</h3>
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
        </article>
    )
}

function TechSheetText({ image, alt, isLeft, boldTitle, regularTitle, text }: TechSheetTextData) {
    const { classes } = useStyles()



    return (      
        <article className={ classes.root } style={ isLeft ? { flexDirection: "row" } : { flexDirection: "row-reverse" } }>
            <Image src={ image } alt={ alt } height="600" width="600" style={ { objectFit: "contain" } } />
            <div className={ classes.infoRoot }>
                <h3 className={ classes.infoTitle }><strong className={ classes.infoTitleBold }>{ boldTitle }</strong>{ regularTitle }</h3>
                {
                    text.map((paragraph, index) => {
                        return  <p key={ index } className={ paragraph.type === "bold" ? classes.infoTextBold : classes.infoText }>
                                    { paragraph.text }
                                </p>
                    })
                }
            </div>
        </article>
    )
}

function TechSheetBanner({ image, alt, isTop, tag, boldTitle, regularTitle, text }: TechSheetBannerData) {
    const { classes } = useStyles()



    return (      
        <div className={ classes.bannerRoot }>
            <div className={ classes.bannerSubRoot }>
                <div className={ classes.bannerInfoRoot }>
                    <p className={ classes.bannerTag }>{ tag }</p>
                    {
                        isTop   ?   <h1 className={ classes.bannerTitle }><strong className={ classes.bannerTitleBold }>{ boldTitle }</strong>{ regularTitle }</h1>
                                :   <h2></h2>
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
                    <div className={ classes.bannerImageGlow }></div> 
                    <img src={ image.src } alt={ alt } className={ classes.bannerImage } />
                </div>
                
            </div>
        </div>
    )
}



export { TechSheetList, TechSheetText, TechSheetBanner }