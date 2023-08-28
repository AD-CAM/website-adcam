'use client'
/* Assets Imports */
import backgroundHomeOne from "public/ecran_accueil_1.jpg"
import backgroundHomeTwo from "public/ecran_accueil_2.jpg"
/* Types & Utils Imports */
import { StaticImageData } from "next/image"
/* Library Imports */
import { motion, Variants } from "framer-motion"
import { makeStyles } from 'tss-react/mui'



const useStyles = makeStyles()((theme) => {
    return {
        root: {
            position: "absolute",
            top: "0",

            height: "100%",
            maxHeight: "100%",
            width: "100%",

            overflow: "hidden",
            whiteSpace: "nowrap",
        },
        imageRoot: {
            position: "absolute",

            height: "85vh",
            maxHeight: "100%",
            width: "100%",

            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPositionY: "center",
        }
    }
})



function getVariants(isFirst: boolean): Variants {
    return {
        initial: {
            opacity: isFirst ? 1 : 0,
        },
        animate: {
            opacity: isFirst ? 0 : 1,
            transition: {
              duration: 1,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "reverse",
              repeatDelay: 3,
            },
        },
    }
}



export default function ShiftingBackground({}) {
    const { classes } = useStyles()

    return (      
        <div className={ classes.root }>
            <motion.div className={ classes.imageRoot } style={{ backgroundImage: `url(${backgroundHomeOne.src})` }}
                        variants={ getVariants(true) }
                        initial="initial"
                        animate="animate"
            ></motion.div>
            <motion.div className={ classes.imageRoot } style={{ backgroundImage: `url(${backgroundHomeTwo.src})` }}
                        variants={ getVariants(false) }
                        initial="initial"
                        animate="animate"
            ></motion.div>
        </div>
    )
}