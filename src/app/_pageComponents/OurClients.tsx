/* eslint-disable @next/next/no-img-element */
'use client'
/* Library Imports */
import { makeStyles } from 'tss-react/mui'
/* Data & Types Imports */
import { ClientLogoData } from '../_types/dataFiles'
const ClientsLogos: ClientLogoData[] = require("../_data/ourClients.json")
/* Components Imports */
import { SectionTitle } from '../_components/SectionTitle'




const useStyles = makeStyles()((theme) => {
    return {
        root: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",

            width: "100%",

            [theme.breakpoints.down('sm')]: {
                paddingTop: theme.spacing(2),
            },
            [theme.breakpoints.up('sm')]: {
                paddingTop: theme.spacing(10),    
            },
        },
        subRoot: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",

            boxSizing: "border-box",

            width: "100%",
            maxWidth: "1450px",

            [theme.breakpoints.up('sm')]: {
                paddingLeft: theme.spacing(6),
                paddingRight: theme.spacing(6),   
            },
        },
        titleRoot: {
            width: "100%",

            [theme.breakpoints.down('sm')]: {
                maxWidth: "90%",
            },
            [theme.breakpoints.up('sm')]: {
                maxWidth: "864px",   
            },
        },
        clientsRoot: {
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-evenly",
        },
        clientsImage: {
            margin: theme.spacing(1),
            
            height: "90px",
            maxWidth: "90%"
        }
    }
})



function ClientLogo({ src, alt }: ClientLogoData) {
    const { classes } = useStyles()

    return (
        <img src={ `clients/${src}` } alt={ alt } className={ classes.clientsImage } />
    )
}



export default function OurClients() {
    const { classes } = useStyles()

    return (      
        <section className={ classes.root }>
            <div className={ classes.subRoot }>
                <div className={ classes.titleRoot }>
                    <SectionTitle text={ "Parmi nos clients" } />
                </div>

                <div className={ classes.clientsRoot }>
                    {
                        ClientsLogos.map((logo, index) => {
                            return (
                                <ClientLogo key={ index } src={ logo.src } alt={ logo.alt } />
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}