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
        rootSmaller: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",

            width: "100%",
            height: "250px",

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
                width: "100%",
                height: "40vw",
            },
            [theme.breakpoints.down('md')]: {
                width: "100%",
            },
            [theme.breakpoints.up('md')]: {
                width: "50%",
            },
        },
        imageHolderSmaller: {
            height: "100%",
            
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",

            [theme.breakpoints.down('sm')]: {
                width: "270px",
            },
            [theme.breakpoints.up('sm')]: {
                width: "450px",
            },
            [theme.breakpoints.up('md')]: {
                width: "500px",
            },
        }
    }
})

interface BannerProps {
    image: StaticImageData;
    isSmall: boolean;
    position: string;
}



export default function Banner({ image, isSmall, position }: BannerProps) {
    const { classes } = useStyles()

    return (      
        <div className={ isSmall ? classes.rootSmaller : classes.root } style={{ backgroundImage: `url(${image.src})` }}>
            <div className={ classes.subRoot }>

                <div    className={ isSmall ? classes.imageHolderSmaller : classes.imageHolder }
                        style={{ backgroundImage: `url(${image.src})`, backgroundPosition: position }}
                >

                </div>

            </div>
        </div>
    )
}