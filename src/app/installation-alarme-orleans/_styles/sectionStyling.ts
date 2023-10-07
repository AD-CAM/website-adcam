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

            width: "100%",
            maxWidth: "1100px",
        },
        youtubeContainer: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",

            marginTop: theme.spacing(6),

            [theme.breakpoints.down('sm')]: {
                width: "90%",
            },
            [theme.breakpoints.up('sm')]: {
                width: "1100px",
                maxWidth: "90%",
            },
        },

        

        contactUsArea: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",

            marginTop: theme.spacing(6),

            [theme.breakpoints.down('sm')]: {
                maxWidth: "90%",
                marginBottom: theme.spacing(6),
            },
            [theme.breakpoints.up('sm')]: {
                maxWidth: "1050px",
                marginBottom: theme.spacing(4),
            },
        },
        contactUsTitle: {
            fontWeight: 500,
            fontSize: theme.typography.pxToRem(18),
        },
    }
})



export default useStyles