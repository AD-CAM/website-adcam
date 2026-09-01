'use client'
/* Library Imports */
import { makeStyles } from 'tss-react/mui'
/* Utils & Data Imports */
import { PledgeInfo } from '@/app/_types/dataFiles'
const perks: PledgeInfo[] = require('../_pageData/perksList.json')
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
            justifyContent: "space-between",

            paddingTop: theme.spacing(3),
            paddingBottom: theme.spacing(6),

            [theme.breakpoints.down('sm')]: {
                alignItems: "center",
                flexDirection: "column",
            },
            [theme.breakpoints.up('sm')]: {
                flexWrap: "wrap",
            },
            [theme.breakpoints.up('lg')]: {
                alignItems: "flex-start",
                flexDirection: "row",
            },
        },
    }
})



export default function PerksSection() {
    const { classes } = useStyles()

    return (
        <section className={ classes.root }>
            <div className={ classes.subRoot }>
                <div className={ classes.titleRoot }>
                    <SectionTitle text={ "Pourquoi AD CAM" } />
                </div>

                <div className={ classes.articlesRoot }>
                    {
                        perks.map((perk, index) => {
                            return (
                                <PledgeCard key={ index } icon={ perk.icon } title={ perk.title } text={ perk.text } />
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}
