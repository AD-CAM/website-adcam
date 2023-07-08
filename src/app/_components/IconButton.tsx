'use client'
/* Library Imports */
import { Variants } from 'framer-motion'
import { motion } from 'framer-motion'
import { makeStyles } from 'tss-react/mui'
/* Icons Imports */
import { FaPhone } from 'react-icons/fa'
import { FaFileInvoice } from 'react-icons/fa'
/* Components Imports */
import Link from 'next/link'



const useStyles = makeStyles()((theme) => {
    return {
        root: {
            display: "flex",
            height: theme.spacing(3),

            backgroundColor: "blue",
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

const Icon = ({ icon }: IconProps) => {
    switch(icon) {
        default :
            break
        case 'phone' :
            return <FaPhone />
        case 'invoice' :
            return <FaFileInvoice />
    }
}



export default function IconButton({ icon, text, link }: ButtonProps) {
    const { classes } = useStyles()

    return (      
        <Link href={ link } className={ classes.root }>
            <motion.span>
                <Icon icon={ icon }/>
            </motion.span>
            <motion.span>
                { text }
            </motion.span>
        </Link>
    )
}
