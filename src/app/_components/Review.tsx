'use client'
/* Assets Imports */
import adCamHeaderLogo from "/public/ad-cam_logo-title_nobg.png"
/* Utils & Data Imports */
import { ReviewInfo } from "../_types/dataFiles"
const reviewList: ReviewInfo[] = require("../_data/reviewList.json")
/* Library Imports */
import { makeStyles } from 'tss-react/mui'
/* Components Imports */




const useStyles = makeStyles()((theme) => {
    return {
        root: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",

            position: "relative",
            

            width: "100%",
            height: theme.spacing(12),

			boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.37)",
            background: "linear-gradient(350deg, rgba(37,16,5,0.1) 0%, rgba(136,37,16,0.2) 35%, rgba(179,39,36,0.25) 63%, rgba(255,23,0,0.3) 100%)",
            backgroundColor: "#FFF",
            backdropFilter: "blur(2px)",

            [theme.breakpoints.down('sm')]: {
                position: "fixed",
                top: "0",
                left: "0",
                zIndex: 9999,

                marginTop: theme.spacing(8),
            },
            [theme.breakpoints.up('sm')]: {
                position: "relative",
                marginTop: theme.spacing(5),

                zIndex: 4,
            },
        },
        headerContent: {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",

            height: "100%",
            width: "100%",
            maxWidth: "1450px",

            [theme.breakpoints.down('sm')]: {
                marginLeft: theme.spacing(2),
                marginRight: theme.spacing(2),
            },
            [theme.breakpoints.up('sm')]: {
                marginLeft: theme.spacing(6),
                marginRight: theme.spacing(6),
            },
        },
        logoRoot: {
            height: "60%",
        },
        logoImage: {
            height: "100%",
            width: "auto",
        },
        buttonsRoot: {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",

            width: "250px",
        },
    }
})

interface HeaderProps {
    activePage: string;
}



export default function Header({ activePage }: HeaderProps) {
    const { classes } = useStyles()

    const theme = useTheme()
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'))



    return (      
        
    )
}