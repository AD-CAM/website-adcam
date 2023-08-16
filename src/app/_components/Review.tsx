'use client'
/* Utils & Data Imports */
import { ReviewInfo } from "../_types/dataFiles"
const reviewList: ReviewInfo[] = require("../_data/reviewList.json")
/* Library Imports */
import { makeStyles } from 'tss-react/mui'
import { Variants, motion } from "framer-motion"
import Image from "next/image"
/* Components Imports */




const useStyles = makeStyles()((theme) => {
    return {
        root: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",

            borderRadius: "4px",

            padding: "20px",
            height: "190px",
            width: "300px",

            backgroundColor: "#f4f4f4",
        },
        googleLogo: {
            position: "absolute",
            right: "20px",

            backgroundImage: "url(https://cdn.trustindex.io/assets/platform/Google/icon.svg)",

            width: "20px",
            height: "20px",
        },
        header: {
            display: "flex",
            alignItems: "center",

            width: "100%",
        },
        profilePicture: {
            borderRadius: "50%",

            width: "40px",
            height: "40px",
        },
        nameAndDateRoot: {
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",

            marginLeft: theme.spacing(2),
        },
        name: {
            fontSize: theme.typography.pxToRem(14),
            fontWeight: "bold",

            margin: 0,
            padding: 0,
        },
        date: {
            fontSize: theme.typography.pxToRem(12),
            opacity: 0.5,

            margin: 0,
            padding: 0,
        }
    }
})



const reviewVariants: Variants = {
    rest: {
        transform: "translateY(0)"
    },
    hover: {
        transform: "translateY(-5px)"
    }
}



interface ReviewProps {
    name: string;
    photo: string;
    rating: number;
    text: string;
    time: number;
}



export default function Review({ name, photo, rating, text, time }: ReviewProps) {
    const { classes } = useStyles()

    return (      
        <motion.article className={ classes.root }
                        variants={ reviewVariants }
                        initial="rest"
                        whileHover="hover"
        >
            <div className={ classes.googleLogo }>
            </div>

            <div className={ classes.header }>
                <img decoding="async" className={ classes.profilePicture } src={ photo } alt={ `Photo de ${name}` } />
                <div className={ classes.nameAndDateRoot }>
                    <p className={ classes.name }>{ name }</p>
                    <p className={ classes.date }>{ time }</p>
                </div>
            </div>
        </motion.article> 
    )
}