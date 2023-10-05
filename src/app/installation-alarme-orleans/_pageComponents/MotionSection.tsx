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
                                alt={ "Détecteur de mouvement AJAX" }
                                isTop={ false }
                                tag={ "Ajax Security" }
                                boldTitle={ "" }
                                regularTitle={ "Détecteurs de mouvement qui ne répondent qu'aux menaces réelles" }
                                text={ [
                                    {
                                        type: "regular",
                                        text: "Les détecteurs de mouvement sans fil et filaires Ajax détectent les intrus dès leurs premiers pas, que ce soit à l'extérieur ou à l'intérieur. Lorsqu'un intrus pénètre dans le champ de vision des capteurs PIR, le détecteur analyse le rayonnement thermique de son corps, si le détecteur est sûr qu'il s'agit d'un humain il déclenche une alarme. Tout se passe en moins d'une seconde. Les détecteurs de mouvement Ajax filaires et sans fil sont tous deux disponibles dans la gamme. Selon le type de capteur, ils peuvent être installés à l'intérieur comme à l'extérieur."
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
