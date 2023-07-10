'use client'
/* Library Imports */
import { Variants } from 'framer-motion'
import { motion } from 'framer-motion'
import { makeStyles } from 'tss-react/mui'
/* Icons Imports */
import { FaFacebookSquare } from 'react-icons/fa'
/* Components Imports */
import Link from 'next/link'



const buttonVariants: Variants = {
    rest: {
        color: "rgba(255, 255, 255, 1)",
        backgroundColor: "rgba(255, 255, 255, 0)",
        transition: { duration: 0.1 }
    },
    hover: {
        color: "rgba(200, 4, 4, 1)",
        backgroundColor: "rgba(255, 255, 255, 1)",
        transition: { duration: 0.1 }
    },
}



const useStyles = makeStyles()((theme) => {
    return {
        root: {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",

            fontSize: theme.typography.pxToRem(36),

            borderRadius: theme.spacing(.75),
            boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
        }
    }
})



interface IconProps {
    icon: string;
}

interface ButtonProps {
    icon: string;
    link: string;
    description: string;
}

const Icon = ({ icon }: IconProps) => {
    switch(icon) {
        default :
            break
        case 'facebook' :
            return <FaFacebookSquare />
    }
}



export default function SocialButton({ icon, link, description }: ButtonProps) {
    const { classes } = useStyles()

    return (      
        <motion.a   className={ classes.root }
                    href={ `https://www.facebook.com/AD-CAM-103597488861540` }
                    
                    role="button"
                    aria-label={ description }

                    variants={ buttonVariants }
                    initial="rest"
                    whileHover="hover"
        >
            <Icon icon={ icon }/>
        </motion.a>
    )
}
