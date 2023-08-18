/* eslint-disable @next/next/no-img-element */
'use client'
/* Types & Utils imports */1
import { ReactNode } from "react"
import { StaticImageData } from "next/image"
/* Library Imports */
import { Variants, motion } from "framer-motion"
import { makeStyles } from 'tss-react/mui'
import { useMediaQuery, useTheme } from "@mui/material"



const useStyles = makeStyles()((theme) => {
    return {
        root: {
            width: "100%",
        },
        mainTitle: {
            width: "100%",
            textAlign: "center",

            color: "rgba(200, 4, 4, 1)",
            fontSize: theme.typography.pxToRem(22),
            fontWeight: 500,

            marginBottom: theme.spacing(4),
        },
        imageContainer: {
            [theme.breakpoints.down('sm')]: {
                marginTop: theme.spacing(4),
                width: "75%",
            },
            [theme.breakpoints.up('sm')]: {
                marginTop: theme.spacing(4),
                width: "50%",
            },
            [theme.breakpoints.up('md')]: {
                width: "30%",
            },
        },
        image: {
            width: "100%",
            height: "auto",
        },
        mainContainerLeft: {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",

            width: "100%",
            height: "auto",

            [theme.breakpoints.down('md')]: {
                flexDirection: "column-reverse",
            }
        },
        mainContainerRight: {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",

            width: "100%",
            height: "auto",

            [theme.breakpoints.down('md')]: {
                flexDirection: "column",
            }
        },
        textContainer: {
            boxSizing: "border-box",

            fontSize: theme.typography.pxToRem(15),
            color: "rgba(41, 41, 41, 1)",

            [theme.breakpoints.down('md')]: {
                paddingLeft: 0,
                maxWidth: "100%",
            },
            [theme.breakpoints.up('md')]: {
                maxWidth: "70%",
            },
        },
    }
})

function getImageVariant(isLeft: boolean): Variants {
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
    children: ReactNode[] | ReactNode;
    title: string;
}



export default function ImagedArticle({ image, alt, isLeft, children, title }: ImagedArticleProps) {
    const { classes } = useStyles()

    const theme = useTheme()
    const isMediumScreen = useMediaQuery(theme.breakpoints.down('md'))

    function getStyle() {
        if(isMediumScreen) {
            return { padding: 0 }
        } else if(isLeft) {
            return { paddingLeft: "32px" }
        } else {
            return { paddingRight: "32px" }
        }
    }

    return (      
        <article className={ classes.root }>
            <h3 className={ classes.mainTitle }>{ title }</h3>
            <div className={ isLeft ? classes.mainContainerLeft : classes.mainContainerRight }>
                { isLeft && <motion.aside  className={ classes.imageContainer }
                
                                            variants={ getImageVariant(isLeft) }
                                            initial="rest"
                                            whileInView="loaded"
                                            transition={{ duration: 1, ease: "easeInOut" }}
                                            viewport={{ once: true }}
                            >
                                <img className={ classes.image } src={ image.src } alt={ alt } />
                            </motion.aside> }

                <div className={ classes.textContainer } style={ getStyle() }>
                    { children }
                </div>

                { !isLeft && <motion.aside  className={ classes.imageContainer }

                                            variants={ getImageVariant(isLeft) }
                                            initial="rest"
                                            whileInView="loaded"
                                            transition={{ duration: 1, ease: "easeInOut" }}
                                            viewport={{ once: true }}
                            >
                                <img className={ classes.image } src={ image.src } alt={ alt } />
                            </motion.aside> }
            </div>
        </article>
    )
}