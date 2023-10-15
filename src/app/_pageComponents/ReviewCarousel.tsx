'use client'
/* Utils & Data Imports */
import { getReviews } from "../_utils/reviews"
import { ReviewInfo } from "../_types/dataFiles"
const reviewList: ReviewInfo[] = require("../_data/reviewList.json")
/* Library Imports */
import { useEffect } from "react"
import { makeStyles } from 'tss-react/mui'
import { useTheme, useMediaQuery } from "@mui/material"
/* Components Imports */
import { SectionTitle } from "../_components/SectionTitle"
import Review from "../_components/Review"
import Carousel from "../_components/Carousel"
import { GoToButton, IconButton } from "../_components/Button"



const useStyles = makeStyles()((theme) => {
    return {
        root: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            
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
            justifyContent: "center",

            width: "90%",

            [theme.breakpoints.down('sm')]: {
                width: "95%",
                maxWidth: "95%",
            },
            [theme.breakpoints.up('sm')]: {
                maxWidth: "1450px",
            },
        },
        titleRoot: {
            width: "100%",

            boxSizing: "border-box",

            [theme.breakpoints.down('sm')]: {
                maxWidth: "90%",
            },
            [theme.breakpoints.up('sm')]: {
                maxWidth: "864px",

                paddingLeft: theme.spacing(6),
                paddingRight: theme.spacing(6),
            },
        },
        ratingTitleRoot: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
        },
        starsContainer: {
            display: "flex",
        },
        star: {
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",

            marginRight: "2px",

            width: "30px",
            height: "30px",
        },
        starsBasedOn: {
            marginTop: theme.spacing(1),
            marginBottom: theme.spacing(1),
        },
        googleLogo: {
            backgroundImage: "url(https://cdn.trustindex.io/assets/platform/Google/logo.svg)",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",

            width: "110px",
            height: "35px",

            marginBottom: theme.spacing(4),
        },
        writeReviewRoot: {
            display: "flex",
            justifyContent: "space-evenly",

            minWidth: "310px",

            marginTop: theme.spacing(4),
        }
    }
})



export default function ReviewCarousel() {
    const theme = useTheme()
    const { classes } = useStyles()

    const averageRating = reviewList.reduce((total, review) => total + review.rating, 0) / reviewList.length
    const ratingArray: string[] = []
    for(let i = 1; i <= 5; i++) {
        if(i <= averageRating){
            ratingArray.push("f")
        } else if(i > averageRating && averageRating > i-1) {
            ratingArray.push("h")
        } else {
            ratingArray.push("e")
        }
    }


    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'))
    const isMediumScreen = useMediaQuery(theme.breakpoints.down('md'))
    const isLargeScreen = useMediaQuery(theme.breakpoints.down('lg'))
    const isStrictlyLargeScreen = !isSmallScreen && !isMediumScreen && isLargeScreen



    /* useEffect(() => {
        getReviews()
    }) */



    return (      
        <section className={ classes.root }>
            <div className={ classes.subRoot }>
                <div className={ classes.titleRoot }>
                    <SectionTitle text={ "Les avis de nos clients" } />
                </div>
                <div className={ classes.ratingTitleRoot }>
                    <div className={ classes.starsContainer }>
                    {
                        ratingArray.map((star, index) => {
                            return (
                                <div key={ index } className={ classes.star } style={{ backgroundImage: `url(https://cdn.trustindex.io/assets/platform/Google/star/${star}.svg)` }}>
                                </div>
                            )
                        })
                    }
                    </div>
                    <p className={ classes.starsBasedOn }>{ `Basée sur ` }<strong>{ `${reviewList.length} avis` }</strong></p>
                    <div className={ classes.googleLogo }></div>
                </div>
                <Carousel startingIndex={ isSmallScreen ? 0 : 1 } maxDistanceSeen={ isLargeScreen ? 0 : 1 } displayCentered={ isStrictlyLargeScreen ? false : true }> 
                {
                    reviewList.map((review, index) => {
                        return <Review key={index} name={review.author_name} photo={review.profile_photo_url} rating={review.rating} text={review.text} time={review.time} />
                    })
                }
                </Carousel>
                <div className={ classes.writeReviewRoot }>
                    <IconButton icon={ "star" }
                                text={ "Donner un avis" }
                                link={ "https://g.page/r/Ce50QaX_gC5NEB0/review" }
                                description={ "Donner un avis" }
                                isOutside={ true }
                    />
                    <GoToButton text={ `Voir plus d'avis` }
                                link={ `https://goo.gl/maps/eqLTBWEQWpXq5cts7` }
                                description={ "Accéder aux avis google de AD-CAM" } 
                                isOutside={ true }           
                    />
                </div>
            </div>
        </section> 
    )
}