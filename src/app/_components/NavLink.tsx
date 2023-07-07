'use client'

import Link from 'next/link'
import { Variants } from 'framer-motion'
import { motion } from 'framer-motion'
import { makeStyles } from 'tss-react/mui'



const textVariants: Variants = {
	rest: {
		color: "rgba(255, 255, 255, 1)",
		transition: { duration: 0.1 }
	},
	hover: {
		color: "rgba(245, 176, 65, 1)",
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
        },
        text: {

        },
        underline: {

        },
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
            <motion.span className={ classes.text } variants={ textVariants }>{ linkText }</motion.span>
			<motion.span className={ classes.underline } variants={ underlineVariants }></motion.span>
        </Link>
    )
}
