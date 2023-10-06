'use client'
/* Data & Types Imports */
const techSheetsList = require("../_pageData/buttonTechSheetsList.json")
/* Assets Imports */
import ajaxBanner from "../../../../public/ajax/banner-ajax_button.png"
/* Library Imports */
import { makeStyles } from 'tss-react/mui'
import YouTube from "react-youtube"
/* Components Imports */
import { TechSheetBanner, TechSheetList, TechSheetSubSectionBanner } from '@/app/_components/TechSheet'
import { TechSheetData } from '@/app/_types/dataFiles'
import { IconButton } from "@/app/_components/Button"



const useStyles = makeStyles()((theme) => {
    return {
        root: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",

            boxSizing: "border-box",

            width: "100%",

            boxShadow: "0px -50px 25px -50px rgba(0, 0, 0, 0.3)",
        },
        subRoot: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",

            width: "80%",
        },
        youtubeContainer: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",

            marginTop: theme.spacing(6),

            [theme.breakpoints.down('sm')]: {
                width: "90%",
            },
            [theme.breakpoints.up('sm')]: {
                width: "1100px",
                maxWidth: "90%",
            },
        },



        contactUsArea: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",

            marginTop: theme.spacing(6),

            [theme.breakpoints.down('sm')]: {
                maxWidth: "90%",
                marginBottom: theme.spacing(6),
            },
            [theme.breakpoints.up('sm')]: {
                maxWidth: "1050px",
                marginBottom: theme.spacing(4),
            },
        },
        contactUsTitle: {
            fontWeight: 500,
            fontSize: theme.typography.pxToRem(18),
        },
    }
})



export default function ButtonSection() {
    const { classes } = useStyles()



    return (      
        <section className={ classes.root }>
            <TechSheetBanner
                                image={ ajaxBanner }
                                alt={ "Buttons et Digicodes AJAX" }
                                isTop={ false }
                                tag={ "Ajax KeyPad, Button, Tag" }
                                boldTitle={ "" }
                                regularTitle={ "Dispositifs de commande" }
                                text={ [
                                    {
                                        type: "regular",
                                        text: "Les systèmes de sécurité Ajax peuvent être gérés via l'application ou à l'aide d'une télécommande pour alarme ou d'un clavier numérique. Nous les avons conçus afin de les rendre aussi pratiques que possible. La protection contre les pressions accidentelles, la confirmation de l'exécution des commandes et le design élégant transforment cette simple télécommande pour alarme en accessoire incontournable."
                                    },
                                    {
                                        type: "regular",
                                        text: "Tous les dispositifs de commande de la gamme Ajax sont protégés contre les tentatives d'accès non autorisées et l'interception des signaux, de plus l'application vous signale quand et par qui le système a été activé ou désactivé via notification. La gamme de produits comprend des dispositifs Ajax filaires et sans fil."
                                    }
                                ] }
            />

            <div className={ classes.subRoot }>
                {
                    techSheetsList.map((techSheetData: TechSheetData, index: number) => {
                        return <TechSheetList 
                                            key={ index }
                                            image={ techSheetData.image }
                                            alt={ techSheetData.alt }
                                            isLeft={ techSheetData.isLeft }
                                            boldTitle={ techSheetData.boldTitle }
                                            regularTitle={ techSheetData.regularTitle }
                                            subTitle={ techSheetData.subTitle }
                                            techSheet={ techSheetData.techSheet }
                                />
                    })
                }
            </div>

            <div className={ classes.contactUsArea }>
                    <h3 className={ classes.contactUsTitle }>
                        { `Nos solutions en matière de systèmes de sécurité AJAX vous intéressent ? AD CAM est à votre disposition pour vous conseiller et vous transmettre une estimation des coûts gratuite ! Nous intervenons dans un rayon de 50 kilomètres autour d'Orléans.` }
                    </h3>
                    <IconButton icon={ "invoice" } text={ `Devis 100% gratuit` } link={ "/contact" } description={ `Contactez-nous pour obtenir un devis 100% gratuit` }/>
                </div>
        </section>
    )
}
