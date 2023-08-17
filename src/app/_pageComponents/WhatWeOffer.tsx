'use client'
/* Library Imports */
import { makeStyles } from 'tss-react/mui'
import { motion, Variants } from 'framer-motion'
/* Utils & Data Imports */
import { PledgeInfo } from '../_types/dataFiles'
const pledges: PledgeInfo[] = require('../_data/ourPledges.json')
const services: PledgeInfo[] = require('../_data/ourServices.json')
/* Components Imports */
import { SectionTitle } from '../_components/SectionTitle'
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
        cardRoot: {
            display: "flex",
            
            alignItems: "center",
            justifyContent: "center",

            color: "#C80404",
            height: "100%",

            fontSize: theme.typography.pxToRem(68),

            [theme.breakpoints.down('sm')]: {
                flexDirection: "row",
                justifyContent: "space-between",

                maxWidth: "90%",
                marginBottom: theme.spacing(8),
            },
            [theme.breakpoints.up('sm')]: {
                flexDirection: "column",

                maxWidth: "45%",     
            },
            [theme.breakpoints.up('lg')]: {
                flexDirection: "column",

                maxWidth: "20%",     
            },
        },
        cardSubRoot: {
            marginTop: theme.spacing(2),

            color: "rgba(41, 41, 41, 1)",

            [theme.breakpoints.down('sm')]: {
                width: "90%",
                paddingLeft: theme.spacing(4),
            },
            [theme.breakpoints.up('sm')]: {
                width: "auto",    
            },
        },
        cardTitle: {
            fontWeight: 600,
            fontSize: theme.typography.pxToRem(22),

            [theme.breakpoints.down('sm')]: {
            marginTop: "0",
            },
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
                <h3 className={ classes.cardTitle }>{ title }</h3>
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