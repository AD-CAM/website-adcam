/* eslint-disable @next/next/no-img-element */
'use client'
/* Types & Utils Imports */
import { StaticImageData } from 'next/image';
/* Library Imports */
import { makeStyles } from 'tss-react/mui'
/* Components Imports */
import Image from 'next/image'



const useStyles = makeStyles()((theme) => {
    return {
        root: {
            display: "flex",
            alignItems: "center",

            width: "100%",

            marginTop: theme.spacing(5),
            marginBottom: theme.spacing(5),
        },
        dividerLine: {
            flexGrow: 1,

            height: "1px",
            width: "auto",

            backgroundColor: "#C80404"
        },
        titleText: {
            marginLeft: theme.spacing(2),
            marginRight: theme.spacing(2),

            color: "rgba(41, 41, 41, 1)",

            fontSize: theme.typography.pxToRem(26),
            fontWeight: 600,

            [theme.breakpoints.down('sm')]: {
                textAlign: "center",
                fontSize: theme.typography.pxToRem(22),
            }
        },
        titleImage: {
            marginLeft: theme.spacing(2),
            marginRight: theme.spacing(2),

            [theme.breakpoints.down('sm')]: {
                maxWidth: "70vw",
            },
            [theme.breakpoints.up('sm')]: {
                maxWidth: "450px",
            }
        }
    }
})

interface SectionTitleProps {
    text: string;
}

interface ImageTitleProps {
    image: StaticImageData;
    alt: string;
    width: string;
}



function SectionTitle({ text }: SectionTitleProps) {
    const { classes } = useStyles()

    return (      
        <h2 className={ classes.root }>
            <span className={ classes.dividerLine }></span>
            
            <span className={ classes.titleText }>
                { text }
            </span>

            <span className={ classes.dividerLine }></span>
        </h2>
    )
}

function ImageTitle({ image, alt, width }: ImageTitleProps) {
    const { classes } = useStyles()

    return (      
        <h2 className={ classes.root }>
            <span className={ classes.dividerLine }></span>
            
                <img src={ image.src } alt={ alt } className={ classes.titleImage } style={{ width: width }} />

            <span className={ classes.dividerLine }></span>
        </h2>
    )
}



export { SectionTitle, ImageTitle }
