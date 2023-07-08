'use client'

import Link from 'next/link'
import { Variants } from 'framer-motion'
import { motion } from 'framer-motion'
import { makeStyles } from 'tss-react/mui'



const textVariants: Variants = {
	rest: {
		color: "rgba(0, 0, 0, 1)",
		transition: { duration: 0.1 }
	},
	hover: {
		color: "rgba(200, 4, 4, 1)",
		transition: { duration: 0.1 }
	}
}

const underlineVariants: Variants = {
	rest: {
		opacity: 0,
		width: "0px",
		transition: { duration: 0.1 }
	},
	hover: {
		opacity: 1,
		width: "100%",
		transition: { duration: 0.1 }
	}
}



const useStyles = makeStyles()((theme) => {
    return {
        root: {
            display: "block",
            position: "relative",

            marginLeft: theme.spacing(2),
            marginRight: theme.spacing(2),
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
        },
        underline: {
            display: "block",

            position: "absolute",
			left: 0,
			bottom: "1px",

			height: "1px",
			width: "100%",
			backgroundColor: "#C80404",
		}
    }
})

interface HeaderProps {
    isActive: boolean;
    link: string;
    linkText: string;
}



export default function Header({ isActive, link, linkText }: HeaderProps) {
    const { classes } = useStyles()

    return (      
        <Link href={ link } className={ classes.root }>
            { !isActive  ?
                            <motion.span initial="rest" animate="rest" whileHover="hover">
                                <motion.span className={ classes.text } variants={ textVariants }>{ linkText }</motion.span>
                                <motion.span className={ classes.underline } variants={ underlineVariants }></motion.span>
                            </motion.span>
                        :
                            <motion.span className={ classes.activeText }>{ linkText }</motion.span>
            }   
        </Link>
    )
}
