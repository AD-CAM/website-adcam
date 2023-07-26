'use client'
/* Library Imports */
import { Variants } from 'framer-motion'
import { motion } from 'framer-motion'
import { makeStyles } from 'tss-react/mui'
/* Icons Imports */
import { FaBars } from 'react-icons/fa'
/* Components Imports */
import { NavLinkHeader } from './NavLink'



const iconVariants: Variants = {
    rest: {
        opacity: 0,
        width: "0px",
        marginRight: "0px",
        transform: 'translateX(100%)',
    },
    hover: {
        opacity: 1,
        width: "auto",
        marginRight: "5px",
        transform: 'translateX(0%)',
    },
}

const textVariants: Variants = {
    rest: {
        color: "rgba(41, 41, 41, 1)",
    },
    hover: {
        color: "rgba(200, 4, 4, 1)",
    },
}

const buttonVariants: Variants = {
    rest: {
        borderColor: "rgba(200, 4, 4, 0)",
    },
    hover: {
        borderColor: "rgba(200, 4, 4, 1)",
    },
}



const useStyles = makeStyles()((theme) => {
    return {
        hamburgerButtonRoot: {
            display: "flex",
            justifyContent: "space-between",

            height: "auto",
            width: "auto",
            padding: theme.spacing(1.2),

            borderRadius: theme.spacing(1),
            border: "2px solid",
            outline: "none",

            backgroundColor: "rgba(255, 255, 255, 1)",
            boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",

            fontWeight: 500,

            cursor: "pointer",
        },
        hamburgerButtonIcon: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        },
    }
})

function HamburgerNav() {
    const { classes } = useStyles()

    return (  
        <motion.button className={ classes.hamburgerButtonRoot }

                variants={ buttonVariants }
                initial="rest"
                animate="rest"
                whileHover="hover"
                
                aria-label="Ouvrir le menu de navigation"
                role="button">

                <motion.span className={ classes.hamburgerButtonIcon } variants={ iconVariants }>
                    <FaBars />
                </motion.span>
        </motion.button>
    )
}



export { HamburgerNav }