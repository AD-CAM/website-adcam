'use client'
/* Library Imports */
import { makeStyles } from 'tss-react/mui'
/* Utils & Data Imports */
import { PledgeInfo } from '@/app/_types/dataFiles'
const protections: PledgeInfo[] = require('../_pageData/protectionsList.json')
/* Components Imports */
import { SectionTitle } from '@/app/_components/SectionTitle'
import { PledgeCard } from '@/app/_components/PledgeCard'




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
        articlesRoot: {
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "flex-start",

            gap: theme.spacing(4),
            paddingTop: theme.spacing(3),

            [theme.breakpoints.down('sm')]: {
                flexDirection: "column",
                alignItems: "center",
            },

            // The shared card fills its row at 20%; narrow it here so five sit in one row with real gaps.
            "& > article": {
                marginBottom: 0,

                [theme.breakpoints.up('lg')]: {
                    maxWidth: "17%",
                },
            },
        },
    }
})



export default function ProtectionsSection() {
    const { classes } = useStyles()

    return (
        <section className={ classes.root }>
            <div className={ classes.subRoot }>
                <div className={ classes.titleRoot }>
                    <SectionTitle text={ "Une protection complète" } />
                </div>

                <div className={ classes.articlesRoot }>
                    {
                        protections.map((protection, index) => {
                            return (
                                <PledgeCard key={ index } icon={ protection.icon } title={ protection.title } text={ protection.text } />
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}
