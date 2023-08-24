'use client'
/* Library Imports */
import { makeStyles } from 'tss-react/mui'
/* Components Imports */
import { SectionTitle } from '../../_components/SectionTitle'



const useStyles = makeStyles()((theme) => {
    return {
        root: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",

            width: "100%",

            boxShadow: "0px -50px 25px -50px rgba(0, 0, 0, 0.3)",

            [theme.breakpoints.down('sm')]: {
                paddingTop: theme.spacing(24),   
            },
            [theme.breakpoints.up('sm')]: {
                paddingTop: theme.spacing(10),   
            },
        },
        subRoot: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",

            boxSizing: "border-box",

            width: "100%",
            maxWidth: "1024px",

            [theme.breakpoints.up('sm')]: {
                paddingLeft: theme.spacing(6),
                paddingRight: theme.spacing(6),   
            },
        },
        mainArticle: {  
            color: "rgba(41, 41, 41, 1)",

            [theme.breakpoints.down('sm')]: {
                width: "90%",
            },
            [theme.breakpoints.up('sm')]: {
                width: "100%",   
            },
        },
        textRoot: {
            marginTop: theme.spacing(10),
            marginBottom: theme.spacing(6),
        },
        textTitle: {
            marginTop: theme.spacing(6),

            fontSize: theme.typography.pxToRem(19),
            fontWeight: 600,
        },
        textSubTitle: {
            marginTop: theme.spacing(6),

            fontSize: theme.typography.pxToRem(17),
            fontWeight: 600,
        },
        textParagraph: {
            padding: 0,
            margin: 0,
            marginBottom: theme.spacing(2),
            
            fontSize: theme.typography.pxToRem(15),
        },
        textListing: {
            padding: 0,
            margin: 0,
            
            fontSize: theme.typography.pxToRem(15),
        },
        textLink: {
            textDecoration: "underline",

            '&:link': {
                color: "#C80404",
            },
            '&:hover': {
                color: "#FC6969",
            },
            '&:active': {
                color: "#FC6969",
            },
        }
    }
})



export default function LegalNotices() {
    const { classes } = useStyles()

    return (      
        <section className={ classes.root }>
            <div className={ classes.subRoot }>

                <article className={ classes.mainArticle }>
                    <SectionTitle text={ "Mentions légales" } />
                    

                    <div className={ classes.textRoot }>
                        <h3 className={ classes.textTitle }>{ `1. Présentation du site.` }</h3>
                        <p className={ classes.textParagraph }>{ `En vertu de l’article 6 de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l’économie numérique, il est précisé aux utilisateurs du site ` }<a href={ `https://ad-cam.fr/` } className={ classes.textLink }>{ `https://ad-cam.fr/` }</a>{ ` l’identité des différents intervenants dans le cadre de sa réalisation et de son suivi :` }</p>




                    </div>
                </article>

            </div>
        </section>
    )
}
