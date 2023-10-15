'use client'
/* Library Imports */
import { makeStyles } from 'tss-react/mui'
import { motion, Variants } from 'framer-motion'
/* Components Imports */
import Link from 'next/link'
import { GoToButton } from '../_components/Button'
import ShiftingBackground from '../_components/ShiftingBackground'



const useStyles = makeStyles()((theme) => {
    return {
        root: {
            position: "relative",

            display: "flex",
            alignItems: "center",
            justifyContent: "center",

            width: "100%",
            height: "85vh",

            background: "linear-gradient(150deg, rgba(3,0,0,1) 0%, rgba(69,16,16,1) 37%, rgba(126,85,85,1) 75%, rgba(154,143,143,1) 100%)",

            [theme.breakpoints.down('sm')]: {
                marginTop: theme.spacing(12),
            },
            [theme.breakpoints.up('sm')]: {
                marginTop: "0",
            },
        },
        banner: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",

			boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.37)",
            background: "linear-gradient(350deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.6) 100%)",
            backdropFilter: "blur(4px)",

            padding: theme.spacing(4),

            [theme.breakpoints.down('sm')]: {
                borderRadius: "0",
            },
            [theme.breakpoints.up('sm')]: {
                borderRadius: theme.spacing(0.75),  
            },
        },
        bannerTitle: {
            margin: "0",

            color: "#C80404",
            

            [theme.breakpoints.down('sm')]: {
                fontSize: theme.typography.pxToRem(26),
            },
            [theme.breakpoints.up('sm')]: {
                fontSize: theme.typography.pxToRem(28), 
            },
            [theme.breakpoints.up('lg')]: {
                fontSize: theme.typography.pxToRem(40), 
            },
        },
        bannerSubTitle: {
            color: "rgba(18, 18, 18, 1)",

            fontWeight: 500,
            

            [theme.breakpoints.down('sm')]: {
                fontSize: theme.typography.pxToRem(18),
            },
            [theme.breakpoints.up('sm')]: {
                fontSize: theme.typography.pxToRem(18), 
            },
            [theme.breakpoints.up('lg')]: {
                fontSize: theme.typography.pxToRem(22), 
            },
        },
        bannerSubText: {
            marginTop: 0,

            fontSize: theme.typography.pxToRem(18),
        },
        buttonsContainer: {
            display: "flex",
            alignItems: "center",
        
            minWidth: "200px",
            
            [theme.breakpoints.down('sm')]: {
                justifyContent: "space-between",

                width: "100%",
            },
            [theme.breakpoints.up('sm')]: {
                justifyContent: "space-evenly",

                width: "65%",
            },
            [theme.breakpoints.up('lg')]: {
                justifyContent: "space-evenly",

                width: "40%",
            },
        }
    }
})

const bannerVariants: Variants = {
    rest: {
        opacity: 0,
        transform: "translateY(100px)",
    },
    loaded: {
        opacity: 1,
        transform: "translateY(0px)",
        transition: {
            type: "spring",
            duration: 0.8,
            opacity: {
                duration: 0.9,
            }
        }
    },
}



export default function HomeBanner() {
    const { classes } = useStyles()

    return (      
        <section className={ classes.root }>
            <ShiftingBackground />
            
            <motion.div className={ classes.banner } variants={ bannerVariants } initial="rest" animate="loaded">

                <h1 className={ classes.bannerTitle }>
                    <Link href="/installation-video-surveillance-orleans">
                        { `Installateur d'alarme et vidéo surveillance à Orléans` }
                    </Link>
                </h1>

                <h2 className={ classes.bannerSubTitle }>{ `Pour avoir un oeil partout, tout le temps !` }</h2>

                <div className={ classes.buttonsContainer }>
                    <GoToButton text={"Alarme"} link={"/installation-alarme-orleans"} description={"Renseignez-vous sur les installations d'alarme par AD CAM"} isOutside={ false }/>
                    <GoToButton text={"Vidéo surveillance"} link={"/installation-video-surveillance-orleans"} description={"Renseignez-vous sur les installations de vidéo surveillance par AD CAM"} isOutside={ false }/>
                </div>

            </motion.div>
        </section>
    )
}
