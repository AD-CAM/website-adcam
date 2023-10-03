'use client'
/* Types & Utils imports */
import { ReactNode } from "react"
import Image, { StaticImageData } from "next/image"
import { TechSheetData } from "../_types/dataFiles"
/* Library Imports */
import { Variants, motion } from "framer-motion"
import { makeStyles } from 'tss-react/mui'
import { useMediaQuery, useTheme } from "@mui/material"




const useStyles = makeStyles()((theme) => {
    return {
        root: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",

            width: "100%",
        },
        infoRoot: {
            boxSizing: "border-box",

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



export default function TechSheet({ image, alt, isLeft, boldTitle, regularTitle, subTitle, techSheet }: TechSheetData) {
    const { classes } = useStyles()



    return (      
        <article className={ classes.root } style={ isLeft ? { flexDirection: "row" } : { flexDirection: "row-reverse" } }>
            <Image src={ image } alt={ alt } height="600" width="600" style={ { objectFit: "cover" } } />
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