'use client'
/* Utils & Data Imports */
import { ReactNode, useState } from "react"
/* Library Imports */
import { makeStyles } from 'tss-react/mui'
/* Components Imports */




const useStyles = makeStyles()((theme) => {
    return {
        root: {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",

            width: "100%",
        },
        button: {

        },
        content: {

        },
        slide: {
            display: "flex",
            transition: "transform 0.3s ease-in-out",
        }
    }
})

interface CarouselProps {
    children: ReactNode[]
}



export default function Carousel({ children }: CarouselProps) {
    const { classes } = useStyles()

    const [activeIndex, setActiveIndex] = useState(children.length / 2)

    const handleNext = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % children.length);
    }
    
    const handlePrevious = () => {
        setActiveIndex((prevIndex) => (prevIndex - 1 + children.length) % children.length);
    }

    

    return (      
        <div className={ classes.root}>
            <button className={ classes.button } onClick={ handlePrevious }>PREVIOUS</button>
                <div className={ classes.content }>
                    <div className={ classes.slide } style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
                        { children }
                    </div>
                </div>
            <button className={ classes.button } onClick={ handleNext }>NEXT</button>
        </div> 
    )
}