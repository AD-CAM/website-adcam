/* eslint-disable @next/next/no-img-element */
'use client'
/* Types & Utils imports */1
import { ReactNode } from "react"
import { StaticImageData } from "next/image"
/* Library Imports */
import { makeStyles } from 'tss-react/mui'
import { useMediaQuery, useTheme } from "@mui/material"



const useStyles = makeStyles()((theme) => {
    return {
        root: {
            width: "100%",
        },
        mainTitle: {
            width: "100%",
            textAlign: "center",

            color: "rgba(200, 4, 4, 1)",
            fontSize: theme.typography.pxToRem(22),
            fontWeight: 500,

            marginBottom: theme.spacing(4),
        },
        imageContainer: {
            [theme.breakpoints.down('sm')]: {
                marginTop: theme.spacing(4),
                width: "75%",
            },
            [theme.breakpoints.up('sm')]: {
                marginTop: theme.spacing(4),
                width: "50%",
            },
            [theme.breakpoints.up('md')]: {
                width: "30%",
            },
        },
        image: {
            width: "100%",
            height: "auto",
        },
        mainContainerLeft: {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",

            width: "100%",
            height: "auto",

            [theme.breakpoints.down('md')]: {
                flexDirection: "column-reverse",
            }
        },
        mainContainerRight: {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",

            width: "100%",
            height: "auto",

            [theme.breakpoints.down('md')]: {
                flexDirection: "column",
            }
        },
        textContainer: {
            boxSizing: "border-box",

            fontSize: theme.typography.pxToRem(15),

            [theme.breakpoints.down('md')]: {
                paddingLeft: 0,
                maxWidth: "100%",
            },
            [theme.breakpoints.up('md')]: {
                maxWidth: "70%",
            },
        },
    }
})

interface BannerProps {
    image: StaticImageData;
    alt: string;
    isLeft: boolean;
    children: ReactNode[] | ReactNode;
    title: string;
}



export default function ImagedArticle({ image, alt, isLeft, children, title }: BannerProps) {
    const { classes } = useStyles()

    const theme = useTheme()
    const isMediumScreen = useMediaQuery(theme.breakpoints.down('md'))

    function getStyle() {
        if(isMediumScreen) {
            return { padding: 0 }
        } else if(isLeft) {
            return { paddingLeft: "32px" }
        } else {
            return { paddingRight: "32px" }
        }
    }

    return (      
        <article className={ classes.root }>
            <h3 className={ classes.mainTitle }>{ title }</h3>
            <div className={ isLeft ? classes.mainContainerLeft : classes.mainContainerRight }>
                { isLeft && <aside className={ classes.imageContainer }><img className={ classes.image } src={ image.src } alt={ alt } /></aside> }

                <div className={ classes.textContainer } style={ getStyle() }>
                    { children }
                </div>

                { !isLeft && <aside className={ classes.imageContainer }><img className={ classes.image } src={ image.src } alt={ alt } /></aside>}
            </div>
        </article>
    )
}