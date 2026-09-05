'use client'
/* Library Imports */
import { makeStyles } from 'tss-react/mui'
import { Variants, motion } from 'framer-motion'
/* Utils & Data Imports */
import { SiteStatusInfo } from '@/app/_types/dataFiles'
const sites: SiteStatusInfo[] = require('../_pageData/sitesList.json')
/* Icons Imports */
import { FaHome, FaWarehouse, FaChevronRight } from 'react-icons/fa'



const ARMED_COLOR = "rgba(200, 4, 4, 1)"
const DISARMED_COLOR = "rgba(46, 158, 91, 1)"



const listVariants: Variants = {
    rest: {},
    loaded: {
        transition: { staggerChildren: 0.2, delayChildren: 0.2 },
    },
}

const cardVariants: Variants = {
    rest: { opacity: 0, translateY: "20px" },
    loaded: { opacity: 1, translateY: "0px" },
}



const useStyles = makeStyles()((theme) => {
    return {
        frame: {
            boxSizing: "border-box",

            width: "300px",
            maxWidth: "80vw",

            padding: theme.spacing(1.5),

            borderRadius: theme.spacing(5),
            backgroundColor: "rgba(20, 20, 20, 1)",
            boxShadow: "0px 20px 40px rgba(0, 0, 0, 0.25)",
        },
        screen: {
            position: "relative",

            boxSizing: "border-box",

            width: "100%",
            height: "560px",

            padding: theme.spacing(2),
            paddingTop: theme.spacing(5),

            borderRadius: theme.spacing(3.5),
            backgroundColor: "rgba(240, 240, 240, 1)",

            overflow: "hidden",
        },
        notch: {
            position: "absolute",
            top: theme.spacing(1.5),
            left: "50%",
            transform: "translateX(-50%)",

            width: "90px",
            height: "22px",

            borderRadius: theme.spacing(2),
            backgroundColor: "rgba(20, 20, 20, 1)",
        },
        statusBar: {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",

            marginBottom: theme.spacing(2),

            color: "#404040",
            fontSize: theme.typography.pxToRem(13),
            fontWeight: 600,
        },
        header: {
            margin: 0,
            marginBottom: theme.spacing(2),

            color: "#181818",
            fontSize: theme.typography.pxToRem(22),
            fontWeight: 700,
        },
        card: {
            display: "flex",
            alignItems: "center",

            boxSizing: "border-box",

            width: "100%",

            marginBottom: theme.spacing(1.5),
            padding: theme.spacing(1.5),

            borderRadius: theme.spacing(2),
            backgroundColor: "rgba(255, 255, 255, 1)",
            boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.08)",
        },
        iconBadge: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,

            width: "42px",
            height: "42px",

            marginRight: theme.spacing(1.5),

            borderRadius: "50%",

            color: "#F5F5F5",
            fontSize: theme.typography.pxToRem(18),
        },
        cardBody: {
            flexGrow: 1,
            minWidth: 0,
        },
        site: {
            margin: 0,

            color: "#181818",
            fontSize: theme.typography.pxToRem(16),
            fontWeight: 700,
        },
        status: {
            margin: 0,
            marginTop: theme.spacing(0.25),

            fontSize: theme.typography.pxToRem(13),
            fontWeight: 600,
        },
        chevron: {
            display: "flex",
            alignItems: "center",
            flexShrink: 0,

            marginLeft: theme.spacing(1),

            color: "rgba(170, 170, 170, 1)",
            fontSize: theme.typography.pxToRem(15),
        },
    }
})



interface SiteIconProps {
    type: string;
}

const SiteIcon = ({ type }: SiteIconProps) => {
    switch(type) {
        default :
            break
        case 'house' :
            return <FaHome />
        case 'warehouse' :
            return <FaWarehouse />
    }
}



export default function PhoneMockup() {
    const { classes } = useStyles()

    return (
        <div className={ classes.frame }>
            <div className={ classes.screen }>
                <div className={ classes.notch }></div>

                <div className={ classes.statusBar }>
                    <span>9:41</span>
                    <span>AD CAM</span>
                </div>

                <h3 className={ classes.header }>Mes sites</h3>

                <motion.div
                            variants={ listVariants }
                            initial="rest"
                            whileInView="loaded"
                            viewport={{ once: true }}
                >
                    {
                        sites.map((entry, index) => {
                            const color = entry.armed ? ARMED_COLOR : DISARMED_COLOR
                            const label = entry.armed ? "Armé" : "Désarmé"

                            return (
                                <motion.article
                                            key={ index }
                                            className={ classes.card }

                                            variants={ cardVariants }
                                            transition={{ duration: 0.4 }}
                                >
                                    <span className={ classes.iconBadge } style={{ backgroundColor: color }}>
                                        <SiteIcon type={ entry.type } />
                                    </span>
                                    <div className={ classes.cardBody }>
                                        <h4 className={ classes.site }>{ entry.site }</h4>
                                        <p className={ classes.status } style={{ color }}>{ label }</p>
                                    </div>
                                    <span className={ classes.chevron }>
                                        <FaChevronRight />
                                    </span>
                                </motion.article>
                            )
                        })
                    }
                </motion.div>
            </div>
        </div>
    )
}
