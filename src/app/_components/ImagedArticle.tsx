/* eslint-disable @next/next/no-img-element */
'use client'
/* Types & Utils imports */1
import { ReactNode } from "react"
import { StaticImageData } from "next/image"
/* Library Imports */
import { makeStyles } from 'tss-react/mui'



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

            marginBottom: theme.spacing(2),
        },
        imageContainer: {
            width: "30%"
        },
        image: {
            width: "100%",
            height: "auto",
        },
        mainContainer: {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",

            width: "100%",
            height: "auto",
        },
        textContainer: {
            boxSizing: "border-box",
            maxWidth: "70%",

            fontSize: theme.typography.pxToRem(15)
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

    return (      
        <article className={ classes.root }>
            <h3 className={ classes.mainTitle }>{ title }</h3>
            <div className={ classes.mainContainer }>
                { isLeft && <aside className={ classes.imageContainer }><img className={ classes.image } src={ image.src } alt={ alt } /></aside> }

                <div className={ classes.textContainer } style={ isLeft ? { paddingLeft: "32px" } : { paddingRight: "32px" }}>
                    { children }
                </div>

                { !isLeft && <aside className={ classes.imageContainer }><img className={ classes.image } src={ image.src } alt={ alt } /></aside>}
            </div>
        </article>
    )
}