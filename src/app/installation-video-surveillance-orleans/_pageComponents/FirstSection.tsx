'use client'
/* Assets Imports */
import dahuaCameraBanner from "../../../../public/dahua/banner-dahua_products.jpg"
import dahuaOne from "../../../../public/dahua/dahuaOne.png"
import dahuaTwo from "../../../../public/dahua/dahuaTwo.png"
import dahuaThree from "../../../../public/dahua/dahuaThree.png"
/* Library Imports */
import { makeStyles } from 'tss-react/mui'
import YouTube from "react-youtube"
/* Components Imports */
import { TechSheetBanner, TechSheetText } from '@/app/_components/TechSheet'



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
        }
    }
})



export default function FirstSection() {
    const { classes } = useStyles()



    return (      
        <section className={ classes.root }>
            <TechSheetBanner
                                image={ dahuaCameraBanner }
                                alt={ "Logo de Dahua Technology" }
                                isTop={ true }
                                tag={ "" }
                                boldTitle={ "Un œil" }
                                regularTitle={ " partout, tout le temps" }
                                text={ [
                                    {
                                        type: "regular",
                                        text: "Les systèmes de surveillance Dahua Technology sont à la pointe de la technologie et vous offrent une surveillance continue des zones les plus importantes."
                                    }
                                ] }
                                transparent={ false }
            />

            <div className={ classes.youtubeContainer }>
                <YouTube videoId={ `eXVS3EYULtI` } className={ "youtubeContainer" } />
            </div>
            
            <div className={ classes.subRoot }>
                <TechSheetText 
                            image={ dahuaOne }
                            alt={ "Caméra de Surveillance Dahua Technology" }
                            isLeft={ false }
                            boldTitle={ "Sécurisez" }
                            regularTitle={ " votre résidence ou votre entreprise" }
                            text={ [
                                {
                                    type: "bold",
                                    text: "Faites appel à AD CAM pour installer des systèmes de surveillance à la pointe de la technologie."
                                },
                                {
                                    type: "regular",
                                    text: "Les avantages de la vidéo surveillance sont multiples. Ce système de protection peut être installé (presque) partout pour en assurer la surveillance."
                                },
                            ] }
                />
                <TechSheetText 
                            image={ dahuaTwo }
                            alt={ "Caméra de surveillance à énergie solaire" }
                            isLeft={ true }
                            boldTitle={ "Gardez un œil" }
                            regularTitle={ " sur toutes vos zones à risque" }
                            text={ [
                                {
                                    type: "regular",
                                    text: "Les œuvres des malfaiteurs et les différents accidents perturbent notre paix au quotidien. C’est pourquoi il est nécessaire d’installer un système de vidéo surveillance. AD CAM est spécialisé dans les systèmes de sécurité à Orléans, il vous fait profiter des avantages de la technologie sur la sécurité. Soyez au courant de tout événement, avec une simplicité d’accès."
                                }
                            ] }
                />
                <TechSheetText 
                            image={ dahuaThree }
                            alt={ "Caméra de Surveillance Dahua Technology" }
                            isLeft={ false }
                            boldTitle={ "Assurez la sécurité" }
                            regularTitle={ " de vos employés et clients" }
                            text={ [
                                {
                                    type: "regular",
                                    text: "Vous êtes propriétaire d’une boutique ? Vous souhaitez que vos clients se sentent en sécurité, en faisant leurs achats chez vous ? Vous souhaitez faire avancer les enquêtes en cas de vol le plus rapidement possible ? Vous aimeriez savoir en détail le déroulement des activités dans votre entreprise ? Ou vous voulez simplement assurer la garde de votre domicile ?"
                                },
                                {
                                    type: "regular",
                                    text: "Dans tous les cas, nous avons la solution qu’il vous faut. Optez pour la mise en place d’une vidéo surveillance dans votre propriété. Nos compétences en pose et la diversité de modèles que nous vous proposons sauront vous protéger."
                                }
                            ] }
                />
            </div>
        </section>
    )
}
