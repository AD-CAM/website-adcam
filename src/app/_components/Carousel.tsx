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
            
            width: "auto",

            transition: "all 0.3s ease-in-out",
        }
    }
})

interface CarouselProps {
    children: ReactNode[]
}



export default function Carousel({ children }: CarouselProps) {
    const { classes } = useStyles()

    const [activeIndex, setActiveIndex] = useState(Math.floor(children.length / 2))

    const handleNext = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % children.length);
    }
    
    const handlePrevious = () => {
        setActiveIndex((prevIndex) => (prevIndex - 1 + children.length) % children.length);
    }

    function isEven(): boolean {
        if(Math.floor(children.length / 2) - (children.length / 2) === 0) {
            return true
        } else {
            return false
        }
    }

    function calculateOpacity(index: number): number {
        const distanceFromActive = Math.abs(activeIndex - index)
        const maxOpacity = 1
        const minOpacity = 0.1
        
        return Math.max(maxOpacity - distanceFromActive * 0.35, minOpacity)
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
                                        style={ isEven()    ? { transform: `translateX(-50%) translateX(${(-activeIndex + offset) * 350}px)`,
                                                                opacity: calculateOpacity(index)
                                                            }
                                                            : { transform: `translateX(${(-activeIndex + offset) * 350}px)`,
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