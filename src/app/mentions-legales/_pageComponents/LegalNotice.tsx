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
                        <p className={ classes.textParagraph }>{ `En vertu de l’article 6 de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l’économie numérique, il est précisé aux utilisateurs du site ` }<a href={ `www.ad-cam.fr` } className={ classes.textLink }>{ `www.ad-cam.fr` }</a>{ ` l’identité des différents intervenants dans le cadre de sa réalisation et de son suivi :` }</p>

                        <p className={ classes.textListing }><strong>{ `Propriétaire : ` }</strong>{ `AD CAM – N° de SIRET 89842578000019 – 7 impasse du Brault – 45760 – Vennecy – France` }</p>
                        <p className={ classes.textListing }><strong>{ `Webmaster & Créateur : ` }</strong>{ `Florian Douay - contact@florian-douay.fr` }</p>
                        <p className={ classes.textListing }><strong>{ `Responsable publication : ` }</strong>{ `Aurélien Duval – contact@ad-cam.fr` }</p>
                        <p className={ classes.textListing }>{ `Le responsable publication est une personne physique ou une personne morale.` }</p>
                        <p className={ classes.textListing }><strong>{ `Hébergeur : ` }</strong>{ `Vercel Inc. - San Francisco, CA` }</p>



                        <h3 className={ classes.textTitle }>{ `2. Conditions générales d’utilisation du site et des services proposés.` }</h3>
                        <p className={ classes.textParagraph }>{ `L’utilisation du site ` }<a href={ `www.ad-cam.fr` } className={ classes.textLink }>{ `www.ad-cam.fr` }</a>{ ` implique l’acceptation pleine et entière des conditions générales d’utilisation ci-après décrites. Ces conditions d’utilisation sont susceptibles d’être modifiées ou complétées à tout moment, les utilisateurs du site ` }<a href={ `www.ad-cam.fr` } className={ classes.textLink }>{ `www.ad-cam.fr` }</a>{ ` sont donc invités à les consulter de manière régulière.` }</p>

                        <p className={ classes.textParagraph }>{ `Ce site est normalement accessible à tout moment aux utilisateurs. Une interruption pour raison de maintenance technique peut être toutefois décidée par le Webmaster, qui s’efforcera alors de communiquer préalablement aux utilisateurs les dates et heures de l’intervention.` }</p>

                        <p className={ classes.textParagraph }>{ `Le site ` }<a href={ `www.ad-cam.fr` } className={ classes.textLink }>{ `www.ad-cam.fr` }</a>{ ` est mis à jour régulièrement par le Webmaster. De la même façon, les mentions légales peuvent être modifiées à tout moment : elles s’imposent néanmoins à l’utilisateur qui est invité à s’y référer le plus souvent possible afin d’en prendre connaissance.` }</p>

                        
                        
                        <h3 className={ classes.textTitle }>{ `3. Description des services fournis.` }</h3>
                        <p className={ classes.textParagraph }>{ `Le site ` }<a href={ `www.ad-cam.fr` } className={ classes.textLink }>{ `www.ad-cam.fr` }</a>{ ` a pour objet de fournir une information concernant l’ensemble des activités de la société.` }</p>

                        <p className={ classes.textParagraph }>{ `AD CAM s’efforce de fournir sur le site ` }<a href={ `www.ad-cam.fr` } className={ classes.textLink }>{ `www.ad-cam.fr` }</a>{ ` des informations aussi précises que possible. Toutefois, il ne pourra être tenue responsable des omissions, des inexactitudes et des carences dans la mise à jour, qu’elles soient de son fait ou du fait des tiers partenaires qui lui fournissent ces informations.` }</p>

                        <p className={ classes.textParagraph }>{ `Tous les informations indiquées sur le site ` }<a href={ `www.ad-cam.fr` } className={ classes.textLink }>{ `www.ad-cam.fr` }</a>{ ` sont données à titre indicatif, et sont susceptibles d’évoluer. Par ailleurs, les renseignements figurant sur le site ` }<a href={ `www.ad-cam.fr` } className={ classes.textLink }>{ `www.ad-cam.fr` }</a>{ ` ne sont pas exhaustifs. Ils sont donnés sous réserve de modifications ayant été apportées depuis leur mise en ligne.` }</p>
                        
                        
                        
                        <h3 className={ classes.textTitle }>{ `4. Limitations contractuelles sur les données techniques.` }</h3>
                        <p className={ classes.textParagraph }>{ `Le site utilise la technologie JavaScript.` }</p>

                        <p className={ classes.textParagraph }>{ `Le site Internet ne pourra être tenu responsable de dommages matériels liés à l’utilisation du site. De plus, l’utilisateur du site s’engage à accéder au site en utilisant un matériel récent, ne contenant pas de virus et avec un navigateur de dernière génération mis-à-jour` }</p>
                        
                        
                        
                        <h3 className={ classes.textTitle }>{ `5. Propriété intellectuelle et contrefaçons.` }</h3>
                        <p className={ classes.textParagraph }>{ `AD CAM est propriétaire des droits de propriété intellectuelle ou détient les droits d’usage sur tous les éléments accessibles sur le site, notamment les textes, images, graphismes, logo, icônes, sons, logiciels.` }</p>

                        <p className={ classes.textParagraph }>{ `Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de : AD CAM.` }</p>

                        <p className={ classes.textParagraph }>{ `Toute exploitation non autorisée du site ou de l’un quelconque des éléments qu’il contient sera considérée comme constitutive d’une contrefaçon et poursuivie conformément aux dispositions des articles L.335-2 et suivants du Code de Propriété Intellectuelle.` }</p>
                        
                        
                        
                        <h3 className={ classes.textTitle }>{ `6. Limitations de responsabilité.` }</h3>
                        <p className={ classes.textParagraph }>{ `AD CAM ne pourra être tenue responsable des dommages directs et indirects causés au matériel de l’utilisateur, lors de l’accès au site ` }<a href={ `www.ad-cam.fr` } className={ classes.textLink }>{ `www.ad-cam.fr` }</a>{ `, et résultant soit de l’utilisation d’un matériel ne répondant pas aux spécifications indiquées au point 4, soit de l’apparition d’un bug ou d’une incompatibilité.` }</p>

                        <p className={ classes.textParagraph }>{ `AD CAM ne pourra également être tenue responsable des dommages indirects (tels par exemple qu’une perte de marché ou perte d’une chance) consécutifs à l’utilisation du site ` }<a href={ `www.ad-cam.fr` } className={ classes.textLink }>{ `www.ad-cam.fr` }</a>{ `.` }</p>

                        <p className={ classes.textParagraph }>{ `Des espaces interactifs (possibilité de poser des questions dans l’espace contact) sont à la disposition des utilisateurs. AD CAM se réserve le droit de supprimer, sans mise en demeure préalable, tout contenu déposé dans cet espace qui contreviendrait à la législation applicable en France, en particulier aux dispositions relatives à la protection des données. Le cas échéant, AD CAM se réserve également la possibilité de mettre en cause la responsabilité civile et/ou pénale de l’utilisateur, notamment en cas de message à caractère raciste, injurieux, diffamant, ou pornographique, quel que soit le support utilisé (texte, photographie…).` }</p>
                        
                        
                        
                        <h3 className={ classes.textTitle }>{ `7. Gestion des données personnelles.` }</h3>
                        <p className={ classes.textParagraph }>{ `En France, les données personnelles sont notamment protégées par la loi n° 78-87 du 6 janvier 1978, la loi n° 2004-801 du 6 août 2004, l’article L. 226-13 du Code pénal et la Directive Européenne du 24 octobre 1995.` }</p>

                        <p className={ classes.textParagraph }>{ `A l’occasion de l’utilisation du site ` }<a href={ `www.ad-cam.fr` } className={ classes.textLink }>{ `www.ad-cam.fr` }</a>{ `, peuvent êtres recueillies : l’URL des liens par l’intermédiaire desquels l’utilisateur a accédé au site ` }<a href={ `www.ad-cam.fr` } className={ classes.textLink }>{ `www.ad-cam.fr` }</a>{ `, le fournisseur d’accès de l’utilisateur, l’adresse de protocole Internet (IP) de l’utilisateur.` }</p>

                        <p className={ classes.textParagraph }>{ `En tout état de cause AD CAM ne collecte des informations personnelles relatives à l’utilisateur que pour le besoin de certains services proposés par le site ` }<a href={ `www.ad-cam.fr` } className={ classes.textLink }>{ `www.ad-cam.fr` }</a>{ `. L’utilisateur fournit ces informations en toute connaissance de cause, notamment lorsqu’il procède par lui-même à leur saisie. Il est alors précisé à l’utilisateur du site ` }<a href={ `www.ad-cam.fr` } className={ classes.textLink }>{ `www.ad-cam.fr` }</a>{ ` l’obligation ou non de fournir ces informations.` }</p>

                        <p className={ classes.textParagraph }>{ `Conformément aux dispositions des articles 38 et suivants de la loi 78-17 du 6 janvier 1978 relative à l’informatique, aux fichiers et aux libertés, tout utilisateur dispose d’un droit d’accès, de rectification et d’opposition aux données personnelles le concernant, en effectuant sa demande écrite et signée, accompagnée d’une copie du titre d’identité avec signature du titulaire de la pièce, en précisant l’adresse à laquelle la réponse doit être envoyée.` }</p>

                        <p className={ classes.textParagraph }>{ `Aucune information personnelle de l’utilisateur du site ` }<a href={ `www.ad-cam.fr` } className={ classes.textLink }>{ `www.ad-cam.fr` }</a>{ ` n’est publiée à l’insu de l’utilisateur, échangée, transférée, cédée ou vendue sur un support quelconque à des tiers. Seule l’hypothèse du rachat de AD CAM et de ses droits permettrait la transmission des dites informations à l’éventuel acquéreur qui serait à son tour tenu de la même obligation de conservation et de modification des données vis à vis de l’utilisateur du site ` }<a href={ `www.ad-cam.fr` } className={ classes.textLink }>{ `www.ad-cam.fr` }</a>{ `.` }</p>

                        <p className={ classes.textParagraph }>{ `Le site n’est pas déclaré à la CNIL car il ne recueille pas d’informations personnelles.` }</p>

                        <p className={ classes.textParagraph }>{ `Les bases de données sont protégées par les dispositions de la loi du 1er juillet 1998 transposant la directive 96/9 du 11 mars 1996 relative à la protection juridique des bases de données.` }</p>
                        
                        
                        
                        <h3 className={ classes.textTitle }>{ `8. Liens hypertextes et cookies.` }</h3>
                        <p className={ classes.textParagraph }>{ `Le site ` }<a href={ `www.ad-cam.fr` } className={ classes.textLink }>{ `www.ad-cam.fr` }</a>{ ` contient un certain nombre de liens hypertextes vers d’autres sites, mis en place avec l’autorisation de AD CAM. Cependant, AD CAM n’a pas la possibilité de vérifier le contenu des sites ainsi visités, et n’assumera en conséquence aucune responsabilité de ce fait.` }</p>

                        <p className={ classes.textParagraph }>{ `La navigation sur le site ` }<a href={ `www.ad-cam.fr` } className={ classes.textLink }>{ `www.ad-cam.fr` }</a>{ ` est susceptible de provoquer l’installation de cookie(s) sur l’ordinateur de l’utilisateur. Un cookie est un fichier de petite taille, qui ne permet pas l’identification de l’utilisateur, mais qui enregistre des informations relatives à la navigation d’un ordinateur sur un site. Les données ainsi obtenues visent à faciliter la navigation ultérieure sur le site, et ont également vocation à permettre diverses mesures de fréquentation.` }</p>

                        <p className={ classes.textParagraph }>{ `Le refus d’installation d’un cookie peut entraîner l’impossibilité d’accéder à certains services. L’utilisateur peut toutefois configurer son ordinateur de la manière suivante, pour refuser l’installation des cookies :` }</p>

                        <p className={ classes.textParagraph }>{ `Sous Internet Explorer : onglet outil (pictogramme en forme de rouage en haut a droite) / options internet. Cliquez sur Confidentialité et choisissez Bloquer tous les cookies. Validez sur Ok.` }</p>

                        <p className={ classes.textParagraph }>{ `Sous Firefox : en haut de la fenêtre du navigateur, cliquez sur le bouton Firefox, puis aller dans l’onglet Options. Cliquer sur l’onglet Vie privée. Paramétrez les Règles de conservation sur : utiliser les paramètres personnalisés pour l’historique. Enfin décochez-la pour désactiver les cookies.` }</p>

                        <p className={ classes.textParagraph }>{ `Sous Safari : Cliquez en haut à droite du navigateur sur le pictogramme de menu (symbolisé par un rouage). Sélectionnez Paramètres. Cliquez sur Afficher les paramètres avancés. Dans la section “Confidentialité”, cliquez sur Paramètres de contenu. Dans la section “Cookies”, vous pouvez bloquer les cookies.` }</p>

                        <p className={ classes.textParagraph }>{ `Sous Chrome : Cliquez en haut à droite du navigateur sur le pictogramme de menu (symbolisé par trois lignes horizontales). Sélectionnez Paramètres. Cliquez sur Afficher les paramètres avancés. Dans la section “Confidentialité”, cliquez sur préférences. Dans l’onglet “Confidentialité”, vous pouvez bloquer les cookies.` }</p>
                        
                        
                        
                        <h3 className={ classes.textTitle }>{ `9. Droit applicable et attribution de juridiction.` }</h3>
                        <p className={ classes.textParagraph }>{ `Tout litige en relation avec l’utilisation du site ` }<a href={ `www.ad-cam.fr` } className={ classes.textLink }>{ `www.ad-cam.fr` }</a>{ ` est soumis au droit français. Il est fait attribution exclusive de juridiction aux tribunaux compétents d’ Orléans.` }</p>
                        
                        
                        
                        <h3 className={ classes.textTitle }>{ `10. Les principales lois concernées.` }</h3>
                        <p className={ classes.textParagraph }>{ `Loi n° 78-17 du 6 janvier 1978, notamment modifiée par la loi n° 2004-801 du 6 août 2004 relative à l’informatique, aux fichiers et aux libertés.` }</p>

                        <p className={ classes.textParagraph }>{ `Loi n° 2004-575 du 21 juin 2004 pour la confiance dans l’économie numérique.` }</p>
                        
                        
                        
                        <h3 className={ classes.textTitle }>{ `11. Lexique.` }</h3>
                        <p className={ classes.textParagraph }>{ `Utilisateur : Internaute se connectant, utilisant le site susnommé.` }</p>

                        <p className={ classes.textParagraph }>{ `Informations personnelles : « les informations qui permettent, sous quelque forme que ce soit, directement ou non, l’identification des personnes physiques auxquelles elles s’appliquent » (article 4 de la loi n° 78-17 du 6 janvier 1978).` }</p>



                    </div>
                </article>

            </div>
        </section>
    )
}
