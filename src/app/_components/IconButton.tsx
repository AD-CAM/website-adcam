'use client'

import Link from 'next/link'
import { Variants } from 'framer-motion'
import { motion } from 'framer-motion'
import { makeStyles } from 'tss-react/mui'



const useStyles = makeStyles()((theme) => {
    return {
        root: {
        }
    }
})

interface ButtonProps {
    icon: string;
    text: string;
    link: string;
}



export default function Header({ icon, text, link }: ButtonProps) {
    const { classes } = useStyles()

    return (      
        <Link href={ link } className={ classes.root }>
        </Link>
    )
}
