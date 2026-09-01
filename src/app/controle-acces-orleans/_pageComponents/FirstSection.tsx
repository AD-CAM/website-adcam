'use client'
/* Assets Imports */
import accessControlOne from "public/access_control/access-control-one.jpg"
import accessControlTwo from "public/access_control/access-control-two.jpg"
/* Library Imports */
import { makeStyles } from 'tss-react/mui'
import { motion, Variants } from 'framer-motion'
/* Components Imports */
import { TechSheetSubSectionBanner } from '../../_components/TechSheet'
import ImagedArticle from '../../_components/ImagedArticle'
import { IconButton } from "../../_components/Button"



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

            boxSizing: "border-box",

            width: "100%",
            maxWidth: "1450px",

            paddingTop: theme.spacing(8),
            paddingBottom: theme.spacing(8),

            [theme.breakpoints.up('sm')]: {
                paddingLeft: theme.spacing(6),
                paddingRight: theme.spacing(6),
            },
        },
        articleContainer: {
            [theme.breakpoints.down('sm')]: {
                maxWidth: "90%",
                marginBottom: theme.spacing(2),
            },
            [theme.breakpoints.up('sm')]: {
                maxWidth: "1050px",
                marginTop: theme.spacing(1),
                marginBottom: theme.spacing(1),
            },
        },
        textParagraph: {
            fontSize: theme.typography.pxToRem(15),
            fontWeight: 400,

            color: "rgba(41, 41, 41, 1)",
        },
        textContainer: {
            width: "100%",
            boxSizing: "border-box",

            [theme.breakpoints.down('sm')]: {
                maxWidth: "90%",
                marginBottom: theme.spacing(6),
            },
            [theme.breakpoints.up('sm')]: {
                maxWidth: "1050px",
                marginBottom: theme.spacing(4),
            },
        },
        titledTextRoot: {
            marginTop: theme.spacing(6),
        },
        titledTextTitle: {
            padding: 0,
            margin: 0,
            marginBottom: theme.spacing(0.5),

            fontSize: theme.typography.pxToRem(16),
            fontWeight: 600,

            color: "rgba(41, 41, 41, 1)",
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
        },
    }
})



const revealVariant: Variants = { rest: { opacity: 0, translateY: "20px" }, loaded: { opacity: 1, translateY: "0px" } }



export default function FirstSection() {
    const { classes } = useStyles()



    return (
        <section className={ classes.root }>
            <div className={ classes.subRoot }>
                <div className={ classes.articleContainer }>
                    <ImagedArticle image={ accessControlOne } alt={ `Système de contrôle d'accès par digicode` } isLeft={ false } title={ `Faites appel à AD CAM pour vous garantir un accès sécurisé à votre bâtiment` }>
                        <p>{ `Que vous ayez un ou plusieurs bâtiments à sécuriser et quel que soit le nombre d'utilisateurs, ` }<strong>{ `AD CAM` }</strong>{ ` propose des solutions de contrôle d'accès souples et modulaires, adaptées aux besoins de chaque client : ` }<strong>{ `multi-sites, multi-bâtiments, multi-postes...` }</strong></p>
                        <p><strong>{ `Le contrôle d'accès` }</strong>{ ` consiste à s’assurer qu’un individu a bien les droits nécessaires pour accéder à un lieu, un édifice ou un local. Il permet d’organiser la circulation des personnes à l’intérieur d’un site et de gérer l’accès aux différentes zones de façon sélective. ` }</p>
                        <p>{ `Ainsi, ` }<strong>{ `l’accès à des espaces sensibles peut être restreint` }</strong>{ ` à certains utilisateurs, selon des plages horaires prédéfinies, avec un enregistrement de tous les déplacements dans un historique.` }</p>
                    </ImagedArticle>
                </div>
                <div className={ classes.articleContainer }>
                    <ImagedArticle image={ accessControlTwo } alt={ `Système de contrôle d'accès magnétique` } isLeft={ true } title={ `Comment contrôler les accès ?` }>
                        <p><strong>{ `L'identification` }</strong>{ ` consiste à vérifier qu'une personne a l'autorisation d'accéder à une zone ou à un bâtiment. Lorsque la personne présente sa carte d'identité à un lecteur placé près de la porte, le système ouvre ou non la porte.` }</p>
                        <p>{ `L'identification, selon la technologie utilisée, est représentée par une carte ou un badge contenant des informations enregistrées. Il peut s'agir d'un porte-clés, d'une télécommande, de données biométriques ou d'un numéro d'immatriculation de véhicule...` }</p>
                        <p><strong>{ `Les badges` }</strong>{ ` sont une solution très courante pour le contrôle d'accès. Pour entrer dans un bâtiment, la personne doit présenter un badge valide à un lecteur. Le badge est la "clé" du système et le lecteur saisit les informations enregistrées sur le badge.` }</p>
                    </ImagedArticle>
                </div>
            </div>

            <TechSheetSubSectionBanner section={ "Les différentes " } subSection={ "technologies" } />

            <div className={ classes.subRoot }>
                <div className={ classes.textContainer }>
                    <p className={ classes.textParagraph }>{ `iMotion utilise toutes les technologies d'identification, de la plus simple à la plus avancée, quel que soit le type d'identification. Le choix de la technologie pour un système d'accès dépend de plusieurs critères. La sécurité est l'élément le plus important mais la facilité et le confort d'utilisation sont de plus en plus cruciaux.` }</p>
                    <motion.div className={ classes.titledTextRoot } variants={ revealVariant } initial="rest" whileInView="loaded" transition={{ duration: 0.5 }} viewport={{ once: true }}>
                        <h4 className={ classes.titledTextTitle }>{ `Technologies sans contact : RFID` }</h4>
                        <p className={ classes.textParagraph }>{ `RFID est l'abréviation de Radio Frequency Identification (identification par radiofréquence). Le lecteur envoie un signal sur une fréquence déterminée à une étiquette radio située dans le champ de lecture. Lorsque l'étiquette, également appelée marqueur ou transpondeur, est "réveillée" par le lecteur, celui-ci renvoie un signal et un dialogue est établi selon un protocole de communication prédéfini. Certaines balises comportent une mémoire supplémentaire qui permet d'écrire des données. Pour communiquer, le tag et le lecteur doivent être sur la même fréquence mais, comme pour une radio, ces fréquences couvrent un spectre allant des basses aux très hautes fréquences.` }</p>
                    </motion.div>
                    <motion.div className={ classes.titledTextRoot } variants={ revealVariant } initial="rest" whileInView="loaded" transition={{ duration: 0.5 }} viewport={{ once: true }}>
                        <h4 className={ classes.titledTextTitle }>{ `Basse fréquence - 125 KHz` }</h4>
                        <p className={ classes.textParagraph }>{ `Le numéro de série du badge est enregistré dans la puce électronique du badge. L'antenne (ou le lecteur) détermine la distance de lecture entre elle et le badge. À partir de 30 cm, on parle de technologie "mains libres". Dans le secteur du contrôle d'accès et de l'identification, la technologie 125 kHz a révolutionné le marché en offrant un rapport qualité-prix inégalé. Robuste, sans usure et facile à mettre en place, cette technologie a connu un succès mondial et représente aujourd'hui la référence. ` }</p>
                    </motion.div>
                    <motion.div className={ classes.titledTextRoot } variants={ revealVariant } initial="rest" whileInView="loaded" transition={{ duration: 0.5 }} viewport={{ once: true }}>
                        <h4 className={ classes.titledTextTitle }>{ `HF - 13,56 MHz : Mifare, Mifare+, Desfire, iCLASS®, Legic...` }</h4>
                        <p className={ classes.textParagraph }>{ `C'est la première technologie RFID à avoir des normes internationales (ISO 14443-A/B et ISO 15693). C'est le choix idéal lorsque la vitesse, la sécurité et la capacité de mémoire sont requises. La mémoire de la puce peut stocker différentes informations (photos, texte, etc.) pour le contrôle d'accès ou d'autres applications, par exemple la monnaie électronique. Pour le contrôle d'accès, la haute fréquence augmente la sécurité car un numéro crypté peut être entré dans la mémoire du badge à l'aide d'un codeur. La biométrie est utile dans ce cas ; l'empreinte digitale est stockée dans le badge. ` }</p>
                    </motion.div>
                    <motion.div className={ classes.titledTextRoot } variants={ revealVariant } initial="rest" whileInView="loaded" transition={{ duration: 0.5 }} viewport={{ once: true }}>
                        <h4 className={ classes.titledTextTitle }>{ `UHF - 433 MHz, 863 à 915 MHz, 2.45 GHz` }</h4>
                        <p className={ classes.textParagraph }>{ `Grâce à cette fréquence, le badge peut être lu à une distance de plusieurs mètres, par exemple à un poste de péage. Le numéro de série dans la puce du badge est toujours lu, mais le badge est doté d'une batterie qui ne s'active que lorsqu'elle se trouve dans le champ du lecteur, ce qui augmente la distance de lecture. C'est ce qu'on appelle un badge actif. ` }</p>
                    </motion.div>
                </div>
            </div>

            <TechSheetSubSectionBanner section={ "Logiciel de " } subSection={ "contrôle d'accès" } />

            <div className={ classes.subRoot }>
                <div className={ classes.textContainer }>
                    <motion.div className={ classes.titledTextRoot } variants={ revealVariant } initial="rest" whileInView="loaded" transition={{ duration: 0.5 }} viewport={{ once: true }}>
                        <h4 className={ classes.titledTextTitle }>{ `Centralisation` }</h4>
                        <p className={ classes.textParagraph }>{ `Notre solution vous permet de centraliser votre gestion des accès en un seul point avec la possibilité d'attribuer des autorisations autonomes à d'autres sites. Avec notre logiciel de contrôle d'accès, vous pouvez attribuer des badges nominatifs aux utilisateurs en définissant les zones autorisées et également attribuer des temps d'accès à ces badges. Vous pouvez ensuite gérer le trafic des visiteurs et du personnel en toute sécurité.` }</p>
                    </motion.div>
                    <motion.div className={ classes.titledTextRoot } variants={ revealVariant } initial="rest" whileInView="loaded" transition={{ duration: 0.5 }} viewport={{ once: true }}>
                        <h4 className={ classes.titledTextTitle }>{ `Opérations` }</h4>
                        <p className={ classes.textParagraph }>{ `A l'aide d'un mot de passe, le système de contrôle d'accès consulte la base de données pour voir l'autorisation de la personne identifiée : date de début et de fin de validité, zones autorisées, heures et dates d'accès, etc... En fonction de cette autorisation, le système autorisera ou non l'accès à la zone concernée et ouvrira ou non la porte.` }</p>
                    </motion.div>
                    <motion.div className={ classes.titledTextRoot } variants={ revealVariant } initial="rest" whileInView="loaded" transition={{ duration: 0.5 }} viewport={{ once: true }}>
                        <h4 className={ classes.titledTextTitle }>{ `Caractéristiques du logiciel` }</h4>
                        <p className={ classes.textParagraph }>{ `Créer des badges nominatifs et les personnaliser. Attribuer des droits et des habilitations à ces badges : qui a accès à quelle zone et quand ? Archiver chaque événement dans un journal (accès, alarme, etc.) pour toute recherche ou vérification ultérieure. Recouper ou rechercher des données dans les journaux selon des critères spécifiques : date, heure, accès ou non, etc...` }</p>
                    </motion.div>
                    <motion.div className={ classes.titledTextRoot } variants={ revealVariant } initial="rest" whileInView="loaded" transition={{ duration: 0.5 }} viewport={{ once: true }}>
                        <h4 className={ classes.titledTextTitle }>{ `Gestion des profils` }</h4>
                        <p className={ classes.textParagraph }>{ `Grâce à sa gestion multi-profil et à la flexibilité de l'attribution des accès, la solution iMotion s'adapte à vos besoins et résout tous vos problèmes de gestion des accès. La gestion des profils nécessite la création d'un fichier "titulaire du badge" dans le logiciel. Ce dossier individuel contiendra toutes les informations personnelles relatives au porteur du badge. Le dossier individuel du porteur de badge contient des informations le concernant : nom, période de validité, profil, etc... Dans la base de données, l'administrateur ou l'opérateur associe le titulaire du badge à un identifiant et lui attribue une autorisation d'accès sous la forme d'un profil. Un profil est un groupe de zones géographiques, d'heures, de dates, etc...` }</p>
                    </motion.div>
                </div>
            </div>

            <div className={ classes.contactUsRoot }>
                <div className={ classes.contactUsSubRoot }>
                    <div className={ classes.contactUsText }>
                        <h3 className={ classes.contactUsTitle }>
                            { `Nos solutions de contrôle d'accès vous intéressent ?` }
                        </h3>
                        <p className={ classes.contactUsSubTitle }>
                            { `AD CAM est à votre disposition pour vous conseiller et vous transmettre une estimation gratuite. Nous intervenons dans un rayon de 50 kilomètres autour d'Orléans.` }
                        </p>
                    </div>

                    <IconButton icon={ "invoice" } text={ "Demander un devis" } link={ "/contact" } description={ "Contactez-nous pour obtenir un devis 100% gratuit" } isOutside={ false } />
                </div>
            </div>
        </section>
    )
}
