'use client'
/* Library Imports */
import { makeStyles } from 'tss-react/mui'
/* Components Imports */
import Link from 'next/link'
import GoToButton from '../_components/GoToButton'



const useStyles = makeStyles()((theme) => {
    return {
        root: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",

            width: "100%",
            height: "90vh",

            background: "linear-gradient(150deg, rgba(3,0,0,1) 0%, rgba(69,16,16,1) 37%, rgba(126,85,85,1) 75%, rgba(154,143,143,1) 100%)",
        },
        banner: {
            borderRadius: theme.spacing(2),

			boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.37)",
            background: "linear-gradient(350deg, rgba(37,16,5,0.1) 0%, rgba(136,37,16,0.2) 35%, rgba(179,39,36,0.25) 63%, rgba(255,23,0,0.3) 100%)",
            backdropFilter: "blur(4px)",
        },
        bannerTitle: {

        },
        bannerSubText: {

        },
        buttonsContainer: {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",

            width: "100%",
        }
    }
})



export default function HomeBanner() {
    const { classes } = useStyles()

    return (      
        <section className={ classes.root }>
            <div className={ classes.banner }>

                <h1 className={ classes.bannerTitle }>
                    <Link href="/installation-video-surveillance-orleans">
                        { `INSTALLATEUR D'ALARME ET VIDÉO SURVEILLANCE À ORLÉANS` }
                    </Link>
                </h1>

                <p className={ classes.bannerSubText }>{ `Pour avoir un oeil partout, tout le temps !` }</p>

                <div className={ classes.buttonsContainer }>
                    <GoToButton text={"ALARME"} link={"/installation-alarme-orleans"} description={"Renseignez-vous sur les installations d'alarme par AD CAM"} />
                    <GoToButton text={"VIDÉO SURVEILLANCE"} link={"/installation-video-surveillance-orleans"} description={"Renseignez-vous sur les installations de vidéo surveillance par AD CAM"} />
                </div>

            </div>
        </section>
    )
}
