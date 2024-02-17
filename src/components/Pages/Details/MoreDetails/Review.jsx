import React, { Fragment } from 'react'
import styles from './review.module.css'

export default function Review({reviews}) {
   try {
       let review = reviews.results[0]
       return (
           <Fragment>
               <div className={styles.reviewContainer}>
                   <div className={styles.authorImage}>
                        {
                            review.author_details.avatar_path ? 
                                (<img className={styles.image} src={"https://image.tmdb.org/t/p/w500/" + review.author_details.avatar_path}/>) 
                                : <span className={"material-symbols-rounded " + styles.placeholder}>account_circle</span>
                        }
                   </div>
                   <div className={styles.reviewContent}>
                       <h4 className={styles.authorName}>{review.author}</h4>
                       <p className={styles.reviewText}>{review.content}</p>
                   </div>
               </div>
           </Fragment>
       )
   } catch (error) {
       console.error("[Error - Reviews] " + error);
   }
}
