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
        sectionSubTitle: {
            width: "100%",
            textAlign: "center",

            color: "rgba(200, 4, 4, 1)",
            fontSize: theme.typography.pxToRem(22),
            fontWeight: 500,

            marginBottom: theme.spacing(4),
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
                    <SectionTitle text={ "Politique de Confidentialité" } />
                    
                    <h3 className={ classes.sectionSubTitle }>{ `Cette Application collecte certaines Données personnelles de ses Utilisateurs.` }</h3>
                    <div className={ classes.textRoot }>
                        
                        <h4 className={ classes.textTitle }>{ `Propriétaire et Responsable du traitement` }</h4>
                        <p className={ classes.textParagraph }>{ `AD-CAM – 7 impasse du Brault – 45760 Vennecy – France.` }</p>
                        <p className={ classes.textParagraph }><strong>{ `Couriel de contact du Propriétaire: ` }</strong>{ `contact@ad-cam.fr` }</p>



                        <h4 className={ classes.textTitle }>{ `` }</h4>
                        <p className={ classes.textParagraph }>{ `` }</p>



                        <h4 className={ classes.textTitle }>{ `` }</h4>
                        <h5 className={ classes.textSubTitle }>{ `` }</h5>
                        <p className={ classes.textParagraph }>{ `` }</p>

                        <h5 className={ classes.textSubTitle }>{ `` }</h5>
                        <p className={ classes.textParagraph }>{ `` }</p>
                        <ul>
                            <li className={ classes.textListing }>{ `` }</li>
                            <li className={ classes.textListing }>{ `` }</li>
                            <li className={ classes.textListing }>{ `` }</li>
                            <li className={ classes.textListing }>{ `` }</li>
                            <li className={ classes.textListing }>{ `` }</li>
                        </ul>
                        <p className={ classes.textParagraph }>{ `` }</p>

                        <h5 className={ classes.textSubTitle }>{ `` }</h5>
                        <p className={ classes.textParagraph }>{ `` }</p>

                        <h5 className={ classes.textSubTitle }>{ `` }</h5>
                        <p className={ classes.textParagraph }>{ `` }</p>
                        <ul>
                            <li className={ classes.textListing }>{ `` }</li>
                            <li className={ classes.textListing }>{ `` }</li>
                        </ul>
                        <p className={ classes.textParagraph }>{ `` }</p>



                        <h4 className={ classes.textSubTitle }>{ `` }</h4>
                        <p className={ classes.textParagraph }>{ `` }</p>



                        <h4 className={ classes.textSubTitle }>{ `` }</h4>
                        <p className={ classes.textParagraph }>{ `` }</p>
                        <ul>
                            <li className={ classes.textListing }>{ `` }</li>
                            <li className={ classes.textListing }>{ `` }</li>
                        </ul>



                        <h4 className={ classes.textSubTitle }>{ `` }</h4>
                        <p className={ classes.textParagraph }>{ `` }</p>
                        <ul>
                            <li className={ classes.textListing }><strong>{ `` }</strong>{ `` }</li>
                            <li className={ classes.textListing }><strong>{ `` }</strong>{ `` }</li>
                            <li className={ classes.textListing }><strong>{ `` }</strong>{ `` }</li>
                            <li className={ classes.textListing }><strong>{ `` }</strong>{ `` }</li>
                            <li className={ classes.textListing }><strong>{ `` }</strong>{ `` }</li>
                            <li className={ classes.textListing }><strong>{ `` }</strong>{ `` }</li>
                            <li className={ classes.textListing }><strong>{ `` }</strong>{ `` }</li>
                            <li className={ classes.textListing }><strong>{ `` }</strong>{ `` }</li>
                        </ul>

                        <h5 className={ classes.textSubTitle }>{ `` }</h5>
                        <p className={ classes.textParagraph }>{ `` }</p>

                        <h5 className={ classes.textSubTitle }>{ `` }</h5>
                        <p className={ classes.textParagraph }>{ `` }</p>



                        <h4 className={ classes.textTitle }>{ `` }</h4>
                        <h5 className={ classes.textSubTitle }>{ `` }</h5>
                        <p className={ classes.textParagraph }>{ `` }</p>

                        <h5 className={ classes.textSubTitle }>{ `` }</h5>
                        <p className={ classes.textParagraph }>{ `` }</p>

                        <h5 className={ classes.textSubTitle }>{ `` }</h5>
                        <p className={ classes.textParagraph }>{ `` }</p>

                        <h5 className={ classes.textSubTitle }>{ `` }</h5>
                        <p className={ classes.textParagraph }>{ `` }</p>

                        <h5 className={ classes.textSubTitle }>{ `` }</h5>
                        <p className={ classes.textParagraph }>{ `` }</p>

                        <h5 className={ classes.textSubTitle }>{ `` }</h5>
                        <p className={ classes.textParagraph }>{ `` }</p>



                        <h4 className={ classes.textTitle }>{ `` }</h4>
                        <ul>
                            <li className={ classes.textListing }><strong>{ `` }</strong>{ `` }</li>
                            <li className={ classes.textListing }><strong>{ `` }</strong>{ `` }</li>
                            <li className={ classes.textListing }><strong>{ `` }</strong>{ `` }</li>
                            <li className={ classes.textListing }><strong>{ `` }</strong>{ `` }</li>
                            <li className={ classes.textListing }><strong>{ `` }</strong>{ `` }</li>
                            <li className={ classes.textListing }><strong>{ `` }</strong>{ `` }</li>
                            <li className={ classes.textListing }><strong>{ `` }</strong>{ `` }</li>
                            <li className={ classes.textListing }><strong>{ `` }</strong>{ `` }</li>
                            <li className={ classes.textListing }><strong>{ `` }</strong>{ `` }</li>
                            <li className={ classes.textListing }><strong>{ `` }</strong>{ `` }</li>
                        </ul>


                    </div>
                </article>

            </div>
        </section>
    )
}
