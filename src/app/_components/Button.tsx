'use client'
/* Library Imports */
import { Variants, motion, TapInfo } from 'framer-motion'
import { makeStyles } from 'tss-react/mui'
/* Type Imports */
import { MouseEventHandler } from 'react'
/* Icons Imports */
import { FaArrowRight, FaPhoneAlt, FaFileInvoice, FaFacebookSquare, FaStar } from 'react-icons/fa'
import { PiCertificateBold } from 'react-icons/pi'
/* Components Imports */
import Link from 'next/link'



const iconVariants: Variants = {
    rest: {
        opacity: 0,
        width: "0px",
        marginRight: "0px",
        transform: 'translateX(100%)',
    },
    hover: {
        opacity: 1,
        width: "auto",
        marginRight: "5px",
        transform: 'translateX(0%)',
    },
}

const arrowVariants: Variants = {
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
        color: "rgba(41, 41, 41, 1)",
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

const socialButtonVariants: Variants = {
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
            justifyContent: "space-between",

            height: "auto",
            width: "auto",
            padding: theme.spacing(1.2),

            borderRadius: theme.spacing(0.75),
            border: "2px solid",

            backgroundColor: "rgba(245, 245, 245, 1)",
            boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",

            fontWeight: 500,

            cursor: "pointer",
        },
        rootDisabled: {
            display: "flex",
            justifyContent: "space-between",

            height: "auto",
            width: "auto",
            padding: theme.spacing(1.2),

            borderRadius: theme.spacing(0.75),
            border: "2px solid",

            backgroundColor: "rgba(170, 170, 170, 1)",
            boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",

            fontWeight: 500,
        },
        socialRoot: {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",

            fontSize: theme.typography.pxToRem(36),

            borderRadius: theme.spacing(.75),
            boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
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



interface IconProps {
    icon: string;
}

interface ButtonProps {
    icon: string;
    text: string;
    link: string;
    description: string;
    isOutside: boolean;
}

interface IconlessButtonProps {
    text: string;
    link: string;
    description: string;
    isOutside: boolean;
}

interface TextlessButtonProps {
    icon: string;
    link: string;
    description: string;
}

interface FunctionButtonProps {
    text: string;
    description: string;
    handler: MouseEventHandler<HTMLButtonElement>;
}

interface SubmitButtonProps {
    text: string;
    description: string;
    enabled: boolean;
}

const Icon = ({ icon }: IconProps) => {
    switch(icon) {
        default :
            break
        case 'phone' :
            return <FaPhoneAlt />
        case 'invoice' :
            return <FaFileInvoice />
        case 'certificate' :
            return <PiCertificateBold />
        case 'facebook' :
            return <FaFacebookSquare />
        case 'star' :
            return <FaStar />
    }
}



function IconButton({ icon, text, link, description, isOutside }: ButtonProps) {
    const { classes } = useStyles()

    const linkProps = isOutside
        ? { target: '_blank', rel: 'noopener noreferrer' }
        : {}

    return (      
        <Link href={ link } {...linkProps}>
            <motion.span    
                className={ classes.root }

                variants={ linkVariants }
                initial="rest"
                animate="rest"
                whileHover="hover"
                
                aria-label={ description }
                role="button"
            >

                <motion.span className={ classes.icon } variants={ iconVariants }>
                    <Icon icon={ icon }/>
                </motion.span>
                <motion.span className={ classes.text } variants={ textVariants }>
                    { text }
                </motion.span>

            </motion.span>
        </Link>
    )
}

function GoToButton({ text, link, description, isOutside }: IconlessButtonProps) {
    const { classes } = useStyles()

    const linkProps = isOutside
        ? { target: '_blank', rel: 'noopener noreferrer' }
        : {}

    return (      
        <Link href={ link } {...linkProps}>
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
                <motion.span className={ classes.icon } variants={ arrowVariants }>
                    <FaArrowRight />
                </motion.span>

            </motion.span>
        </Link>
    )
}

function SocialButton({ icon, link, description }: TextlessButtonProps) {
    const { classes } = useStyles()

    return (      
        <motion.a   className={ classes.socialRoot }
                    href={ link }
                    
                    role="button"
                    aria-label={ description }

                    variants={ socialButtonVariants }
                    initial="rest"
                    whileHover="hover"

                    target="_blank"
                    rel="noopener noreferrer"
        >
            <Icon icon={ icon }/>
        </motion.a>
    )
}

function FunctionButton({ text, description, handler }: FunctionButtonProps) {
    const { classes } = useStyles()

    return (
        <motion.button className={ classes.root } onClick={ handler }

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

        </motion.button>
    )
}

function SubmitButton({ text, description, enabled }: SubmitButtonProps) {
    const { classes } = useStyles()

    return (
        <motion.button className={ enabled ? classes.root : classes.rootDisabled } type="submit"

                variants={ linkVariants }
                initial="rest"
                animate="rest"
                whileHover={ enabled ? "hover" : "rest" }

                aria-label={ description }
                aria-disabled={ !enabled }
                role="button"
        >

                <motion.span className={ classes.text } variants={ textVariants }>
                    { text }
                </motion.span>

        </motion.button>
    )
}



export { IconButton, GoToButton, SocialButton, FunctionButton, SubmitButton }