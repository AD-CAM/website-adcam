/* eslint-disable @next/next/no-img-element */
'use client'
/* Data & Types Imports */
const techSheetsList = require("../_pageData/doorBellTechSheetsList.json")
/* Assets Imports */
import ajaxBanner from "../../../../public/ajax/banner-ajax_doorbell.png"
import doorBellDeviceOne from "../../../../public/ajax/doorbell/device-one.png"
/* Library Imports */
import useStyles from "../_styles/sectionStyling"
import { makeStyles } from 'tss-react/mui'
import YouTube from "react-youtube"
/* Components Imports */
import { TechSheetBanner, TechSheetImageBanner, TechSheetList, TechSheetListVideo, TechSheetText, TechSheetTileContainer } from '@/app/_components/TechSheet'
import { TechSheetData } from '@/app/_types/dataFiles'
import { useMediaQuery, useTheme } from "@mui/material"
import React from "react"



interface TileInterface {
      image?: string,
      reverse?: boolean,
      isFirst?: boolean,
      isImageUnder?: boolean,
      isVideo?: boolean,
      isDark?: boolean,
      title: string,
      body?: string[],
      bodySize?: string
}



function Tile({ image, reverse, isFirst, isImageUnder, isVideo, isDark, title, body, bodySize }:TileInterface) {
      const { classes } = useStyles()

      return (
            <div
                  style={{    display: "flex",
                              width: "85%",
                              alignItems: "center",
                              justifyContent: "space-between",
                              flexDirection: isImageUnder ? (reverse ? "column-reverse" : "column") : (reverse ? "row-reverse" : "row"),
                              boxShadow: "4px 5px 19px -6px rgba(0,0,0,0.6)",
                              backgroundColor: isDark ? "rgba(0,0,0,1)" : "rgba(255,255,255,1)",
                              borderRadius: "1rem",
                              marginTop: isFirst ? "0" : "25px",
                              padding: image && !isImageUnder ? "0 2rem" : "2rem",
                        }}
            >
                  <div
                        style={{ display: "flex", alignItems: "center", justifyContent: image && !isImageUnder ? "center" : "flex-start", flexDirection: "column", width: image && !isImageUnder ? "50%" : "100%" }}
                  >
                        {
                              title &&    <h3 style={{ fontSize: "20px", textAlign: "center", margin:"0", color: isDark ? "#ADADAD" : "#181818" }}>{ `${title}` }</h3>
                        }
                        {
                              body &&     <p style={{ fontSize: `${bodySize}`, fontWeight: "bold", textAlign: "center", marginBottom: "0", color: isDark ? "#F7F7F7" : "#181818" }}>
                                                {
                                                      body.map((line: string, index: number) => (
                                                            <React.Fragment key={ index }>
                                                                  { line }
                                                                  <br />
                                                            </React.Fragment>
                                                      ))
                                                }
                                          </p>
                        }
                  </div>
                  {
                        image && (
                              isVideo     ? <video style={{ width: "210px", borderRadius: "1em" }} loop muted autoPlay src={ image } controlsList="nofullscreen" playsInline />
                                          : <img style={{ width: "75%", boxSizing: "border-box", padding: "25px", borderRadius: "1em" }} src={ image } alt={ "" }  />
                        )
                  }
            </div>
      )
}



export default function DoorBellSection() {
    const { classes } = useStyles()

    const theme = useTheme()
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('lg'))



    return (      
        <section className={ classes.root }>
            { isSmallScreen   ?     <TechSheetBanner
                                          image={ doorBellDeviceOne }
                                          alt={ "Sonnette Vidéo AJAX" }
                                          isTop={ false }
                                          tag={ "" }
                                          boldTitle={ "DoorBell" }
                                          regularTitle={ "" }
                                          text={ [
                                                {
                                                type: "regular",
                                                text: "Sonnette vidéo avec IA intégrée, capteur PIR et contrôle via des applications"
                                                }
                                          ] }
                                          transparent={ true }
                                    />
                              :     <TechSheetImageBanner
                                          image={ ajaxBanner }
                                          backgroundColor={ "rgba(0,0,0,1)" }
                                          height={ 500 }
                                          isTop={ false }
                                          tag={ "" }
                                          boldTitle={ "DoorBell" }
                                          regularTitle={ "" }
                                          text={ [
                                                {
                                                type: "regular",
                                                text: "Sonnette vidéo avec IA intégrée, capteur PIR et contrôle via des applications"
                                                }
                                          ] }
                                          transparent={ true }
                                    />
            }

            <div className={ classes.subRoot }>
                  <div style={{ flexDirection: isSmallScreen ? "column" : "row", alignItems: isSmallScreen ? "center" : "flex-start", display: "flex", width: "100%" }}>
                        <TechSheetTileContainer isVertical>
                              <Tile title="Caméra de première qualité"
                                    isFirst
                                    body={[ "155°", "4 MP", "HDR" ]}
                                    bodySize="32px"
                              />
                              <Tile image="ajax/doorbell/tile_vid.mp4"
                                    isVideo
                                    isDark
                                    title="Portée de l'éclairage IR"
                                    body={[ "jusqu'à 6 m" ]}
                                    bodySize="28px"
                              />
                        </TechSheetTileContainer>
                        <TechSheetTileContainer isVertical>
                              <Tile title="Audio bidirectionnelle claire"
                                    isFirst
                                    body={[ "avec suppression du bruit et annulation de l'écho" ]}
                                    bodySize="16px"
                              />
                              <Tile image="ajax/doorbell/device_colors.png"
                                    isImageUnder
                                    title="Quatre couleurs"
                              />
                        </TechSheetTileContainer>
                  </div>

                  <h2 className={ classes.listTitle }>
                        { `Expérience rapide, intelligente et sécurisée. Maintenant avec une sonnette.` }
                  </h2>

                {
                    techSheetsList.map((techSheetData: TechSheetData, index: number) => {
                        return <TechSheetListVideo 
                                            key={ index }
                                            image={ techSheetData.image }
                                            alt={ techSheetData.alt }
                                            isLeft={ techSheetData.isLeft }
                                            boldTitle={ techSheetData.boldTitle }
                                            regularTitle={ techSheetData.regularTitle }
                                            subTitle={ techSheetData.subTitle }
                                            techSheet={ techSheetData.techSheet }
                                />
                    })
                }
            </div>
        </section>
    )
}
