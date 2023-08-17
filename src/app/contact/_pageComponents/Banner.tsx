'use client'
/* Types & Utils imports */
import { StaticImageData } from "next/image"
/* Library Imports */
import { makeStyles } from 'tss-react/mui'



const useStyles = makeStyles()((theme) => {
    return {
        root: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",

            width: "100%",
            height: "420px",

            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",

            [theme.breakpoints.down('sm')]: {
                marginTop: theme.spacing(20),
            },
            [theme.breakpoints.up('sm')]: {
                marginTop: 0,
            },
        },
        subRoot: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",

            height: "100%",
            width: "100%",

            backdropFilter: "blur(12px)",
        },
        imageHolder: {
            height: "100%",
            

            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",

            [theme.breakpoints.down('sm')]: {
                backgroundPositionX: "-100px",
            },
            [theme.breakpoints.down('md')]: {
                width: "100%",
            },
            [theme.breakpoints.up('md')]: {
                width: "50%",
            },
        }
    }
})

interface BannerProps {
    image: StaticImageData
}



export default function Banner({ image }: BannerProps) {
    const { classes } = useStyles()

    return (      
        <div className={ classes.root } style={{ backgroundImage: `url(${image.src})` }}>
            <div className={ classes.subRoot }>
                <div className={ classes.imageHolder } style={{ backgroundImage: `url(${image.src})` }}>

                </div>
            </div>
        </div>
    )
}