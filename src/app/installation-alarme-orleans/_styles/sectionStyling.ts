import { makeStyles } from 'tss-react/mui'



const useStyles = makeStyles()((theme) => {
    return {
        root: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",

            boxSizing: "border-box",

            width: "100%",

            boxShadow: "0px -50px 25px -50px rgba(0, 0, 0, 0.3)",
        },
        subRoot: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",

            boxSizing: "border-box",

            

            [theme.breakpoints.down('lg')]: {
                width: "1100px",
                maxWidth: "90%",
            },
            [theme.breakpoints.up('lg')]: {
                width: "100%",
                maxWidth: "1100px",
            },
        },



        contactUsRoot: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",

            boxSizing: "border-box",

            width: "100%",
            height: "auto",
            marginTop: "20px",
            marginBottom: "-40px",

            overflow: "hidden",

            backgroundColor: "rgba(20, 20, 20, 1)",
        },
        contactUsSubRoot: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",

            boxSizing: "border-box",
            
            width: "100%",
            height: "100%",
            maxWidth: "1100px",

            paddingBottom: theme.spacing(6),
        },
        contactUsText: {
            position: "relative",

            boxSizing: "border-box",

            padding: theme.spacing(6),
            paddingLeft: "0",
            margin: 0,

            [theme.breakpoints.down('sm')]: {
                padding: theme.spacing(4),
                paddingTop: theme.spacing(6),
            },
        },
        contactUsTitle: {
            boxSizing: "border-box",

            padding: 0,
            margin: 0,

            fontSize: theme.typography.pxToRem(36),
            fontWeight: 400,

            color: "rgba(252, 105, 105, 1)",

            [theme.breakpoints.down('sm')]: {
                paddingBottom: theme.spacing(4),
                fontSize: theme.typography.pxToRem(26),
            },
        },
        contactUsSubTitle: {
            fontWeight: 500,

            color: "#F5F5F5",

            [theme.breakpoints.down('sm')]: {
                fontSize: theme.typography.pxToRem(16),
            },
        }
    }
})



export default useStyles