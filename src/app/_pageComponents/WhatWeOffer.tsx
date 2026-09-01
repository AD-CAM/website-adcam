'use client'
/* Library Imports */
import { makeStyles } from 'tss-react/mui'
/* Utils & Data Imports */
import { PledgeInfo } from '../_types/dataFiles'
const pledges: PledgeInfo[] = require('../_data/ourPledges.json')
const services: PledgeInfo[] = require('../_data/ourServices.json')
/* Components Imports */
import { SectionTitle } from '../_components/SectionTitle'
import { PledgeCard } from '../_components/PledgeCard'




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



interface WhatWeOfferProps {
    sectionType: string;
}



export default function WhatWeOffer({ sectionType }: WhatWeOfferProps) {
    const { classes } = useStyles()

    return (
        <section className={ classes.root }>
            <div className={ classes.subRoot }>
                {
                    sectionType === "ourPledges" &&
                            <>
                                <div className={ classes.titleRoot }>
                                    <SectionTitle text={ "Nos engagements" } />
                                </div>

                                <div className={ classes.articlesRoot }>
                                    {
                                        pledges.map((pledge, index) => {
                                            return (
                                                <PledgeCard key={ index } icon={ pledge.icon } title={ pledge.title } text={ pledge.text } />
                                            )
                                        })
                                    }
                                </div>
                            </>
                }
                {
                    sectionType === "ourServices" &&
                            <>
                                <div className={ classes.titleRoot }>
                                    <SectionTitle text={ "Nos services" } />
                                </div>

                                <div className={ classes.articlesRoot }>
                                    {
                                        services.map((service, index) => {
                                            return (
                                                <PledgeCard key={ index } icon={ service.icon } title={ service.title } text={ service.text } />
                                            )
                                        })
                                    }
                                </div>
                            </>
                }
            </div>
        </section>
    )
}
