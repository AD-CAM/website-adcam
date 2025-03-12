/* eslint-disable @next/next/no-img-element */
'use client'
/* Data & Types Imports */
const techSheetsList = require("../_pageData/doorBellTechSheetsList.json")
/* Assets Imports */
import ajaxBanner from "../../../../public/ajax/banner-ajax_keypad.png"
import doorBellDeviceOne from "../../../../public/ajax/doorbell/device-one.png"
/* Library Imports */
import useStyles from "../_styles/sectionStyling"
import { makeStyles } from 'tss-react/mui'
import YouTube from "react-youtube"
/* Components Imports */
import { TechSheetBanner, TechSheetImageBanner, TechSheetText, TechSheetTileContainer } from '@/app/_components/TechSheet'
import { TechSheetData } from '@/app/_types/dataFiles'
import { useMediaQuery, useTheme } from "@mui/material"
import React from "react"



interface TileInterface {
      image?: string,
      height?: string,
      isVertical?: boolean,
      reverse?: boolean,
      isFirst?: boolean,
      isImageUnder?: boolean,
      isVideo?: boolean,
      isDark?: boolean,
      backgroundGradient?: string;
      title?: string,
      body?: string[],
      bodySize?: string
}



function Tile({ image, height, isVertical, reverse, isFirst, isImageUnder, isVideo, isDark, backgroundGradient, title, body, bodySize }:TileInterface) {
      const { classes } = useStyles()

      const theme = useTheme()
      const isSmallScreen = useMediaQuery(theme.breakpoints.down('lg'))

      return (
            <div
                  style={{    display: "flex",
                              width: isSmallScreen ? "100%" : (isVertical ? "94%" : "45%"),
                              height: isVertical ? "auto" : isSmallScreen ? height : "300px",
                              alignItems: "center",
                              justifyContent: isSmallScreen ? "space-evenly" : "space-between",
                              flexDirection: isImageUnder ? (reverse ? "column-reverse" : "column") : (reverse ? "row-reverse" : "row"),
                              boxSizing: "border-box",
                              boxShadow: "4px 5px 19px -6px rgba(0,0,0,0.6)",
                              background: backgroundGradient ? backgroundGradient : "",
                              backgroundColor: isDark ? "rgba(0,0,0,1)" : "rgba(255,255,255,1)",
                              borderRadius: "1rem",
                              marginTop: isFirst ? "0" : isVertical ? "25px" : isSmallScreen ? "25px" : "0",
                              padding: image && !isImageUnder ? "0 2rem" : "2rem",
                        }}
            >
                  <div
                        style={{ display: "flex", alignItems: "center", justifyContent: image && !isImageUnder ? "center" : "flex-start", flexDirection: "column", width: image && !isImageUnder ? "75%" : "100%", margin: "16px 0" }}
                  >
                        {
                              title &&    <h3 style={{ fontSize: "20px", textAlign: "center", margin:"0", color: isDark ? "#F1F1F1" : "#181818" }}>{ `${title}` }</h3>
                        }
                        {
                              body &&     <p style={{ fontSize: `${bodySize}`, fontWeight: "bold", textAlign: "center", marginBottom: title ? "0" : "16px", color: isDark ? "#F7F7F7" : "#181818" }}>
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
                                          : <img style={{ width: isImageUnder ? "auto" : isVertical ? "25%" : "75%", maxHeight: "100px", height: isImageUnder ? (isVertical ? "60px" : "40%") : "auto", boxSizing: "border-box", padding: isImageUnder ? "0" : "15px", borderRadius: "1em", fill: isDark ? "#FFFFFF" : "#000000" }} src={ image } alt={ "" }  />
                        )
                  }
            </div>
      )
}



export default function KeypadSection() {
    const { classes } = useStyles()

    const theme = useTheme()
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('lg'))



    return (      
        <section className={ classes.root }>
            { isSmallScreen   ?     <TechSheetBanner
                                          image={ ajaxBanner }
                                          alt={ "Clavier sans fil AJAX" }
                                          isTop={ false }
                                          tag={ "" }
                                          boldTitle={ "KeyPad Outdoor" }
                                          regularTitle={ " Jeweller" }
                                          text={ [
                                                {
                                                      type: "regular",
                                                      text: "Clavier sans fil avec authentification par Pass, Tag, smartphones et codes. Pour une utilisation extérieure et intérieure."
                                                }
                                          ] }
                                          transparent={ true }
                                    />
                              :     <TechSheetImageBanner
                                          image={ "ajax/banner-ajax_keypad.mp4" }
                                          isVideo
                                          backgroundColor={ "rgba(0,0,0,1)" }
                                          height={ 500 }
                                          isTop={ false }
                                          tag={ "" }
                                          boldTitle={ "KeyPad Outdoor" }
                                          regularTitle={ " Jeweller" }
                                          text={ [
                                                {
                                                      type: "regular",
                                                      text: "Clavier sans fil avec authentification par Pass, Tag, smartphones et codes. Pour une utilisation extérieure et intérieure."
                                                }
                                          ] }
                                          transparent={ true }
                                    />
            }

            <div className={ classes.subRoot }>
                  <h2 className={ classes.listTitle } style={{ width: "100%", textAlign: "left" }}>
                        { `Gérez votre espace, qu'il fasse beau ou qu'il pleuve` }
                  </h2>
                  <p style={{ fontSize: "18px" }}>
                        { `Découvrez la solution ultime tout temps pour la sécurité et l'automatisation. 
                        Gérez les modes de sécurité, activez le Mode nuit, contrôlez des groupes spécifiques 
                        et exécutez des scénarios à l'aide d'un seul clavier. Choisissez entre des codes 
                        d'accès classiques ou un contrôle sans contact pour un accès flexible. Son boîtier 
                        ultra-mince s'intègre parfaitement dans n'importe quel espace, tandis que ses grandes 
                        touches mécaniques, compatibles avec des gants, facilitent son utilisation même dans 
                        des conditions difficiles. Grâce à son boîtier robuste, le clavier peut résister à toutes 
                        les conditions de fonctionnement et aux dommages physiques. Le KeyPad Outdoor Jeweller 
                        dispose de touches de grande taille avec une barre de repérage, offrant une navigation 
                        facile pour les utilisateurs malvoyants.` }
                  </p>
                  <div style={{ flexDirection: isSmallScreen ? "column" : "row", alignItems: isSmallScreen ? "center" : "flex-start", display: "flex", width: "100%" }}>
                        <TechSheetTileContainer>
                              <Tile title="Indication sonore et LED"
                                    isFirst
                                    body={[ "notification des alarmes, armement/désarmement, temporisation à l'armement/désarmement, Carillon d'entrée, et d'autres évènements" ]}
                                    bodySize="16px"
                              />
                              <Tile image="ajax/icons/panic_button.svg"
                                    height="250px"
                                    isImageUnder
                                    isDark
                                    backgroundGradient="linear-gradient(153deg, rgba(49,65,107,1) 0%, rgba(19,34,73,1) 32%, rgba(42,22,13,1) 67%, rgba(96,48,39,1) 100%)"
                                    title="Bouton de panique intégré"
                              />
                              <Tile image="ajax/icons/double_anti_sabotage.svg"
                                    isVertical
                                    reverse
                                    title="Alarme anti-sabotage"
                                    body={[ "le boîtier est muni de deux boutons anti-sabotage" ]}
                                    bodySize="16px"
                              />
                              <Tile image="ajax/keypad/keypad_ip66.mp4"
                                    isVideo
                                    isDark
                                    isVertical
                                    reverse
                                    body={[ "protection contre la poussière, l'eau et les températures extrêmes" ]}
                                    bodySize="16px"
                              />
                        </TechSheetTileContainer>
                        <TechSheetTileContainer isVertical>
                              <Tile title="Contrôle sans contact via smartphone"
                                    image="ajax/icons/bluetooth.svg"
                                    isImageUnder
                                    reverse
                                    isVertical
                                    isFirst
                                    body={[ "en utilisant Bluetooth Low Energy (BLE)" ]}
                                    bodySize="16px"
                              />
                              <Tile image="ajax/keypad/keypad_one.png"
                                    reverse
                                    isVertical
                                    title="Prise en charge des dispositifs d'accès sans contact"
                                    body={[ "Cartes Pass et badges Tag dotés de la technologie DESFire®" ]}
                                    bodySize="14px"
                              />
                              <Tile image="ajax/keypad/keypad_ik08.svg"
                                    reverse
                                    isVertical
                                    isDark
                                    body={[ "protection contre les impacts physiques" ]}
                                    bodySize="16px"
                              />
                              <Tile isVertical
                                    title="Jusqu'à 1 700 m de communication radio"
                                    body={[ "avec une centrale ou un prolongateur de portée Ajax" ]}
                                    bodySize="16px"
                              />
                        </TechSheetTileContainer>
                  </div>
            </div>
        </section>
    )
}
