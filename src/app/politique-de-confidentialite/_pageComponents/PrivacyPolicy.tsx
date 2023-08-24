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

            marginBottom: theme.spacing(0.5),
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



                        <h4 className={ classes.textTitle }>{ `Types de Données collectées` }</h4>
                        <p className={ classes.textParagraph }>{ `Figurent parmi les types de Données personnelles que cette Application collecte directement ou en recourant à des tiers : Cookies, Données d’utilisation, prénom, nom de famille, nom de la société et adresse électronique. Les détails complets sur chaque type de Données personnelles collectées sont fournis dans les parties consacrées à la présente politique de confidentialité ou par des textes d’explication spécifiques publiés avant la collecte des Données. Les Données personnelles peuvent être librement fournies par l’Utilisateur, ou, en cas de Données d’utilisation, collectées automatiquement lorsque vous utilisez cette Application. Sauf indication contraire, toutes les Données demandées par cette Application sont obligatoires et leur absence peut rendre impossible la fourniture des Services par cette Application. Dans le cas où cette Application précise que certaines Données ne sont pas obligatoires, les Utilisateurs sont libres de ne pas les communiquer sans entraîner de conséquences sur la disponibilité ou le fonctionnement du Service. Les Utilisateurs qui auraient des doutes sur les Données personnelles obligatoires sont invités à contacter le Propriétaire. Toute utilisation des Cookies – ou d’autres outils de suivi – par cette Application ou par les propriétaires de services tiers utilisés par cette Application vise à fournir le Service demandé par l’Utilisateur, outre les autres finalités décrites dans le présent document et dans la Politique relative aux cookies, si elle est disponible. Les Utilisateurs sont responsables de toute Donnée personnelle de tiers obtenue, publiée ou communiquée par l’intermédiaire de cette Application et confirment qu’ils obtiennent le consentement du tiers pour fournir les Données au Propriétaire.` }</p>



                        <h4 className={ classes.textTitle }>{ `Mode et lieu de traitement des Données` }</h4>
                        <h5 className={ classes.textSubTitle }>{ `Méthodes de traitement` }</h5>
                        <p className={ classes.textParagraph }>{ `Le Propriétaire prend les mesures de sécurité appropriées afin d’empêcher l’accès, la divulgation, la modification ou la destruction non autorisés des Données. Le traitement des Données est effectué à l’aide d’ordinateurs ou d’outils informatiques, en suivant les procédures et les modes organisationnels étroitement liés aux finalités indiquées. Outre le Propriétaire, les Données peuvent être accessibles, dans certains cas, à certaines catégories de personnes en charge du fonctionnement de cette Application (administration, ventes, marketing, service juridique, administration du système) ou à des parties externes (telles que les fournisseurs tiers de services techniques, les services de messagerie, les fournisseurs d’hébergement, les entreprises informatiques, les agences de communication) désignées, le cas échéant, comme Sous-traitantes par le Propriétaire. La liste mise à jour de ces parties peut être demandée à tout moment au Propriétaire.` }</p>

                        <h5 className={ classes.textSubTitle }>{ `Base juridique du traitement` }</h5>
                        <p className={ classes.textParagraph }>{ `Le Propriétaire peut traiter les Données personnelles relatives aux Utilisateurs si l’une des conditions suivantes s’applique:` }</p>
                        <ul>
                            <li className={ classes.textListing }>{ `les Utilisateurs ont donné leur consentement pour une ou plusieurs finalités spécifiques ; A noter : Selon certaines législations, le Propriétaire peut être autorisé à traiter des Données personnelles jusqu’à ce que l’Utilisateur s’y oppose (« opt-out »), sans avoir à dépendre du consentement ou de l’une des bases juridiques suivantes. Cette condition ne s’applique toutefois pas lorsque le traitement des Données personnelles est soumis à la loi européenne sur la protection des données;` }</li>
                            <li className={ classes.textListing }>{ `la fourniture de Données est nécessaire pour l’exécution d’un accord avec l’Utilisateur ou pour toute obligation précontractuelle de celui-ci;` }</li>
                            <li className={ classes.textListing }>{ `le traitement est nécessaire pour se conformer à une obligation légale à laquelle le Propriétaire est soumis;` }</li>
                            <li className={ classes.textListing }>{ `le traitement est lié à une tâche effectuée dans l’intérêt public ou dans l’exercice de l’autorité publique dévolue au Propriétaire;` }</li>
                            <li className={ classes.textListing }>{ `le traitement est nécessaire aux fins des intérêts légitimes poursuivis par le Propriétaire ou par un tiers.` }</li>
                        </ul>
                        <p className={ classes.textParagraph }>{ `Dans tous les cas, le Propriétaire vous aidera volontiers à clarifier la base juridique spécifique qui s’applique au traitement, et en particulier si la fourniture de Données personnelles est une exigence légale ou contractuelle, ou une exigence nécessaire pour conclure un contrat.` }</p>

                        <h5 className={ classes.textSubTitle }>{ `Lieu de traitement` }</h5>
                        <p className={ classes.textParagraph }>{ `Les Données sont traitées au siège du Propriétaire et dans tous les autres lieux où sont situées les parties responsables du traitement. Selon la localisation de l’Utilisateur, les transferts de données peuvent entraîner le transfert des Données de ce dernier vers un pays autre que le sien. Pour en savoir plus sur le lieu de traitement de ces Données transférées, les Utilisateurs peuvent consulter la section qui contient des détails sur le traitement des Données personnelles. Les Utilisateurs ont également le droit de connaître la base juridique des transferts de Données vers un pays situé en dehors de l’Union européenne ou vers toute organisation internationale régie par le droit international public ou créée par deux pays ou plus, comme l’ONU, ainsi que les mesures de sécurité prises par le Propriétaire pour sauvegarder leurs Données. Si un tel transfert a lieu, les Utilisateurs peuvent en savoir plus en consultant les sections correspondantes du présent document ou se renseigner auprès du Propriétaire en utilisant les informations fournies dans la section de contact.` }</p>

                        <h5 className={ classes.textSubTitle }>{ `Temps de conservation` }</h5>
                        <p className={ classes.textParagraph }>{ `Les Données personnelles sont traitées et conservées aussi longtemps que requis pour la finalité pour laquelle elles ont été collectées. Par conséquent:` }</p>
                        <ul>
                            <li className={ classes.textListing }>{ `Les Données personnelles collectées à des fins liées à l’exécution d’un contrat entre le Propriétaire et l’Utilisateur doivent être conservées jusqu’à la pleine exécution du contrat.` }</li>
                            <li className={ classes.textListing }>{ `Les Données personnelles collectées aux fins des intérêts légitimes du Propriétaire doivent être conservées aussi longtemps que nécessaire pour atteindre ces objectifs. Les Utilisateurs peuvent trouver des informations spécifiques concernant les intérêts légitimes poursuivis par le Propriétaire dans les sections correspondantes du présent document ou en contactant le Propriétaire.` }</li>
                        </ul>
                        <p className={ classes.textParagraph }>{ `Le Propriétaire peut être autorisé à conserver des Données personnelles plus longtemps chaque fois que l’Utilisateur a donné son consentement à un tel traitement, tant que ce consentement n’est pas retiré. En outre, le Propriétaire peut être obligé de conserver des Données personnelles plus longtemps chaque fois que cela est requis pour l’exécution d’une obligation légale ou sur ordre d’une autorité. Une fois la période de conservation expirée, les Données personnelles seront supprimées. Par conséquent, le droit d’accès, le droit d’effacement, le droit de rectification et le droit à la portabilité des données ne peuvent être appliqués après l’expiration de la période de conservation.` }</p>



                        <h4 className={ classes.textSubTitle }>{ `Finalités du traitement` }</h4>
                        <p className={ classes.textParagraph }>{ `Les Données relatives à l’Utilisateur sont collectées afin de permettre au Propriétaire de fournir ses Services, ainsi que pour les finalités suivantes : Analyses et Contacter l’Utilisateur. Les Utilisateurs peuvent trouver de plus amples informations sur les finalités de ce traitement et sur les Données personnelles spécifiques utilisées pour chaque finalité dans les sections respectives du présent document.` }</p>



                        <h4 className={ classes.textSubTitle }>{ `Informations détaillées sur le traitement des Données personnelles` }</h4>
                        <p className={ classes.textParagraph }>{ `Les Données personnelles sont collectées pour les finalités suivantes à l’aide de plusieurs services:` }</p>
                        <ul>
                            <li className={ classes.textListing }>{ `Analyses` }</li>
                            <li className={ classes.textListing }>{ `Contacter l'Utilisateur` }</li>
                        </ul>



                        <h4 className={ classes.textSubTitle }>{ `Droits des Utilisateurs` }</h4>
                        <p className={ classes.textParagraph }>{ `Les Utilisateurs peuvent exercer certains droits concernant leurs Données traitées par le Propriétaire. En particulier, les Utilisateurs ont le droit de faire ce qui suit:` }</p>
                        <ul>
                            <li className={ classes.textListing }><strong>{ `Retirer leur consentement à tout moment. ` }</strong>{ `Les Utilisateurs ont le droit de retirer leur consentement s’ils ont déjà donné leur consentement au traitement de leurs Données personnelles.` }</li>
                            <li className={ classes.textListing }><strong>{ `S’opposer au traitement de leurs Données. ` }</strong>{ `Les Utilisateurs ont le droit de s’opposer au traitement de leurs Données si le traitement est effectué sur une base juridique autre que le consentement. Des précisions sont ajoutées dans la section correspondante ci-dessous.` }</li>
                            <li className={ classes.textListing }><strong>{ `Accéder à leurs Données. ` }</strong>{ `Les Utilisateurs ont le droit de savoir si les Données sont traitées par le Propriétaire, d’obtenir des informations sur certains aspects du traitement et d’obtenir une copie des Données en cours de traitement.` }</li>
                            <li className={ classes.textListing }><strong>{ `Vérifier et obtenir une rectification. ` }</strong>{ `Les Utilisateurs ont le droit de vérifier l’exactitude de leurs Données et de demander qu’elles soient mises à jour ou corrigées.` }</li>
                            <li className={ classes.textListing }><strong>{ `Limiter le traitement de leurs Données. ` }</strong>{ `Les Utilisateurs ont le droit, sous certaines conditions, de limiter le traitement de leurs Données. Dans ce cas, le Propriétaire traitera leurs Données uniquement pour les stocker.` }</li>
                            <li className={ classes.textListing }><strong>{ `Faire supprimer ou effacer leurs Données personnelles. ` }</strong>{ `Les Utilisateurs ont le droit, sous certaines conditions, d’obtenir l’effacement de leurs Données auprès du Propriétaire.` }</li>
                            <li className={ classes.textListing }><strong>{ `Récupérer leurs Données et les transférer à un autre responsable du traitement. ` }</strong>{ `Les Utilisateurs ont le droit de récupérer leurs Données dans un format structuré, couramment utilisé et lisible par machine et, si cela est techniquement possible, de les transmettre à un autre responsable du traitement sans obstacle d’aucune sorte. Cette disposition s’applique, sous réserve que les Données soient traitées par des moyens automatisés et que le traitement repose sur le consentement de l’Utilisateur, sur un contrat auquel l’Utilisateur est partie ou sur des obligations précontractuelles.` }</li>
                            <li className={ classes.textListing }><strong>{ `Déposer plainte. ` }</strong>{ `Les Utilisateurs ont le droit de déposer une plainte auprès de leur autorité compétente en matière de protection des données.` }</li>
                        </ul>

                        <h5 className={ classes.textSubTitle }>{ `Informations concernant le droit d’opposition au traitement` }</h5>
                        <p className={ classes.textParagraph }>{ `Lorsque les Données personnelles sont traitées dans l’intérêt public, dans l’exercice d’une autorité officielle dévolue au Propriétaire ou aux fins des intérêts légitimes poursuivis par celui-ci, les Utilisateurs peuvent s’opposer à ce traitement en fournissant un motif lié à leur situation particulière devant justifier cette opposition. Les Utilisateurs doivent cependant savoir que si leurs Données personnelles sont traitées à des fins de marketing direct, ils peuvent s’opposer à ce traitement à tout moment sans aucune justification. Pour savoir si le Propriétaire traite des Données personnelles à des fins de marketing direct, les Utilisateurs peuvent se reporter aux sections correspondantes du présent document.` }</p>

                        <h5 className={ classes.textSubTitle }>{ `Comment exercer ces droits` }</h5>
                        <p className={ classes.textParagraph }>{ `Toute demande d’exercice des droits de l’Utilisateur peut être adressée au Propriétaire grâce aux coordonnées fournies dans le présent document. Ces demandes peuvent être exercées gratuitement et seront étudiées par le Propriétaire le plus tôt possible et toujours dans un délai d’un mois.` }</p>



                        <h4 className={ classes.textTitle }>{ `Informations supplémentaires sur le traitement et la collecte des Données` }</h4>
                        <h5 className={ classes.textSubTitle }>{ `Action en justice` }</h5>
                        <p className={ classes.textParagraph }>{ `Les Données personnelles de l’Utilisateur peuvent être utilisées à des fins juridiques par le Propriétaire devant les tribunaux ou dans les étapes pouvant conduire à une action en justice résultant d’une utilisation inappropriée de cette Application ou des Services connexes. L’Utilisateur est conscient du fait que le Propriétaire peut être amené à révéler des Données personnelles à la demande des autorités publiques.` }</p>

                        <h5 className={ classes.textSubTitle }>{ `Informations supplémentaires concernant les Données personnelles de l’Utilisateur` }</h5>
                        <p className={ classes.textParagraph }>{ `Outre les informations contenues dans la présente politique de confidentialité, cette Application peut fournir à l’Utilisateur des renseignements complémentaires et des informations contextuelles concernant des services particuliers ou la collecte et le traitement des Données personnelles.` }</p>

                        <h5 className={ classes.textSubTitle }>{ `Journaux système et maintenance` }</h5>
                        <p className={ classes.textParagraph }>{ `À des fins d’exploitation et de maintenance, cette Application et tout service tiers peuvent collecter des fichiers qui enregistrent les interactions avec cette Application (journaux système) ou utiliser à cette fin d’autres Données personnelles (telles que l’adresse IP).` }</p>

                        <h5 className={ classes.textSubTitle }>{ `Informations non incluses dans la présente politique` }</h5>
                        <p className={ classes.textParagraph }>{ `De plus amples renseignements concernant la collecte ou le traitement des Données personnelles peuvent à tout moment être demandés au Propriétaire. Veuillez consulter les coordonnées figurant au début du présent document.` }</p>

                        <h5 className={ classes.textSubTitle }>{ `Comment les demandes « Ne pas pister » sont traitées` }</h5>
                        <p className={ classes.textParagraph }>{ `Cette Application ne prend pas en charge les demandes « Ne pas pister ». Référez-vous à la politique de confidentialité des services tiers pour déterminer s’ils acceptent ou non aux demandes « Ne pas pister ».` }</p>

                        <h5 className={ classes.textSubTitle }>{ `Modifications de la présente politique de confidentialité` }</h5>
                        <p className={ classes.textParagraph }>{ `Le Propriétaire se réserve le droit d’apporter des modifications à la présente politique de confidentialité, à tout moment, en informant ses Utilisateurs sur cette page et éventuellement dans cette Application ou – pour autant que cela soit techniquement et légalement possible – en envoyant une notification aux Utilisateurs par l’intermédiaire des coordonnées disponibles pour le Propriétaire. Il est fortement recommandé de consulter cette page fréquemment, en se référant à la date de la dernière modification indiquée en bas. Si les modifications influencent les activités de traitement effectuées sur la base du consentement de l’Utilisateur, le Propriétaire doit recueillir un nouveau consentement de l’Utilisateur lorsque nécessaire.` }</p>



                        <h4 className={ classes.textTitle }>{ `Définitions et références légales` }</h4>
                        <ul>
                            <li className={ classes.textListing }><strong>{ `Données personnelles (ou Données) - ` }</strong>{ `Toute information qui, directement, indirectement ou en relation avec d’autres informations – y compris un numéro d’identification personnel – permet l’identification ou l’identifiabilité d’une personne physique.` }</li>
                            <li className={ classes.textListing }><strong>{ `Données d'utilisation - ` }</strong>{ `Les informations collectées automatiquement par cette Application (ou par des services tiers employés par cette Application), qui peuvent inclure les adresses IP ou les noms de domaines des ordinateurs utilisés par les Utilisateurs qui utilisent cette Application, les adresses URI (Uniform Resource Identifier ou identifiant uniforme de ressource), l’heure de la demande, la méthode utilisée pour soumettre la demande au serveur, la taille du fichier reçu en réponse, le code numérique indiquant le statut de la réponse du serveur (résultat favorable, erreur, etc.), le pays d’origine, les caractéristiques du navigateur et du système d’exploitation utilisés par l’Utilisateur, les différents détails relatifs au temps par visite (p. ex. temps passé sur chaque page dans l’Application) et les détails relatifs au chemin suivi dans l’Application avec une référence spéciale à la séquence des pages visitées, et d’autres paramètres concernant le système d’exploitation ou l’environnement informatique de l’Utilisateur.` }</li>
                            <li className={ classes.textListing }><strong>{ `Utilisateur - ` }</strong>{ `La personne utilisant cette Application qui, sauf indication contraire, correspond à la Personne concernée.` }</li>
                            <li className={ classes.textListing }><strong>{ `Personne concernée - ` }</strong>{ `La personne physique à laquelle les Données personnelles font référence.` }</li>
                            <li className={ classes.textListing }><strong>{ `Sous-traitant (ou Responsable des données) - ` }</strong>{ `La personne physique ou morale, l’autorité publique, l’institution ou tout autre organisme qui traite les Données personnelles pour le compte du Responsable du traitement, tel que décrit dans la présente politique de confidentialité.` }</li>
                            <li className={ classes.textListing }><strong>{ `Responsable du traitement (ou Propriétaire) - ` }</strong>{ `La personne physique ou morale, l’autorité publique, l’institution ou toute autre organisme qui, seul ou conjointement avec d’autres, détermine les finalités et les moyens du traitement de Données personnelles, y compris les mesures de sécurité concernant le fonctionnement et l’utilisation de cette Application. Sauf mention contraire, le Responsable du traitement est le Propriétaire de cette Application.` }</li>
                            <li className={ classes.textListing }><strong>{ `Cette Application - ` }</strong>{ `Les moyens par lesquels les Données personnelles de l’Utilisateur sont collectées et traitées.` }</li>
                            <li className={ classes.textListing }><strong>{ `Service - ` }</strong>{ `Le service fourni par cette Application comme décrit dans les conditions s’y rapportant (le cas échéant) et sur ce site/cette application.` }</li>
                            <li className={ classes.textListing }><strong>{ `Union Européenne (ou UE) - ` }</strong>{ `Sauf indication contraire, toutes les références faites dans le présent document à l’Union européenne incluent tous les États membres actuels de l’Union européenne et de l’Espace économique européen.` }</li>
                            <li className={ classes.textListing }><strong>{ `Cookies - ` }</strong>{ `Petits ensembles de données stockés dans l’appareil de l’Utilisateur.` }</li>
                        </ul>



                        <h4 className={ classes.textTitle }>{ `Informations légales` }</h4>
                        <p className={ classes.textParagraph }>{ `La présente politique de confidentialité a été préparée en exécution des dispositions de plusieurs législations, notamment de l’article 13/14 du règlement européen 2016/679 (règlement général sur la protection des données). Cette politique de confidentialité concerne uniquement cette Application, sauf indication contraire dans le présent document.` }</p>



                    </div>
                </article>

            </div>
        </section>
    )
}
