'use client'
/* Library Imports */
import { Variants } from 'framer-motion'
import { motion } from 'framer-motion'
import { makeStyles } from 'tss-react/mui'
/* Components Imports */
import Link from 'next/link'



function getTextVariants(location: string) {
    switch(location) {
        default:
            break
        case "header":
            return {
                rest: {
                    color: "rgba(41, 41, 41, 1)",
                    transition: { duration: 0.1 }
                },
                hover: {
                    color: "rgba(200, 4, 4, 1)",
                    transition: { duration: 0.1 }
                }
            }
        
        case "footer":
            return {
                rest: {
                    color: "rgba(255, 255, 255, 1)",
                    transition: { duration: 0.1 }
                },
                hover: {
                    color: "rgba(252, 105, 105, 1)",
                    transition: { duration: 0.1 }
                }
            }
    }
}

const underlineVariants: Variants = {
	rest: {
		opacity: 0,
		width: "0px",
		transition: { duration: 0.15 }
	},
	hover: {
		opacity: 1,
		width: "100%",
		transition: { duration: 0.15 }
	}
}



const useStyles = makeStyles()((theme) => {
    return {
        root: {
            display: "block",
            position: "relative",

            width: "auto",

            padding: 0,

            [theme.breakpoints.down('sm')]: {
                margin: theme.spacing(.7),
                marginLeft: theme.spacing(2),
                marginRight: theme.spacing(2),
            },
            [theme.breakpoints.up('sm')]: {
                margin: 0,
                marginLeft: theme.spacing(2),
                marginRight: theme.spacing(2),
            },
        },
        linkRoot: {
            position: "relative",
            
        },
        text: {
            fontSize: theme.typography.pxToRem(15),
            fontWeight: 500,
        },
        activeText: {
            color: "#C80404",
            fontSize: theme.typography.pxToRem(16),
            fontWeight: 600,

            paddingBottom: "1px",

            cursor: "default",
        },
        underlineHamburger: {
            display: "block",

            position: "absolute",
			left: 0,
			bottom: "1px",

			height: "1px",
			width: "100%",
			backgroundColor: "#C80404",
		},
        underlineFooter: {
            display: "block",

            position: "absolute",
			left: 0,
			bottom: "1px",

			height: "1px",
			width: "100%",
            backgroundColor: "#fc6969",
        },


        rootHeader: {
            display: "block",
            position: "relative",

            boxSizing: "border-box",

            width: "auto",
            height: "100%",

            padding: 0,
            margin: 0,
        },
        rootHeaderActive: {
            display: "block",
            position: "relative",

            boxSizing: "border-box",

            width: "auto",
            height: "100%",

            padding: 0,
            paddingTop: "40px",
            paddingLeft: theme.spacing(2),
            paddingRight: theme.spacing(2),
            
            margin: 0,
        },
        subRootHeader: {
            display: "block",

            boxSizing: "border-box",

            height: "100%",
            width: "100%",

            padding: 0,
            paddingTop: "40px",
            paddingLeft: theme.spacing(2),
            paddingRight: theme.spacing(2),
        },
        textHeader: {
            fontSize: theme.typography.pxToRem(17),
            fontWeight: 500,
        },
        activeTextHeader: {
            color: "#C80404",
            fontSize: theme.typography.pxToRem(17),
            fontWeight: 600,

            paddingBottom: "1px",

            cursor: "default",
        },
        underlineHeader: {
            display: "block",

            position: "absolute",
			left: 0,
			bottom: 0,

			height: "2px",
			width: "100%",
			backgroundColor: "#C80404",
		},
    }
})

interface HeaderProps {
    isActive: boolean;
    link: string;
    linkText: string;
}

interface FooterProps {
    link: string;
    linkText: string;
}



function NavLinkHambMenu({ isActive, link, linkText }: HeaderProps) {
    const { classes } = useStyles()

    return (  
        <>
            { !isActive  ?
                <Link href={ link } className={ classes.root }>
                    <motion.span initial="rest" animate="rest" whileHover="hover">
                        <motion.span className={ classes.text } variants={ getTextVariants("header") }>{ linkText }</motion.span>
                        <motion.span className={ classes.underlineHamburger } variants={ underlineVariants }></motion.span>
                    </motion.span>   
                </Link>
                
            :
                <p className={ classes.root } aria-current="page">
                    <motion.span className={ classes.activeText }>{ linkText }</motion.span>
                </p>
            }
        </>
    )
}

function NavLinkHeader({ isActive, link, linkText }: HeaderProps) {
    const { classes } = useStyles()

    return (  
        <>
            { !isActive  ?
                <Link href={ link } className={ classes.rootHeader }>
                    <motion.span className={ classes.subRootHeader } initial="rest" animate="rest" whileHover="hover">
                        <motion.span className={ classes.textHeader } variants={ getTextVariants("header") }>{ linkText }</motion.span>
                        <motion.span className={ classes.underlineHeader } variants={ underlineVariants }></motion.span>
                    </motion.span>   
                </Link>
                
            :
                <p className={ classes.rootHeaderActive } aria-current="page">
                    <motion.span className={ classes.activeTextHeader }>{ linkText }</motion.span>
                    <motion.span className={ classes.underlineHeader } variants={ underlineVariants }></motion.span>
                </p>
            }
        </>
    )
}

function NavLinkFooter({ link, linkText }: HeaderProps) {
    const { classes } = useStyles()

    return (  
        <div className={ classes.root }>
            <Link href={ link } className={ classes.linkRoot }>
                <motion.span initial="rest" animate="rest" whileHover="hover">
                    <motion.span className={ classes.text } variants={ getTextVariants("footer") }>{ linkText }</motion.span>
                    <motion.span className={ classes.underlineFooter } variants={ underlineVariants }></motion.span>
                </motion.span>   
            </Link>
        </div>
    )
}



export { NavLinkHambMenu, NavLinkHeader, NavLinkFooter }