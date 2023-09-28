/* eslint-disable @next/next/no-img-element */
'use client'
/* Types & Utils imports */
import { ReactNode } from "react"
import { StaticImageData } from "next/image"
import { TechSheetInfo } from "../_types/dataFiles"
/* Library Imports */
import { Variants, motion } from "framer-motion"
import { makeStyles } from 'tss-react/mui'
import { useMediaQuery, useTheme } from "@mui/material"




const useStyles = makeStyles()((theme) => {
    return {
        root: {
            width: "100%",
        },
    }
})

function getVariant(isLeft: boolean): Variants {
    if(isLeft){
        return {rest: { opacity: 0, translateX: "-100%" }, loaded: { opacity: 1, translateX: "0%" }} 
    } else {
        return {rest: { opacity: 0, translateX: "100%" }, loaded: { opacity: 1, translateX: "0%" }}
    }
}

interface ImagedArticleProps {
    image: StaticImageData;
    alt: string;
    isLeft: boolean;
    title: string;
    subTitle: string;
    techSheet: TechSheetInfo[]
}



export default function TechSheet({ image, alt, isLeft, title, subTitle }: ImagedArticleProps) {
    const { classes } = useStyles()



    return (      
        <article className={ classes.root }>

        </article>
    )
}