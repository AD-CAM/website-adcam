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
                maxWidth: "90%",
            },
            [theme.breakpoints.up('sm')]: {
                width: "100%",   
            },
        },
        subTitleRoot: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        },
        subTitle: {
            fontWeight: 500,
            fontSize: theme.typography.pxToRem(24),
        },
        almaTitle: {
            maxHeight: "32px",

            fill: "rgba(250, 80, 34, 1)"
        },
        textRoot: {
            marginTop: theme.spacing(6),
            marginBottom: theme.spacing(6),
        },
        text: {

        },
        textItem: {
            marginBottom: theme.spacing(2),

            '&::marker': {
                fontWeight: "bold",
            }
        },
        almaLink: {
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



export default function AlmaConditions() {
    const { classes } = useStyles()

    return (      
        <section className={ classes.root }>
            <div className={ classes.subRoot }>

                <article className={ classes.mainArticle }>
                    <SectionTitle text={ "CGV Alma" } />
                    <div className={ classes.subTitleRoot }>
                        <h3 className={ classes.subTitle }>{ `Paiement en 2, 3 ou 4 fois avec ` }</h3>
                        <a className={ classes.almaTitle } href="https://almapay.com/fr-FR">
                            <svg width="113" height="24" viewBox="0 0 113 32" xmlns="http://www.w3.org/2000/svg">
                                <path d="M100.319 25.9642C96.8349 25.9642 94.0085 23.0028 94.0085 19.3442C94.0085 15.6857 96.8349 12.7243 100.319 12.7243C103.803 12.7243 106.626 15.6898 106.626 19.3402C106.626 22.9907 103.799 25.9602 100.319 25.9602V25.9642ZM106.626 7.29287V10.6532C105.709 9.41914 104.521 8.4179 103.155 7.72898C101.789 7.04006 100.283 6.68243 98.7564 6.68446C92.4897 6.68446 87.6342 12.3536 87.6342 19.3402C87.6342 26.3269 92.4857 32 98.7564 32C100.392 31.9993 102.002 31.5885 103.442 30.8045C104.882 30.0204 106.108 28.8876 107.008 27.5074V31.3956H112.988V7.2969L106.626 7.29287ZM33.5859 0.61244H39.9642V31.3956H33.5859V0.61244ZM47.2953 17.7285C47.2953 11.1045 51.3176 6.68446 56.8947 6.68446C60.3549 6.68446 63.0856 8.23974 64.736 10.8869C66.3864 8.23974 69.1211 6.68446 72.5814 6.68446C78.1624 6.68446 82.1807 11.1166 82.1807 17.7285V31.3956H75.8024V17.0355C75.8024 14.4528 74.1082 12.7645 71.8638 12.7645C69.6194 12.7645 67.9252 14.4528 67.9252 17.0355V31.3956H61.5468V17.0355C61.5468 14.4528 59.8526 12.7645 57.6082 12.7645C55.3639 12.7645 53.6696 14.4528 53.6696 17.0355V31.3956H47.2913L47.2953 17.7285ZM22.0371 7.54671C20.5262 1.82926 17.3371 0 14.2954 0C11.2538 0 8.0646 1.82926 6.55772 7.54671L0 31.3956H6.46204C6.89284 29.6241 7.89888 28.0497 9.31931 26.9242C10.7397 25.7987 12.4925 25.187 14.2974 25.187C16.1023 25.187 17.8551 25.7987 19.2755 26.9242C20.6959 28.0497 21.702 29.6241 22.1328 31.3956H28.5948L22.0371 7.54671ZM14.2954 19.6343C12.3361 19.6244 10.4453 20.3626 9.00141 21.7013L12.7008 7.82473C13.0556 6.49912 13.5779 6.07605 14.2954 6.07605C15.013 6.07605 15.5392 6.47897 15.89 7.82473L19.5934 21.7054C18.1487 20.3649 16.2565 19.6253 14.2954 19.6343Z">
                                </path>
                            </svg>
                        </a>
                    </div>
                    <div className={ classes.textRoot }>
                        <ol className={ classes.text }>
                            <li className={ classes.textItem }>{ `Le Vendeur propose à ses Clients le service de crédit d’Alma pour le règlement de leurs achats et l’exécution du paiement. Cela est conditionné par l’acceptation par le Client des CGU ou du contrat de crédit proposé par Alma.` }</li>
                            <li className={ classes.textItem }>{ `Tout refus d’octroi de crédit par Alma pour une commande pourra entraîner l’annulation de celle-ci.` }</li>
                            <li className={ classes.textItem }>{ `Toute résiliation des CGV qui lient le Client et Le Vendeur entraîne la résiliation des CGU ou du contrat de crédit entre Alma et le Client.` }</li>
                            <li className={ classes.textItem }>{ `Le paiement en trois / quatre fois est disponible via notre partenaire Alma. La sécurisation des paiements est assurée par Alma et ses prestataires. Tous les paiements sont protégés par le 3D Secure.` }</li>
                            <li className={ classes.textItem }>
                                <strong>{ `Montant des achats :` }</strong>
                                { `Seuls les achats entre 50€ et 2000€ ont éligibles au paiement avec Alma.` }
                            </li>
                            <li className={ classes.textItem }>
                                <strong>{ `Frais :` }</strong>
                                { ` En payant en plusieurs fois avec Alma le Client ne paye pas des frais, sauf dans les cas suivants :` }

                                <ul>
                                    <li className={ classes.textItem }>{ `Pour le paiement en 2 fois = 0,71% frais client TTC et 3,61% TTC pour le professionnel)` }</li>
                                    <li className={ classes.textItem }>{ `Pour le paiement en 3 fois = 1,46% frais client TTC et 3,10% TTC pour le professionnel)` }</li>
                                    <li className={ classes.textItem }>{ `Pour le paiement en 4 fois = 2,21% frais client TTC et 3,55% TTC pour le professionnel)` }</li>
                                </ul>
                            </li>
                            <li className={ classes.textItem }>{ `Alma est gestionnaire de télépaiement et délivre un certificat électronique qui vaudra preuve du montant et de la date de la transaction conformément aux dispositions des articles 1316 et suivants du code civil.` }</li>
                            <li className={ classes.textItem }>
                                <strong>{ `Résiliation :` }</strong>
                                { ` Toute résiliation des CGV qui lient le Vendeur et le client, entraîne la résiliation des CGU ente Alma et le client.` }
                            </li>
                            <li className={ classes.textItem }>{ `Le montant est payé par un crédit octroyé par Alma SAS inscrit sur le REGAFI sous le numéro 90876.` }</li>
                            <li className={ classes.textItem }>
                                <strong>{ `Paiement :` }</strong>
                                { ` Le paiement par crédit est disponible pour le règlement de leurs achats via notre partenaire Alma, l’exécution du paiement est conditionnée par la signature du contrat de crédit proposé par Alma. Le Vendeur accepte par anticipation l’octroi de crédit conclu entre Alma et le client conformément à l’article L312-46 du code de la consommation. Si Alma accepte d’octroyer le crédit au client, le montant sera payé par crédit conformément à l’article L312-45 du code de la consommation. Tout refus par Alma d’octroyer un crédit pour une commande pourra entraîner l’annulation de celle-ci, sauf si le client accepte de payer comptant. Toute résiliation des CGV qui lient le Vendeur et le client, entraîne la résiliation du contrat de crédit ente Alma et le client. En cas de rétractation, les frais et intérêts des Clients, leur seront remboursés conformément à la réglementation.` }
                            </li>
                            <li className={ classes.textItem }>
                                <strong>{ `Sécurité :` }</strong>
                                { ` La sécurisation des paiements est assurée par Alma et ses prestataires. Tous les paiements sont protégés par le 3D Secure. Alma est gestionnaire de télépaiement et délivre un certificat électronique qui vaudra preuve du montant et de la date de la transaction conformément aux dispositions des articles 1316 et suivants du code civil.` }
                            </li>
                            <li className={ classes.textItem }>
                                <strong>{ `Cas particulier :` }</strong>
                                { ` En cas de contrat de vente ou de prestation de services à exécution successive ou livré dans des délais assez longs, le Vendeur doit préciser dans ses CGV le moment de début de la livraison ou de la fourniture, pour plus de précisions vous pouvez contacter les équipes alma sur support@getalma.eu.` }
                            </li>
                            <li className={ classes.textItem }><a href={ `https://help.almapay.com/` } className={ classes.almaLink }>{ `Page de réclamation du site Alma` }</a></li>
                        </ol>
                    </div>
                </article>

            </div>
        </section>
    )
}
