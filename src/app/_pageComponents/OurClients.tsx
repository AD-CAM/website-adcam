/* eslint-disable @next/next/no-img-element */
'use client'
/* Library Imports */
import { makeStyles } from 'tss-react/mui'
/* Data & Types Imports */
import { ClientLogoData } from '../_types/dataFiles'
const ClientsLogos: ClientLogoData[] = require("../_data/ourClients.json")
/* Components Imports */
import { SectionTitle } from '../_components/SectionTitle'
import LogoCarousel from '../_components/LogoCarousel'




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
      }
  })



export default function OurClients() {
    const { classes } = useStyles()

    return (
        <section className={ classes.root }>
            <div className={ classes.subRoot }>
                <div className={ classes.titleRoot }>
                    <SectionTitle text={ "Parmi nos clients" } />
                </div>

                <LogoCarousel logos={ ClientsLogos } scrollSpeed={ 50 } rowsAmount={ 3 } alternateDirection />
            </div>
        </section>
    )
}