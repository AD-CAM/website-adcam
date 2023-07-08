'use client'
/* Library Imports */
import { Variants } from 'framer-motion'
import { motion } from 'framer-motion'
import { makeStyles } from 'tss-react/mui'
/* Icons Imports */
import { FaArrowRight } from 'react-icons/fa'
/* Components Imports */
import Link from 'next/link'



const iconVariants: Variants = {
    rest: {
        opacity: 0,
        width: "0px",
        marginLeft: "0px",
        transform: 'translateX(-100%)',
    },
    hover: {
        opacity: 1,
        width: "auto",
        marginLeft: "5px",
        transform: 'translateX(0%)',
    },
}

const textVariants: Variants = {
    rest: {
        color: "rgba(0, 0, 0, 1)",
    },
    hover: {
        color: "rgba(200, 4, 4, 1)",
    },
}

const linkVariants: Variants = {
    rest: {
        borderColor: "rgba(200, 4, 4, 0)",
    },
    hover: {
        borderColor: "rgba(200, 4, 4, 1)",
    },
}



const useStyles = makeStyles()((theme) => {
    return {
        root: {
            display: "flex",
            justifyContent: "space-between",

            height: "100%",
            width: "auto",
            padding: theme.spacing(1.2),

            borderRadius: theme.spacing(2),
            border: "2px solid",

            backgroundColor: "rgba(255, 255, 255, 1)",
            boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",

            fontWeight: 500,
        },
        icon: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        },
        text: {
            alignSelf: "center",
        }
    }
})

interface ButtonProps {
    text: string;
    link: string;
    description: string;
}



export default function GoToButton({ text, link, description }: ButtonProps) {
    const { classes } = useStyles()

    return (      
        <Link href={ link }>
            <motion.span
                className={ classes.root }

                variants={ linkVariants }
                initial="rest"
                animate="rest"
                whileHover="hover"

                aria-label={ description }
                role="button"
            >

                <motion.span className={ classes.text } variants={ textVariants }>
                    { text }
                </motion.span>
                <motion.span className={ classes.icon } variants={ iconVariants }>
                    <FaArrowRight />
                </motion.span>

            </motion.span>
        </Link>
    )
}
