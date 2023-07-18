'use client'
/* Library Imports */
import { makeStyles } from 'tss-react/mui'
import { motion, Variants } from 'framer-motion'
/* Utils & Data Imports */
import { PledgeInfo } from '../_types/dataFiles'
const pledges: PledgeInfo[] = require('../_data/ourPledges.json')
const services: PledgeInfo[] = require('../_data/ourServices.json')
/* Components Imports */
import SectionTitle from '../_components/SectionTitle'
/* Icons Imports */
import { PiSealCheckBold } from 'react-icons/pi'
import { FaRegClock, FaRegThumbsUp, FaPencilRuler, FaCog, FaUserFriends, FaTools } from 'react-icons/fa'
import { FaPeopleGroup } from 'react-icons/fa6'




const useStyles = makeStyles()((theme) => {
    return {
        root: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",

            width: "100%",

            paddingTop: theme.spacing(10),
        },
        subRoot: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",

            width: "100%",
            maxWidth: "1450px",
        },
        titleRoot: {
            width: "100%",
            maxWidth: "864px",
        },
        articlesRoot: {
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",

            paddingTop: theme.spacing(3),
        },
        cardRoot: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",

            color: "#C80404",
            maxWidth: "20%",
            height: "100%",

            fontSize: theme.typography.pxToRem(56),
        },
        cardSubRoot: {
            marginTop: theme.spacing(2),

            color: "rgba(41, 41, 41, 1)",
        },
        cardTitle: {
            fontWeight: 600,
            fontSize: theme.typography.pxToRem(22),
        },
        cardText: {
            fontWeight: 500,
            fontSize: theme.typography.pxToRem(14),
        }
    }
})



interface IconProps {
    icon: string;
}

interface PledgeCardProps {
    icon: string;
    title: string;
    text: string;
}

interface WhatWeOfferProps {
    sectionType: string;
}

const Icon = ({ icon }: IconProps) => {
    switch(icon) {
        default :
            break
        case 'quality' :
            return <PiSealCheckBold />
        case 'speed' :
            return <FaRegClock />
        case 'trust' :
            return <FaPeopleGroup />
        case 'continuity' :
            return <FaRegThumbsUp />
        case 'study' :
            return <FaPencilRuler />
        case 'installation' :
            return <FaCog />
        case 'aid' :
            return <FaUserFriends />
        case 'maintenance' :
            return <FaTools />
    }
}



function PledgeCard({ icon, title, text }: PledgeCardProps) {
    const { classes } = useStyles()

    return (      
        <article className={ classes.cardRoot }>
            <Icon icon={ icon } />
            <div className={ classes.cardSubRoot }>
                <h2 className={ classes.cardTitle }>{ title }</h2>
                <p className={ classes.cardText }>{ text }</p>
            </div>
        </article>
    )
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