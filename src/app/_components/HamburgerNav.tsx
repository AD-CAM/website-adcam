'use client'
/* Utils & Data Imports */
import { PageInfo } from "../_types/dataFiles"
const pageList: PageInfo[] = require("../_data/pageList.json")
/* Library Imports */
import { useState } from 'react'
import { Variants, motion } from 'framer-motion'
import { makeStyles } from 'tss-react/mui'
/* Icons Imports */
import { FaBars } from 'react-icons/fa'
/* Components Imports */
import { NavLinkHeader } from './NavLink'



const iconVariants: Variants = {
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
        scale: 1,
    },
    hover: {
        borderColor: "rgba(200, 4, 4, 1)",
    },
    tap: {
        scale: 0.9,
    }
}



const useStyles = makeStyles()((theme) => {
    return {
        hamburgerButtonRoot: {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",

            height: "auto",
            width: "auto",
            padding: theme.spacing(1.2),
            marginRight: theme.spacing(1),

            borderRadius: theme.spacing(1),
            border: "2px solid",
            outline: "none",

            backgroundColor: "rgba(255, 255, 255, 1)",
            boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",

            fontSize: theme.typography.pxToRem(18),
            fontWeight: 500,

            cursor: "pointer",
        },
        hamburgerButtonIcon: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        },
        navMenuWindow: {
            position: "fixed",
            zIndex: 9999,
            top: "0",

            padding: theme.spacing(2),
            paddingLeft: "0",
            backgroundColor: "white",
        }
    }
})

interface HamburgerNavProps {
    activePage: string
}



function HamburgerNav({ activePage }: HamburgerNavProps) {
    const { classes } = useStyles()

    const [isOpen, setIsOpen] = useState(false)



    return (  
        <>
            <motion.button className={ classes.hamburgerButtonRoot }
                    variants={ buttonVariants }
                    initial="rest"
                    animate="rest"
                    whileHover="hover"
                    whileTap="tap"
                    
                    aria-label="Ouvrir le menu de navigation"
                    role="button"
                    
                    onClick={ () => setIsOpen(!isOpen) }
            >

                    <motion.span className={ classes.hamburgerButtonIcon } variants={ iconVariants }>
                        <FaBars />
                    </motion.span>
            </motion.button>

            <nav className={ classes.navMenuWindow }>
                {
                    pageList.map(({ name, link, text }) => (
                    <NavLinkHeader  key={ name }
                                    isActive={ activePage === name }
                                    link={ link }
                                    linkText={ text } />
                    ))
                }
            </nav>
        </>
    )
}



export { HamburgerNav }