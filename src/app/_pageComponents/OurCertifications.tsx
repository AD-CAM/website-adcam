'use client'
/* Library Imports */
import { makeStyles } from 'tss-react/mui'
/* Data & Types Imports */
import { CertificationData } from '../_types/dataFiles'
const certifications: CertificationData[] = require("../_data/ourCertifications.json")
/* Components Imports */
import { SectionTitle } from '../_components/SectionTitle'
/* Icons Imports */
import { PiCertificateBold } from 'react-icons/pi'




const useStyles = makeStyles()((theme) => {
    return {
        root: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",

            width: "100%",

            [theme.breakpoints.down('sm')]: {
                paddingTop: theme.spacing(2),
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
            maxWidth: "1450px",

            [theme.breakpoints.up('sm')]: {
                paddingLeft: theme.spacing(6),
                paddingRight: theme.spacing(6),
            },
        },
        titleRoot: {
            width: "100%",

            [theme.breakpoints.down('sm')]: {
                maxWidth: "90%",
            },
            [theme.breakpoints.up('sm')]: {
                maxWidth: "864px",
            },
        },
        cardsRoot: {
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: theme.spacing(2),

            width: "100%",

            paddingTop: theme.spacing(3),

            [theme.breakpoints.down('sm')]: {
                flexDirection: "column",
                alignItems: "center",
            },
        },
        cardRoot: {
            display: "flex",
            flexDirection: "row",
            alignItems: "center",

            padding: `${theme.spacing(1.5)} ${theme.spacing(2.5)}`,

            borderRadius: "8px",
            border: "2px solid rgba(200, 4, 4, 0.2)",

            textDecoration: "none",
            color: "rgba(41, 41, 41, 1)",

            transition: "border-color 0.3s ease",

            "&:hover": {
                borderColor: "rgba(200, 4, 4, 1)",
            },

            [theme.breakpoints.down('sm')]: {
                width: "85%",
            },
        },
        cardIcon: {
            display: "flex",
            alignItems: "center",

            marginRight: theme.spacing(2),

            color: "#C80404",
            fontSize: theme.typography.pxToRem(32),
        },
        cardText: {
            display: "flex",
            flexDirection: "column",
        },
        cardName: {
            margin: 0,

            fontWeight: 600,
            fontSize: theme.typography.pxToRem(15),
        },
        cardOrganism: {
            margin: 0,
            marginTop: theme.spacing(0.5),

            fontWeight: 500,
            fontSize: theme.typography.pxToRem(13),
            color: "rgba(41, 41, 41, 0.7)",
        },
    }
})



function CertificationCard({ name, file, organism }: CertificationData) {
    const { classes } = useStyles()

    return (
        <a href={ file } target="_blank" rel="noopener noreferrer" className={ classes.cardRoot }>
            <span className={ classes.cardIcon }>
                <PiCertificateBold />
            </span>
            <div className={ classes.cardText }>
                <h3 className={ classes.cardName }>{ name }</h3>
                <p className={ classes.cardOrganism }>{ organism }</p>
            </div>
        </a>
    )
}



export default function OurCertifications() {
    const { classes } = useStyles()

    return (
        <section className={ classes.root }>
            <div className={ classes.subRoot }>
                <div className={ classes.titleRoot }>
                    <SectionTitle text={ "Nos certifications" } />
                </div>

                <div className={ classes.cardsRoot }>
                    {
                        certifications.map((certification, index) => {
                            return (
                                <CertificationCard key={ index } name={ certification.name } file={ certification.file } organism={ certification.organism } />
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}
