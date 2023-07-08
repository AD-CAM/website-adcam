'use client'
/* Library Imports */
import { Variants } from 'framer-motion'
import { motion } from 'framer-motion'
import { makeStyles } from 'tss-react/mui'
/* Icons Imports */
import { FaPhone } from 'react-icons/fa'
/* Components Imports */
import Link from 'next/link'



const useStyles = makeStyles()((theme) => {
    return {
        root: {
        }
    }
})



interface IconProps {
    icon: string;
}

interface ButtonProps {
    icon: string;
    text: string;
    link: string;
}

const Icon = ({ icon }) => {
    switch(icon) {
        case ''
    }
}



export default function Header({ icon, text, link }: ButtonProps) {
    const { classes } = useStyles()

    return (      
        <Link href={ link } className={ classes.root }>
            <motion.span>
                
            </motion.span>
            <motion.span>
                { text }
            </motion.span>
        </Link>
    )
}
