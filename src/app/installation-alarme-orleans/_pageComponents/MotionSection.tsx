'use client'
/* Data & Types Imports */
const techSheetsListInside = require("../_pageData/motionInsideTechSheetsList.json")
const techSheetsListOutside = require("../_pageData/motionOutsideTechSheetsList.json")
/* Assets Imports */
import ajaxBanner from "../../../../public/ajax/banner-ajax_motion.png"
/* Library Imports */
import { makeStyles } from 'tss-react/mui'
import YouTube from "react-youtube"
/* Components Imports */
import { TechSheetBanner, TechSheetList, TechSheetText } from '@/app/_components/TechSheet'
import { TechSheetData } from '@/app/_types/dataFiles'



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

            width: "80%",
        },
        youtubeContainer: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",

            marginTop: theme.spacing(6),

            [theme.breakpoints.down('sm')]: {
                width: "90%",
            },
            [theme.breakpoints.up('sm')]: {
                width: "1100px",
                maxWidth: "90%",
            },
        },
    }
})



export default function MotionSection() {
    const { classes } = useStyles()



    return (      
        <section className={ classes.root }>
            <TechSheetBanner
                                image={ ajaxBanner }
                                alt={ "Détecteur de fuite d'eau AJAX" }
                                isTop={ true }
                                tag={ "Ajax Security" }
                                boldTitle={ "Détecteurs de fuites d'eau" }
                                regularTitle={ " sans fil" }
                                text={ [
                                    {
                                        type: "regular",
                                        text: "Les détecteurs de fuites d'eau sans fil Ajax préviennent les inondations dès les premières gouttes. Dès que de l'eau s'infiltre dans l'une des quatre paires de capteurs, le système déclenche une alarme. Une notification est envoyée aux utilisateurs et au centre de télésurveillance. En programmant une électrovanne via le dispositif Relay, le système de sécurité Ajax peut couper l'eau automatiquement jusqu'à l'arrivée du plombier."
                                    }
                                ] }
            />

            <div className={ classes.subRoot }>
                {
                    techSheetsListInside.map((techSheetData: TechSheetData, index: number) => {
                        return <TechSheetList 
                                            key={ index }
                                            image={ techSheetData.image }
                                            alt={ techSheetData.alt }
                                            isLeft={ techSheetData.isLeft }
                                            boldTitle={ techSheetData.boldTitle }
                                            regularTitle={ techSheetData.regularTitle }
                                            subTitle={ techSheetData.subTitle }
                                            techSheet={ techSheetData.techSheet }
                                />
                    })
                }

                {
                    techSheetsListOutside.map((techSheetData: TechSheetData, index: number) => {
                        return <TechSheetList 
                                            key={ index }
                                            image={ techSheetData.image }
                                            alt={ techSheetData.alt }
                                            isLeft={ techSheetData.isLeft }
                                            boldTitle={ techSheetData.boldTitle }
                                            regularTitle={ techSheetData.regularTitle }
                                            subTitle={ techSheetData.subTitle }
                                            techSheet={ techSheetData.techSheet }
                                />
                    })
                }
            </div>
        </section>
    )
}
