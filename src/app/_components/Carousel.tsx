'use client'
/* Utils & Data Imports */
import { ReactNode, useEffect, useState } from "react"
/* Library Imports */
import { makeStyles } from 'tss-react/mui'
/* Icons Imports */
import { MdArrowBackIosNew } from "react-icons/md"
import { MdArrowForwardIos } from "react-icons/md"
import { motion, Variants } from "framer-motion"




const useStyles = makeStyles()((theme) => {
    return {
        root: {
            position: "relative",

            display: "flex",
            alignItems: "center",
            justifyContent: "center",

            width: "100%",
            maxWidth: "100%",
        },
        button: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        
            position: "absolute",

            backgroundColor: "transparent",
            opacity: 0.5,
            border: "none",
            outline: "none",
            width: "auto",
            fontSize: theme.typography.pxToRem(36),

            cursor: "pointer",

            zIndex: 10,
        },
        content: {
            position: "relative",

            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-around",

            width: "95%",
            maxWidth: "95%",
        },
        slide: {
            position: "relative",
            
            boxSizing: "border-box",
            width: "auto",
            paddingLeft: "5px",
            paddingRight: "5px",

            transition: "all 0.3s ease-in-out",
        }
    }
})



const buttonVariants: Variants = {
    rest: {
        scale: 1,
        transition: { duration: 0.1 }
    },
    hover: {
        scale: 1.3,
        transition: { duration: 0.1 }
    },
    click: {
        scale: 0.9,
    }
}



interface CarouselProps {
    children: ReactNode[],
    startingIndex: number,
    maxDistanceSeen: number,
    displayCentered: boolean
}



export default function Carousel({ children, startingIndex, maxDistanceSeen, displayCentered }: CarouselProps) {
    const { classes } = useStyles()



    function isEven(number: number): boolean {
        return number % 2 === 0
    }

    function handleSliding(isNext: boolean, prevIndex: number): number {
        const newIndex = isNext ? (prevIndex + 1) % children.length : (prevIndex - 1 + children.length) % children.length

        console.log(`Sliding ${isNext ? 'next' : 'previous'}. New index: ${newIndex}`)

        return newIndex
    }


    const [activeIndex, setActiveIndex] = useState(startingIndex)

    const handleNext = () => {
        setActiveIndex((prevIndex) => handleSliding(true, prevIndex))
    }

    const handlePrevious = () => {
        setActiveIndex((prevIndex) => handleSliding(false, prevIndex))
    }

    useEffect(() => {
        console.log("Component mounted. Starting index: ", startingIndex)
        setActiveIndex(startingIndex)
    }, [startingIndex])



    

    function calculateCentering(): string {
        const centering = displayCentered ? (isEven(children.length) ? "-50%" : "0") : (isEven(children.length) ? "0" : "50%")
        return centering
    }

    function calculateOpacity(index: number): number {
        const distanceFromActive = displayCentered ? Math.abs(activeIndex - index) : index >= activeIndex ? index - activeIndex : (activeIndex - 1) - index
        const opacity = distanceFromActive > maxDistanceSeen ? 0.1 : 1
        return opacity
    }

    const offset = Math.floor((children.length - 2) / 2) + 1

    console.log("Active Index: ", activeIndex)
    console.log("Children length: ", children.length)
    console.log("Offset: ", offset)




    return (      
        <div className={ classes.root}>
            <motion.div  className={ classes.button }
                            onClick={ handlePrevious }
                            style={{ left: "-10px" }}

                            variants={ buttonVariants }
                            initial="rest"
                            whileHover="hover"
                            whileTap="click"
            >
                <MdArrowBackIosNew />
            </motion.div>
                <div    className={ classes.content } >
                    {
                        children.map((child, index) => {
                            return (
                                <div    key={ index }
                                        className={ classes.slide }
                                        style={{ 
                                            opacity: calculateOpacity(index),
                                            transform: `translateX(${calculateCentering()}) translateX(${(-activeIndex + offset) * 100}%)`
                                         }}
                                >
                                    { child }
                                </div>
                            )
                        })
                    }
                </div>
            <motion.div     className={ classes.button } 
                            onClick={ handleNext }
                            style={{ right: "-10px" }}

                            variants={ buttonVariants }
                            initial="rest"
                            whileHover="hover"
                            whileTap="click"
            >
                <MdArrowForwardIos />
            </motion.div>
        </div> 
    )
}