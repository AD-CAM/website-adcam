/* eslint-disable @next/next/no-img-element */
'use client'
/* Utils & Data Imports */
import { ReviewInfo } from "../_types/dataFiles"
const reviewList: ReviewInfo[] = require("../_data/reviewList.json")
/* Library Imports */
import { makeStyles } from 'tss-react/mui'
import { Variants, motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"
/* Components Imports */




const useStyles = makeStyles()((theme) => {
    return {
        root: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",

            boxSizing: "border-box",

            borderRadius: "4px",

            padding: "20px",
            minHeight: "230px",

            backgroundColor: "#f4f4f4",

            [theme.breakpoints.down('sm')]: {
                width: "340px",
                maxWidth: "75vw",
            },
            [theme.breakpoints.up('sm')]: {
                width: "340px",
            },
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
        },
        rating: {
            display: "flex",
            alignSelf: "flex-start",

            marginTop: theme.spacing(1.5),
        },
        star: {
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",

            marginRight: "2px",

            width: "17px",
            height: "17px",
        },
        textRoot: {
            marginTop: theme.spacing(1.5),

            width: "100%",
        },
        text: {
            fontSize: theme.typography.pxToRem(15),
        
            overflow: "hidden",
            textOverflow: "ellipsis",

            margin: 0,

            height: "80px",
            width: "100%",
        },
        expandButton: {
            alignSelf: "flex-start",

            border: "none",
            outline: "none",
            backgroundColor: "transparent",

            padding: 0,
            margin: 0,
            marginTop: theme.spacing(1.6),

            fontSize: theme.typography.pxToRem(14),
            fontWeight: 500,
            opacity: 0.5,

            cursor: "pointer",

            "&:hover": {
                opacity: .9,
                textDecoration: "underline",
            }
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

const textVariants: Variants = {
    collapsed: {
        height: "80px",
    },
    expanded: {
        height: "auto",
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

    const [expanded, setExpanded] = useState(false)
    const [overflowing, setOverflowing] = useState(false)
    const textRef = useRef<HTMLParagraphElement>(null)

    useEffect(() => {
        if(textRef.current) {
            setOverflowing(textRef.current.scrollHeight > textRef.current.clientHeight)
        }
    }, [text])


    const ratingArray = []
    for(let i = 1; i <= 5; i++) {
        if(rating >= i) {
            ratingArray.push(true)
        } else {
            ratingArray.push(false)
        }
    }


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

            <div className={ classes.rating }>
                {
                    ratingArray.map((star, index) => {
                        return (
                            <div key={ index } className={ classes.star } style={ star ?    {
                                                                                                backgroundImage: "url(https://cdn.trustindex.io/assets/platform/Google/star/f.svg)",
                                                                                            } : {
                                                                                                backgroundImage: "url(https://cdn.trustindex.io/assets/platform/Google/star/e.svg)",
                                                                                            }}>
                            </div>
                        )
                    })
                }
            </div>

            <div className={ classes.textRoot }>
                <motion.p   className={ classes.text }
                            ref={ textRef }
                            variants={ textVariants }

                            initial="collapsed"
                            animate={ expanded ? "expanded" : "collapsed" }
                >
                    { text }
                </motion.p>
            </div>
            {
                (overflowing || expanded) && (
                    <button className={ classes.expandButton } onClick={() => setExpanded(!expanded)}>
                        { expanded ? "Cacher" : "Lire la suite" }
                    </button>
                )
            }
        </motion.article> 
    )
}