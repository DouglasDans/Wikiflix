import React, { Fragment } from 'react'

export default function Review({reviews}) {
   try {
       let review = reviews.results[0]
       return (
           <Fragment>
               <div className="review-container">
                   <div className="author-image">
                       <img src={"https://image.tmdb.org/t/p/w500/" + review.author_details.avatar_path}/>
                   </div>
                   <div className="review-content">
                       <h4 className="author-name">{review.author}</h4>
                       <p className="review-text">{review.content}</p>
                   </div>
               </div>
           </Fragment>
       )
   } catch (error) {
       console.error("[Error - Reviews] " + error);
   }
}
