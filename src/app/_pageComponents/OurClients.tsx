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
    }
})



export default function OurClients() {
    const { classes } = useStyles()

    return (      
        <section className={ classes.root }>
            <div className={ classes.subRoot }>
                <div className={ classes.titleRoot }>
                    <SectionTitle text={ "Nos clients" } />
                </div>
            </div>
        </section>
    )
}