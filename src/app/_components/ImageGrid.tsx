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
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",

            width: "100%",

            [theme.breakpoints.down('sm')]: {
                alignItems: "center",
                flexDirection: "column",
            },
            [theme.breakpoints.up('sm')]: {
                alignItems: "flex-start",
                flexDirection: "row",
            }
        },
        column: {
            flexGrow: "1",

            marginLeft: "2px",
            marginRight: "2px",
            marginBottom: "4px",

            

            [theme.breakpoints.down('sm')]: {
                width: "100%",
                maxWidth: "300px",
            },
            [theme.breakpoints.up('sm')]: {
                width: "33%",
                maxWidth: "175px",
            },
            [theme.breakpoints.up('md')]: {
                maxWidth: "250px",
            }
        },
        imageContainer: {
            position: "relative",

            display: "flex",
            alignItems: "center",
            justifyContent: "center",

            width: "100%",
            height: "auto",

            marginBottom: "4px",
        },
        image: {
            width: "100%",
        },
        imageText: {
            position: "absolute",

            boxSizing: "border-box",

            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",

            fontWeight: 500,

            height: "100%",
            width: "100%",
            padding: theme.spacing(2),

            color: "white",
            backgroundColor: "rgba(200, 4, 4, 0.5)",
        }
    }
})



const  imageTextVariants: Variants= {
    rest: {
        opacity: 0,
        visibility: "hidden",
        transition: { duration: 0.2 }
    },
    hover: {
        opacity: 1,
        visibility: "visible",
        transition: { duration: 0.2 }
    }
}



type ImageGridObject = {
    image: StaticImageData;
    alt: string;
}

interface ImageGridProps {
    imageArray: ImageGridObject[][];
}



export default function ImageGrid({ imageArray }: ImageGridProps) {
    const { classes } = useStyles()



    return (      
        <div className={ classes.root }>
            {
                imageArray.map((array, index) => (
                    <div className={ classes.column } key={ index }>
                        {
                            array.map(({ image, alt }, index) => (
                                <motion.div key={ index } className={ classes.imageContainer } initial="rest" whileHover="hover">
                                    <img className={ classes.image } src={ image.src } alt={ alt } />
                                    <motion.p className={ classes.imageText } variants={ imageTextVariants }>{ alt }</motion.p>
                                </motion.div>
                                
                            ))
                        }
                    </div>
                ))
            }
        </div>
    )
}