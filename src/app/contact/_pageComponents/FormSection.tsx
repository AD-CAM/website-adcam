'use client'
/* Library Imports */
import { makeStyles } from 'tss-react/mui'
import { motion, Variants } from 'framer-motion'
/* Components Imports */
import { SectionTitle } from '../../_components/SectionTitle'
import { InvoiceForm } from '../../_components/ContactForm'
/* Icons Imports */
import { BsMailbox2 } from "react-icons/bs"



const useStyles = makeStyles()((theme) => {
    return {
        root: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",

            boxSizing: "border-box",

            width: "100%",

            paddingTop: theme.spacing(10),

            boxShadow: "0px -50px 25px -50px rgba(0, 0, 0, 0.3)",
        },
        subRoot: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",

            boxSizing: "border-box",

            maxWidth: "1450px",

            [theme.breakpoints.up('sm')]: {
                paddingLeft: theme.spacing(6),
                paddingRight: theme.spacing(6),   
            },
        },
        mainContainer: {
            width: "100%",

            [theme.breakpoints.down('sm')]: {
                maxWidth: "90%",
                marginBottom: theme.spacing(2),
            },
            [theme.breakpoints.up('sm')]: {
                maxWidth: "864px",   
            },
        },
        formContainer: {
            [theme.breakpoints.down('md')]: {
                width: "100%",
            },
            [theme.breakpoints.up('md')]: {
                width: "350px",  
            },
        },
        articleRoot: {
            display: "flex",
            
            width: "100%",

            [theme.breakpoints.down('md')]: {
                flexDirection: "column-reverse",
                alignItems: "center",
                justifyContent: "center",
            },
            [theme.breakpoints.up('md')]: {
                flexDirection: "row",
                alignItems: "flex-start",
                justifyContent: "space-between",
            },
        },
        invoiceFormArticle: {
            [theme.breakpoints.down('md')]: {
                width: "100%",

                marginBottom: theme.spacing(2),
            },
            [theme.breakpoints.up('md')]: {
                width: "48%",

                marginBottom: 0,
            },
        },
        mailboxRoot: {
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",

            height: "100px",
            width: "auto",

            color: "rgba(200, 4, 4, 1)",
            fontSize: theme.typography.pxToRem(72),

            [theme.breakpoints.down('md')]: {
                alignItems: "center",
                justifyContent: "center",
            },
            [theme.breakpoints.up('md')]: {
                alignItems: "center",
                justifyContent: "flex-start",
            },
        },
        articleTitle: {
            marginTop: 0,

            width: "100%",

            fontSize: theme.typography.pxToRem(20),
            fontWeight: 600,
        },
        articleText: {
            width: "100%",

            fontSize: theme.typography.pxToRem(15),
            fontWeight: 500,
        },
    }
})



export default function FormSection() {
    const { classes } = useStyles()

    return (      
        <section className={ classes.root }>
            <div className={ classes.subRoot }>
                <div className={ classes.mainContainer }>
                    <SectionTitle text={ "Demande de devis" } />

                    <div className={ classes.articleRoot }>
                        <div className={ classes.formContainer }>
                            <InvoiceForm />
                        </div>

                        <article className={ classes.invoiceFormArticle }>
                            <div className={ classes.mailboxRoot }>
                                <BsMailbox2 />
                            </div>
                            <h3 className={ classes.articleTitle }>{ `Nos experts vous recontactent` }</h3>
                            <p className={ classes.articleText }>{ `Nous vous recontactons dans les plus brefs délais afin d'établir avec vous un devis entièrement adapté à vos besoins et à votre budget` }</p>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    )
}
