'use client'
/* Assets Imports */
import ajaxAlarmBanner from "../../../../public/ajax/banner-ajax_products.png"
/* Library Imports */
import { makeStyles } from 'tss-react/mui'
import YouTube from "react-youtube"
/* Components Imports */
import { TechSheetBanner } from '@/app/_components/TechSheet'



const useStyles = makeStyles()((theme) => {
    return {
        root: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",

            boxSizing: "border-box",

            width: "100%",

            boxShadow: "0px -50px 25px -50px rgba(0, 0, 0, 0.3)",



            [theme.breakpoints.down('sm')]: {
                paddingTop: theme.spacing(16),
            },
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
        youtubeContainer: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",

            marginTop: theme.spacing(6),

            width: "1100px",
            maxWidth: "90%",
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



export default function FirstSection() {
    const { classes } = useStyles()



    return (      
        <section className={ classes.root }>
            <TechSheetBanner
                                image={ ajaxAlarmBanner }
                                alt={ "Alarme AJAX" }
                                isTop={ true }
                                tag={ "" }
                                boldTitle={ "L'Art" }
                                regularTitle={ " de se défendre" }
                                text={ [
                                    {
                                        type: "regular",
                                        text: "Les systèmes de sécurité AJAX sont les meilleurs et les plus modernes des systèmes de sécurité sans fil disponibles sur le marché. Protégez votre maison, votre entreprise ou même votre usine avec les détecteurs d'AJAX Systems. Détectez les cambrioleurs, les incendies ou les dégâts des eaux en une fraction de seconde et évitez les dommages à vos biens de valeur."
                                    }
                                ] }
                                transparent={ true }
            />

            <div className={ classes.youtubeContainer }>
                <YouTube videoId={ `gdeDCNWoMGg` } className={ "youtubeContainer" } />
            </div>
        </section>
    )
}
