'use client'
/* Library Imports */
import { makeStyles } from 'tss-react/mui'
import { motion, Variants } from 'framer-motion'
/* Components Imports */
import { GoToButton } from '../_components/Button'



const numberVariants: Variants = {
    hidden: {
        opacity: 0,
        y: -150,
        rotate: 180,
    },
    visible: {
        opacity: 1,
        y: 0,
        rotate: 0,
        transition: {
            type: "spring",
            bounce: 0.5,
            duration: 1.2,
        }
    },
}

const notFoundText = "La page que vous cherchez est introuvable"

const sentenceVariant = {
    hidden: { opacity: 1 },
    visible: {
        opacity: 1,
        transition: {
            delay: 0.1,
            staggerChildren: 0.02,
        }
    }
}

const letterVariant = {
    hidden: {
        opacity: 0,
        y: 50,
    },
    visible: {
        opacity: 1,
        y: 0,
    }
}



const useStyles = makeStyles()((theme) => {
    return {
        root: {
            height: "100vh",
            width: "100vw",

			display: "flex",
            flexDirection: "column",

            alignItems: "center",
            justifyContent: "center",

            backgroundColor: "#F5F5F5",
		},
        number: {
            fontSize: "10vw",
            marginTop: 0,
            marginBottom: 0,

            color: "#C80404",
        },
        text: {
            fontSize: "1.75vw",

            color: "rgba(25, 25, 25, 1)",
        },
    }
})



export default function NotFoundBody() {
    const { classes } = useStyles()



    return (      
        <div className={ classes.root }>
            <motion.h1
                className={ classes.number }
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={ numberVariants }
            >
                404
            </motion.h1>

            <motion.h2
                className={ classes.text }
                variants={ sentenceVariant }
                initial="hidden"
                animate="visible"
            >
                {notFoundText.split("").map((char, index) => {
                    return (
                        <motion.span key={ char + "-" + index } variants={ letterVariant }>
                            {char}
                        </motion.span>
                    )
                })}                    
            </motion.h2>

            <GoToButton text={ "Accueil" } link={ "/" } description={ "Retournez à la page d'accueil" } isOutside={ false }/>
        </div>
    )
}