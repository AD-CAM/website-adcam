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
import { NavLinkHambMenu } from './NavLink'
import { IconButton } from "./Button"



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

const navMenuVariants: Variants = {
    open: {
        transform: "translateX(0)",
    },
    closed: {
        transform: "translateX(100%)",
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

            borderRadius: theme.spacing(0.75),
            border: "2px solid",
            outline: "none",

            backgroundColor: "rgba(245, 245, 245, 1)",
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
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",

            position: "absolute",
            zIndex: 9999,
            top: theme.spacing(14),
            right: "0",

            padding: theme.spacing(2),
            paddingLeft: "0",

            borderBottomLeftRadius: theme.spacing(1),
            borderTopLeftRadius: theme.spacing(1),
            boxShadow: "-15px 15px 10px -10px rgba(0, 0, 0, 0.1)",
            backgroundColor: "#FFF",
        },
        navButtonContainer: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",

            width: "100%",
            marginTop: theme.spacing(2),
            marginBottom: theme.spacing(1),
            marginLeft: theme.spacing(2),
        }
    }
})

interface HamburgerNavProps {
    activePage: string,
    hasButton: boolean
}



function HamburgerNav({ activePage, hasButton }: HamburgerNavProps) {
    const { classes } = useStyles()

    const [isOpen, setIsOpen] = useState(false)



    return (  
        <>
            <motion.button className={ classes.hamburgerButtonRoot }
                    variants={ buttonVariants }
                    initial="rest"
                    animate={ isOpen ? "hover" : "rest" }
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

            <motion.nav className={ classes.navMenuWindow }
                    variants={ navMenuVariants }
                    initial="closed"
                    animate={ isOpen ? "open" : "closed" }
            >
                {
                    pageList.map(({ name, link, text }) => (
                    <NavLinkHambMenu    key={ name }
                                        isActive={ activePage === name }
                                        link={ link }
                                        linkText={ text } />
                    ))
                }

                { 
                    hasButton &&  
                                <div className={ classes.navButtonContainer }>
                                    <IconButton icon={ 'invoice' } text={ 'Devis gratuit' } link={ '/contact' } description={ 'Obtenez rapidement un devis 100% gratuit.' } isOutside={ false }/>
                                </div>
                }
            </motion.nav>
        </>
    )
}



export { HamburgerNav }