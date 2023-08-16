'use client'
/* Utils & Data Imports */
import { ReactNode, useState } from "react"
/* Library Imports */
import { makeStyles } from 'tss-react/mui'
/* Components Imports */




const useStyles = makeStyles()((theme) => {
    return {
        root: {
            position: "relative",

            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",

            width: "100%",
            maxWidth: "100%",
        },
        buttonLeft: {
            position: "absolute",
            left: 0,

            zIndex: 10,
        },
        buttonRight: {
            position: "absolute",
            right: 0,

            zIndex: 10,
        },
        content: {
            position: "relative",

            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",

            width: "100%",
            maxWidth: "100%",
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

interface CarouselProps {
    children: ReactNode[],
    maxDistanceSeen: number,
    displayCentered: boolean
}



export default function Carousel({ children, maxDistanceSeen, displayCentered }: CarouselProps) {
    const { classes } = useStyles()



    function isEven(number: number): boolean {
        if(Math.floor(number / 2) - (number / 2) === 0) {
            return true
        } else {
            return false
        }
    }

    function handleSliding(isNext: boolean, prevIndex: number): number {
        if(isNext){
            if((prevIndex + 1) % children.length === 0 && !displayCentered) {
                return 1
            }
            else {
                return (prevIndex + 1) % children.length
            }    
        }
        if(!isNext){
            if((prevIndex - 1 + children.length) % children.length === 0 && !displayCentered) {
                return children.length - 1
            }
            else {
                return (prevIndex - 1 + children.length) % children.length
            }    
        }
        return 0
    }


    const [activeIndex, setActiveIndex] = useState(1)
    const handleNext = () => {
        setActiveIndex((prevIndex) => handleSliding(true, prevIndex));
    }

    const handlePrevious = () => {
        setActiveIndex((prevIndex) => handleSliding(false, prevIndex));
    }



    

    function calculateCentering(): string {
        if(displayCentered && isEven(children.length)){
            return "-50%"
        } else if(!displayCentered && isEven(children.length)){
            return "0"
        } else if(displayCentered && !isEven(children.length)){
            return "0"
        } else if(!displayCentered && !isEven(children.length)){
            return "-50%"
        }
        return "0"
    }

    function calculateOpacity(index: number): number {
        let distanceFromActive = 0

        if(displayCentered) {
            distanceFromActive = Math.abs(activeIndex - index)
        } else if(index >= activeIndex) {
            distanceFromActive = index - activeIndex
        } else if(index <= activeIndex) {
            distanceFromActive = (activeIndex - 1) - index
            
        }

        if (!displayCentered && index === activeIndex - 1){
            return 1
        }
        
        if(distanceFromActive > maxDistanceSeen) {
            return 0.1
        } else {
            return 1
        }
    }

    const offset = Math.floor((children.length - 2) / 2) + 1






    return (      
        <div className={ classes.root}>
            <button className={ classes.buttonLeft } onClick={ handlePrevious }>{ `<` }</button>
                <div className={ classes.content }>
                    {
                        children.map((child, index) => {
                            return (
                                <div    key={ index }
                                        className={ classes.slide }
                                        style={ isEven(children.length) ? { transform: `translateX(${calculateCentering()}) translateX(${(-activeIndex + offset) * 100}%)`,
                                                                            opacity: calculateOpacity(index)
                                                                        }
                                                                        : { transform: `translateX(${calculateCentering()}) translateX(${(-activeIndex + offset) * 100}%)`,
                                                                            opacity: calculateOpacity(index)
                                                                        }}
                                >
                                    { child }
                                </div>
                            )
                        })
                    }
                </div>
            <button className={ classes.buttonRight } onClick={ handleNext }>{ `>` }</button>
        </div> 
    )
}