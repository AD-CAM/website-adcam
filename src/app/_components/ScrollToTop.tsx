'use client'
/* Libraries Imports */
import { Variants, motion } from "framer-motion"
import { makeStyles } from 'tss-react/mui'
import React, { useState, useEffect } from 'react'
/* Icons Imports */
import { AiOutlineArrowUp } from "react-icons/ai"



const useStyles = makeStyles()((theme) => {
    return {
        root: {
            position: "fixed",
            bottom: "64px",
            right: "18px",
            zIndex: "9999",

            display: "flex",
            alignItems: "center",
            justifyContent: "center",

            boxSizing: "border-box",

            width: "48px",
            height: "48px",

            padding: "4px",
            borderRadius: "6px",

            backgroundColor: "#C80404",
            opacity: "0.8",
            color: "#F5F5F5",

            fontSize: theme.typography.pxToRem(28),

            cursor: "pointer",
        }
    }
})



function getButtonVariants(isVisible: boolean, duration: number): Variants {
    return {
        visible: {
            scale: 1,
            translateY: "0%",
    
            display: "flex",
            visibility: "visible",

            opacity: 0.8,



            transition: {
                opacity: {
                    delay: !isVisible ? 0 : duration
                },
                translateY: {
                    delay: !isVisible ? 0 : duration
                },
                visibility: {
                    delay: isVisible ? 0 : duration
                },
                display: {
                    delay: isVisible ? 0 : duration
                }
            }
        },
        hover: {
            scale: 1.05,
            translateY: "0%",
        },
        hidden: {
            translateY: "100%",

            display: "none",
            visibility: "hidden",

            opacity: 0,



            transition: {
                opacity: {
                    delay: !isVisible ? 0 : duration
                },
                translateY: {
                    delay: !isVisible ? 0 : duration
                },
                visibility: {
                    delay: isVisible ? 0 : duration
                },
                display: {
                    delay: isVisible ? 0 : duration
                }
            }
        }
    }
}



export default function ScrollToTop() {
    const { classes } = useStyles()

    const [isVisible, setIsVisible] = useState(false)



    const handleScroll = () => {
        const scrollTop = window.scrollY

        if (scrollTop > 300) {
            setIsVisible(true)
        } else {
            setIsVisible(false)
        }
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }



    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])



    return (
        <motion.div
                className={ classes.root }
                onClick={ scrollToTop }

                variants={ getButtonVariants(isVisible, 0.5) }
                initial="hidden"
                animate={ isVisible ? "visible" : "hidden" }
                whileHover="hover"
                transition={{ duration: 0.5 }}
        >

            <AiOutlineArrowUp />

        </motion.div>
    )
}