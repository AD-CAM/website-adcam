'use client'
/* Library Imports */
import { makeStyles } from 'tss-react/mui'
import { motion, Variants } from 'framer-motion'
/* Components Imports */
import SectionTitle from '../_components/SectionTitle'
/* Icons Imports */
import { PiSealCheckBold } from 'react-icons/pi'
import { FaRegClock, FaRegThumbsUp } from 'react-icons/fa'
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
        cardRoot: {

        },
        cardSubRoot: {

        },
        cardTitle: {

        },
        cardText: {

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



export default function OurPledge() {
    const { classes } = useStyles()

    return (      
        <section className={ classes.root }>
            <div className={ classes.subRoot }>
                <div className={ classes.titleRoot }>
                    <SectionTitle text={ "Nos engagements" } />
                </div>


            </div>
        </section>
    )
}