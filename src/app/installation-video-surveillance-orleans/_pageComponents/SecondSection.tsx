'use client'
/* Assets Imports */
import wizSenseBanner from "../../../../public/dahua/banner-wiz_sense.webp"
import wizOne from "../../../../public/dahua/wizOne.png"
/* Library Imports */
import { makeStyles } from 'tss-react/mui'
import YouTube from "react-youtube"
/* Components Imports */
import { TechSheetBanner, TechSheetText } from '@/app/_components/TechSheet'
import { IconButton } from "@/app/_components/Button"



const useStyles = makeStyles()((theme) => {
    return {
        root: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",

            boxSizing: "border-box",

            width: "100%",
        },
        subRoot: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",

            boxSizing: "border-box",

            

            [theme.breakpoints.down('lg')]: {
                width: "1100px",
                maxWidth: "90%",
            },
            [theme.breakpoints.up('lg')]: {
                width: "100%",
                maxWidth: "1100px",
            },
        },



        contactUsRoot: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",

            boxSizing: "border-box",

            width: "100%",
            height: "auto",
            marginTop: "20px",
            marginBottom: "-40px",

            overflow: "hidden",

            backgroundColor: "rgba(20, 20, 20, 1)",
        },
        contactUsSubRoot: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",

            boxSizing: "border-box",
            
            width: "100%",
            height: "100%",
            maxWidth: "1100px",

            paddingBottom: theme.spacing(6),
        },
        contactUsText: {
            position: "relative",

            boxSizing: "border-box",

            padding: theme.spacing(6),
            paddingLeft: "0",
            margin: 0,

            [theme.breakpoints.down('sm')]: {
                padding: theme.spacing(4),
                paddingTop: theme.spacing(6),
            },
        },
        contactUsTitle: {
            boxSizing: "border-box",

            padding: 0,
            margin: 0,

            fontSize: theme.typography.pxToRem(36),
            fontWeight: 400,

            color: "rgba(252, 105, 105, 1)",

            [theme.breakpoints.down('sm')]: {
                paddingBottom: theme.spacing(4),
                fontSize: theme.typography.pxToRem(26),
            },
        },
        contactUsSubTitle: {
            fontWeight: 500,

            color: "#F5F5F5",

            [theme.breakpoints.down('sm')]: {
                fontSize: theme.typography.pxToRem(16),
            },
        }
    }
})



export default function SecondSection() {
    const { classes } = useStyles()



    return (      
        <section className={ classes.root }>
            <TechSheetBanner
                                image={ wizSenseBanner }
                                alt={ "Technologie de reconnaissance WizSense" }
                                isTop={ false }
                                tag={ "" }
                                boldTitle={ "Une surveillance" }
                                regularTitle={ " intelligente" }
                                text={ [
                                    {
                                        type: "regular",
                                        text: "Assurez vous de ne vous concentrer que sur les réelles menaces grâce à un système assisté par intelligence artificielle."
                                    }
                                ] }
                                transparent={ false }
            />
            
            <div className={ classes.subRoot }>
                <TechSheetText 
                            image={ wizOne }
                            alt={ "Caméra de Surveillance intelligente WizSense" }
                            isLeft={ false }
                            boldTitle={ "Améliorez" }
                            regularTitle={ " votre surveillance par l'intelligence artificielle" }
                            text={ [
                                {
                                    type: "bold",
                                    text: "Faites confiance à AD CAM pour installer des systèmes de surveillance puissants."
                                },
                                {
                                    type: "regular",
                                    text: "Avec notre entreprise, vous pouvez profiter d’une caméra de surveillance performante. Un emplacement discret et une gamme d’appareils parfaitement adaptés font la notoriété de notre service."
                                },
                            ] }
                />
            </div>

            <div className={ classes.contactUsRoot }>
                <div className={ classes.contactUsSubRoot }>
                    <div className={ classes.contactUsText }>
                        <h3 className={ classes.contactUsTitle }>
                            { `Les systèmes de télésurveillance proposés par AD CAM vous intéressent ?` }
                        </h3>
                        <p className={ classes.contactUsSubTitle }>
                            { `Dans le but d’optimiser votre protection, nos techniciens qualifiés détectent l’emplacement stratégique pour l’installation de l’équipement, pour assurer la qualité des images d’informations et la discrétion de l’appareil, assurent la liaison de la caméra au routeur avant de bien la fixer et protègent le dispositif et ses accessoires contre les intempéries. AD CAM est à votre disposition pour vous conseiller et vous transmettre une estimation des coûts gratuite ! Nous intervenons dans un rayon de 50 kilomètres autour d'Orléans.` }
                        </p>
                    </div>

                    <IconButton icon={ "invoice" } text={ `Devis 100% gratuit` } link={ "/contact" } description={ `Contactez-nous pour obtenir un devis 100% gratuit` } isOutside={ false }/>
                </div>
            </div>
        </section>
    )
}
