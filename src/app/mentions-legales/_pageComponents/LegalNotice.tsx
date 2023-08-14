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
        textRoot: {
            marginTop: theme.spacing(10),
            marginBottom: theme.spacing(6),
        },
        textTitle: {
            marginTop: theme.spacing(6),

            fontSize: theme.typography.pxToRem(20),
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

                        <p className={ classes.textListing }><strong>{ `Propriétaire : ` }</strong>{ `AD CAM – N° de SIRET 89842578000019 – 7 impasse du Brault – 45760 – Vennecy – France` }</p>
                        <p className={ classes.textListing }><strong>{ `Webmaster & Créateur : ` }</strong>{ `Florian Douay - contact@florian-douay.fr` }</p>
                        <p className={ classes.textListing }><strong>{ `Responsable publication : ` }</strong>{ `Aurélien Duval – contact@ad-cam.fr` }</p>
                        <p className={ classes.textListing }>{ `Le responsable publication est une personne physique ou une personne morale.` }</p>
                        <p className={ classes.textListing }><strong>{ `Hébergeur : ` }</strong>{ `Vercel Inc. - San Francisco, CA` }</p>



                        <h3 className={ classes.textTitle }>{ `2. Conditions générales d’utilisation du site et des services proposés.` }</h3>
                        <p className={ classes.textParagraph }>{ `L’utilisation du site ` }<a href={ `https://ad-cam.fr/` } className={ classes.textLink }>{ `https://ad-cam.fr/` }</a>{ ` implique l’acceptation pleine et entière des conditions générales d’utilisation ci-après décrites. Ces conditions d’utilisation sont susceptibles d’être modifiées ou complétées à tout moment, les utilisateurs du site ` }<a href={ `https://ad-cam.fr/` } className={ classes.textLink }>{ `https://ad-cam.fr/` }</a>{ ` sont donc invités à les consulter de manière régulière.` }</p>

                        <p className={ classes.textParagraph }>{ `Ce site est normalement accessible à tout moment aux utilisateurs. Une interruption pour raison de maintenance technique peut être toutefois décidée par le Webmaster, qui s’efforcera alors de communiquer préalablement aux utilisateurs les dates et heures de l’intervention.` }</p>

                        <p className={ classes.textParagraph }>{ `Le site ` }<a href={ `https://ad-cam.fr/` } className={ classes.textLink }>{ `https://ad-cam.fr/` }</a>{ ` est mis à jour régulièrement par le Webmaster. De la même façon, les mentions légales peuvent être modifiées à tout moment : elles s’imposent néanmoins à l’utilisateur qui est invité à s’y référer le plus souvent possible afin d’en prendre connaissance.` }</p>

                        
                        
                        <h3 className={ classes.textTitle }>{ `3. Description des services fournis.` }</h3>
                        <p className={ classes.textParagraph }>{ `` }</p>

                        <p className={ classes.textParagraph }>{ `` }</p>

                        <p className={ classes.textParagraph }>{ `` }</p>
                        
                        
                        
                        <h3 className={ classes.textTitle }>{ `4. Limitations contractuelles sur les données techniques.` }</h3>
                        <p className={ classes.textParagraph }>{ `` }</p>

                        <p className={ classes.textParagraph }>{ `` }</p>
                        
                        
                        
                        <h3 className={ classes.textTitle }>{ `5. Propriété intellectuelle et contrefaçons.` }</h3>
                        <p className={ classes.textParagraph }>{ `` }</p>

                        <p className={ classes.textParagraph }>{ `` }</p>

                        <p className={ classes.textParagraph }>{ `` }</p>
                        
                        
                        
                        <h3 className={ classes.textTitle }>{ `6. Limitations de responsabilité.` }</h3>
                        <p className={ classes.textParagraph }>{ `` }</p>

                        <p className={ classes.textParagraph }>{ `` }</p>

                        <p className={ classes.textParagraph }>{ `` }</p>
                        
                        
                        
                        <h3 className={ classes.textTitle }>{ `7. Gestion des données personnelles.` }</h3>
                        <p className={ classes.textParagraph }>{ `` }</p>

                        <p className={ classes.textParagraph }>{ `` }</p>

                        <p className={ classes.textParagraph }>{ `` }</p>

                        <p className={ classes.textParagraph }>{ `` }</p>

                        <p className={ classes.textParagraph }>{ `` }</p>

                        <p className={ classes.textParagraph }>{ `` }</p>

                        <p className={ classes.textParagraph }>{ `` }</p>
                        
                        
                        
                        <h3 className={ classes.textTitle }>{ `8. Liens hypertextes et cookies.` }</h3>
                        <p className={ classes.textParagraph }>{ `` }</p>

                        <p className={ classes.textParagraph }>{ `` }</p>

                        <p className={ classes.textParagraph }>{ `` }</p>

                        <p className={ classes.textParagraph }>{ `` }</p>

                        <p className={ classes.textParagraph }>{ `` }</p>

                        <p className={ classes.textParagraph }>{ `` }</p>

                        <p className={ classes.textParagraph }>{ `` }</p>
                        
                        
                        
                        <h3 className={ classes.textTitle }>{ `9. Droit applicable et attribution de juridiction.` }</h3>
                        <p className={ classes.textParagraph }>{ `` }</p>
                        
                        
                        
                        <h3 className={ classes.textTitle }>{ `10. Les principales lois concernées.` }</h3>
                        <p className={ classes.textParagraph }>{ `` }</p>

                        <p className={ classes.textParagraph }>{ `` }</p>
                        
                        
                        
                        <h3 className={ classes.textTitle }>{ `11. Lexique.` }</h3>
                        <p className={ classes.textParagraph }>{ `` }</p>

                        <p className={ classes.textParagraph }>{ `` }</p>



                    </div>
                </article>

            </div>
        </section>
    )
}
