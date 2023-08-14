'use client'
/* Library Imports */
import { makeStyles } from 'tss-react/mui'
/* Components Imports */
import SectionTitle from '../../_components/SectionTitle'



const useStyles = makeStyles()((theme) => {
    return {
        root: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",

            width: "100%",
            paddingTop: theme.spacing(10),

            boxShadow: "0px -50px 25px -50px rgba(0, 0, 0, 0.3)",
        },
        subRoot: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",

            width: "100%",
            maxWidth: "1024px",
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
        subTitleRoot: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        },
        subTitle: {
            fontWeight: 500,
            fontSize: theme.typography.pxToRem(24),
        },
        almaTitle: {
            maxHeight: "32px",

            fill: "rgba(250, 80, 34, 1)"
        },
        textRoot: {
            marginTop: theme.spacing(6),
            marginBottom: theme.spacing(6),
        },
        text: {

        },
        textItem: {
            marginBottom: theme.spacing(2),

            '&::marker': {
                fontWeight: "bold",
            }
        },
        almaLink: {
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
                        
                    </div>
                </article>

            </div>
        </section>
    )
}
