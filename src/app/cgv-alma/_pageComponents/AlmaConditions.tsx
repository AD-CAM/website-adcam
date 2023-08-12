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

        },
        text: {

        },
        textItem: {

        },
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
                            <li className={ classes.textItem }></li>
                            <li className={ classes.textItem }></li>
                            <li className={ classes.textItem }></li>
                            <li className={ classes.textItem }></li>
                            <li className={ classes.textItem }></li>
                            <li className={ classes.textItem }></li>
                            <li className={ classes.textItem }></li>
                            <li className={ classes.textItem }></li>
                            <li className={ classes.textItem }></li>
                            <li className={ classes.textItem }></li>
                            <li className={ classes.textItem }></li>
                            <li className={ classes.textItem }></li>
                            <li className={ classes.textItem }></li>
                        </ol>
                    </div>
                </article>

            </div>
        </section>
    )
}
