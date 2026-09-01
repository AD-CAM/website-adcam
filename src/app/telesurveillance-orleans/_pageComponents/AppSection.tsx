'use client'
/* Utils & Data Imports */
import { PledgeInfo } from '@/app/_types/dataFiles'
const features: PledgeInfo[] = require('../_pageData/appFeaturesList.json')
/* Library Imports */
import { makeStyles } from 'tss-react/mui'
/* Components Imports */
import { TechSheetTileContainer } from '@/app/_components/TechSheet'
import PhoneMockup from './PhoneMockup'
/* Icons Imports */
import { FaBell, FaPowerOff, FaHistory } from 'react-icons/fa'



const useStyles = makeStyles()((theme) => {
    return {
        root: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",

            boxSizing: "border-box",

            width: "100%",

            paddingTop: theme.spacing(10),
            paddingBottom: theme.spacing(10),
        },
        subRoot: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",

            boxSizing: "border-box",

            width: "100%",
            maxWidth: "1100px",

            [theme.breakpoints.down('lg')]: {
                maxWidth: "90%",
            },
        },
        intro: {
            boxSizing: "border-box",

            maxWidth: "700px",

            padding: theme.spacing(4),
            paddingBottom: 0,

            textAlign: "center",
        },
        title: {
            margin: 0,

            fontSize: theme.typography.pxToRem(36),
            fontWeight: 700,

            color: "#404040",

            [theme.breakpoints.down('sm')]: {
                fontSize: theme.typography.pxToRem(28),
            },
        },
        text: {
            fontWeight: 500,

            color: "#404040",
        },
        bento: {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",

            boxSizing: "border-box",

            width: "100%",
            maxWidth: "920px",

            marginTop: theme.spacing(6),

            [theme.breakpoints.down('lg')]: {
                flexDirection: "column",

                marginTop: theme.spacing(4),
            },
        },
        tile: {
            display: "flex",
            alignItems: "center",

            boxSizing: "border-box",

            width: "100%",

            padding: theme.spacing(3),

            borderRadius: "1rem",
            backgroundColor: "rgba(255, 255, 255, 1)",
            boxShadow: "4px 5px 19px -6px rgba(0, 0, 0, 0.6)",

            "&:not(:last-child)": {
                marginBottom: theme.spacing(2),
            },
        },
        tileIcon: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,

            marginRight: theme.spacing(2.5),

            color: "#C80404",
            fontSize: theme.typography.pxToRem(34),
        },
        tileTitle: {
            margin: 0,

            fontSize: theme.typography.pxToRem(18),
            fontWeight: 600,

            color: "#181818",
        },
        tileText: {
            margin: 0,
            marginTop: theme.spacing(0.5),

            fontSize: theme.typography.pxToRem(14),
            fontWeight: 500,

            color: "#404040",
        },
    }
})



interface IconProps {
    icon: string;
}

const Icon = ({ icon }: IconProps) => {
    switch(icon) {
        default :
            break
        case 'notifications' :
            return <FaBell />
        case 'remote' :
            return <FaPowerOff />
        case 'history' :
            return <FaHistory />
    }
}



function AppTile({ icon, title, text }: PledgeInfo) {
    const { classes } = useStyles()

    return (
        <div className={ classes.tile }>
            <span className={ classes.tileIcon }>
                <Icon icon={ icon } />
            </span>
            <div>
                <h3 className={ classes.tileTitle }>{ title }</h3>
                <p className={ classes.tileText }>{ text }</p>
            </div>
        </div>
    )
}



export default function AppSection() {
    const { classes } = useStyles()

    return (
        <section className={ classes.root }>
            <div className={ classes.subRoot }>
                <div className={ classes.intro }>
                    <h2 className={ classes.title }>Gardez le contrôle depuis votre poche</h2>
                    <p className={ classes.text }>
                        Recevez chaque événement en direct sur votre téléphone et gardez un oeil sur vos sites, où que vous soyez.
                    </p>
                </div>

                <div className={ classes.bento }>
                    <PhoneMockup />

                    <TechSheetTileContainer isVertical>
                        {
                            features.map((feature, index) => {
                                return (
                                    <AppTile key={ index } icon={ feature.icon } title={ feature.title } text={ feature.text } />
                                )
                            })
                        }
                    </TechSheetTileContainer>
                </div>
            </div>
        </section>
    )
}
