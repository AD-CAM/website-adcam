'use client'
/* Library Imports */
import { makeStyles } from 'tss-react/mui'



const useStyles = makeStyles()((theme) => {
    return {
        root: {
            display: "flex",
            alignItems: "center",

            marginTop: theme.spacing(5),
            marginBottom: theme.spacing(5),
        },
        dividerLine: {
            flexGrow: 1,

            height: "1px",
            width: "auto",

            backgroundColor: "#C80404"
        },
        titleText: {
            marginLeft: theme.spacing(2),
            marginRight: theme.spacing(2),

            fontSize: theme.typography.pxToRem(24),
            fontWeight: 600,
        },
    }
})

interface SectionTitleProps {
    text: string;
}



export default function SectionTitle({ text }: SectionTitleProps) {
    const { classes } = useStyles()

    return (      
        <h2 className={ classes.root }>
            <span className={ classes.dividerLine }></span>
            
            <span className={ classes.titleText }>
                { text }
            </span>

            <span className={ classes.dividerLine }></span>
        </h2>
    )
}