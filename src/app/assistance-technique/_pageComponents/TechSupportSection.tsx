'use client'
/* Library Imports */
import { makeStyles } from 'tss-react/mui'
/* Components Imports */
import { IconButton } from "../../_components/Button"
import { SectionTitle } from '../../_components/SectionTitle'
import { useTheme, useMediaQuery } from "@mui/material"
/* Icons Imports */
import { MdOutlineSupportAgent } from "react-icons/md"



const useStyles = makeStyles()((theme) => {
    return {
        root: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",

            boxSizing: "border-box",

            width: "100%",

            paddingTop: theme.spacing(12),
            paddingBottom: theme.spacing(10),
        },
        subRoot: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",

            boxSizing: "border-box",

            width: "100%",
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



        supportTutorial: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",

            boxSizing: "border-box",

            backgroundColor: "#f7f7f7",
            borderRadius: theme.spacing(0.75),

            padding: theme.spacing(3),

            [theme.breakpoints.down('md')]: {
                width: "100%",
            },
            [theme.breakpoints.up('md')]: {
                width: "45%",  
            },
        },
        tutorialTitle: {
            marginTop: 0,
            width: "100%",
            fontWeight: 600,
        },
        tutorialList: {
            paddingLeft: theme.spacing(2),
            paddingRight: theme.spacing(2),
            marginBottom: 0,
            maxWidth: "100%",
        },
        tutorialListEntry: {
            marginBottom: theme.spacing(2),

            '&::marker': {
                fontWeight: "bold",
            }
        },
        tutorialLink: {
            textDecoration: "underline",
            color: "#C80404",

            '&:link': {
                color: "#C80404",
            },
            '&:hover': {
                color: "#FC6969",
            },
            '&:active': {
                color: "#FC6969",
            },
        },
        buttonHolder: {
            display: "flex",
            alignContent: "center",
            justifyContent: "center",

            width: "auto",

            marginRight: "40px",
            marginTop: theme.spacing(3),
            marginBottom: theme.spacing(3),
        },
        tutorialWarningEntry: {
            color: "rgba(200, 4, 4, 1)",
            fontWeight: 600,

            '&::marker': {
                color: "black",
                fontWeight: "bold",
            }
        },



        supportArticle: {
            [theme.breakpoints.down('md')]: {
                width: "100%",

                marginBottom: theme.spacing(2),
            },
            [theme.breakpoints.up('md')]: {
                width: "48%",

                marginBottom: 0,
            },
        },
        agentRoot: {
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



export default function TechSupportSection() {
    const { classes } = useStyles()

    const theme = useTheme()
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'))



    return (      
        <section className={ classes.root }>
            <div className={ classes.subRoot }>
                <div className={ classes.mainContainer }>
                    <SectionTitle text={ `Assistance technique` } />

                    <article className={ classes.articleRoot }>
                        <div className={ classes.supportTutorial }>
                            <h3 className={ classes.tutorialTitle }>{ `Pour que nous vous aidions, suivez bien ces instructions` }</h3>
                            <ol className={ classes.tutorialList }>
                                <li className={ classes.tutorialListEntry }>{ `Téléchargez puis ouvrez le logiciel ` }<a href={ `https://www.teamviewer.com/fr/info/quicksupport` } className={ classes.tutorialLink } target={ '_blank' } rel={ 'noopener noreferrer' }>{ `Teamviewer QuickSupport` }</a>{ ` sur votre ordinateur` }</li>
                                <li className={ classes.tutorialListEntry }>{ `Acceptez les conditions d'utilisation` }</li>
                                <li className={ classes.tutorialListEntry }>{ `Une fois ouvert, appelez notre assistant(e):` }</li>
                                <div className={ classes.buttonHolder }>
                                    <IconButton icon={ 'phone' } text={ '09 75 98 80 57' } link={ 'tel:+33975988057' } description={ 'Appelez notre assistance technique au 09 75 98 80 57' } isOutside={ false }/>
                                </div>
                                <li className={ classes.tutorialListEntry }>{ `Communiquez `}<strong>{ `votre ID` }</strong>{ ` ainsi que `}<strong>{ `votre mot de passe` }</strong>{ ` à notre assistant(e)` }</li>
                            </ol>
                            <ul className={ classes.tutorialList }>
                                <li className={ classes.tutorialListEntry }>{ `Notre assistant(e) va prendre contrôle de votre système.` }</li>
                                <li className={ classes.tutorialWarningEntry }>{ `Ne communiquez votre identifiant ou votre mot de passe à personne d'autre.` }</li>
                            </ul>
                        </div>
                        <div className={ classes.supportArticle }>
                            <div className={ classes.agentRoot }>
                                <MdOutlineSupportAgent />
                            </div>
                            <h3 className={ classes.articleTitle }>{ `Gratuite et illimitée, notre équipe technique est à votre service` }</h3>
                            <p className={ classes.articleText }>{ `Notre équipe technique est à votre service durant toute la durée de vie de votre matériel. Que ce soit pour un système de vidéo surveillance ou pour un système d’alarme, vous pouvez demander notre aide à tout moment.` }</p>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    )
}
