'use client'
/* Library Imports */
import { makeStyles } from 'tss-react/mui'
/* Icons Imports */
import { PiSealCheckBold } from 'react-icons/pi'
import { FaRegClock, FaRegThumbsUp, FaPencilRuler, FaCog, FaUserFriends, FaTools, FaUserSecret, FaVideo, FaFire, FaExclamationTriangle, FaShieldAlt, FaClipboardList, FaUnlock, FaEuroSign, FaHardHat, FaMapMarkerAlt } from 'react-icons/fa'
import { FaPeopleGroup } from 'react-icons/fa6'




const useStyles = makeStyles()((theme) => {
    return {
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
        case 'intrusion' :
            return <FaUserSecret />
        case 'video' :
            return <FaVideo />
        case 'fire' :
            return <FaFire />
        case 'technical-alert' :
            return <FaExclamationTriangle />
        case 'intervention' :
            return <FaShieldAlt />
        case 'report' :
            return <FaClipboardList />
        case 'no-engagement' :
            return <FaUnlock />
        case 'transparent-price' :
            return <FaEuroSign />
        case 'installer' :
            return <FaHardHat />
        case 'local-support' :
            return <FaMapMarkerAlt />
    }
}



export function PledgeCard({ icon, title, text }: PledgeCardProps) {
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
