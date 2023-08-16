'use client'
/* Assets Imports */

/* Utils & Data Imports */
import { ReviewInfo } from "../_types/dataFiles"
const reviewList: ReviewInfo[] = require("../_data/reviewList.json")
/* Library Imports */
import { makeStyles } from 'tss-react/mui'
/* Components Imports */
import Review from "../_components/Review"
import Carousel from "../_components/Carousel"




const useStyles = makeStyles()((theme) => {
    return {
        root: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            
            width: "100%",
        },
        subRoot: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",

            width: "100%",
            maxWidth: "1450px",
        }
    }
})



export default function ReviewCarousel() {
    const { classes } = useStyles()



    return (      
        <section className={ classes.root }>
            <div className={ classes.subRoot }>
                <Carousel maxDistanceSeen={ 1 } displayCentered={ true }> 
                {
                    reviewList.map((review, index) => {
                        return <Review key={index} name={review.author_name} photo={review.profile_photo_url} rating={review.rating} text={review.text} time={review.time} />
                    })
                }
                </Carousel>
            </div>
        </section> 
    )
}