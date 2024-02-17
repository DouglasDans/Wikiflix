import React, { Fragment } from 'react'

export default function BannerIcons({details, typeContent}){
   function Rating(){
       let rating = "null"
       try {
           details.ratings.map((item) => {
               if (item.iso_3166_1 === "BR") {
                   rating = item.rating
               }
           })
           return (
               <Fragment>
                   <div className="info-icon">
                       <div>{rating}</div>
                       <small>Classificação</small>
                   </div>
               </Fragment>
           )
       } catch (error) {
           
       }
   }

   try {
      if (typeContent === "movie") {
         return (
             <Fragment>
                 {details.vote_average && <div className="info-icon">
                    <div>
                        <span className="material-symbols-rounded">star</span>
                        {details.vote_average.toFixed(1)}
                    </div>
                    <small>{details.vote_count} avaliações</small>
                </div>}

                {details.popularity && <div className="info-icon">
                    <div>{details.popularity.toFixed(0)}</div>
                    <small>Popularidade</small>
                </div>}
             </Fragment>
         )
     } 
     if (typeContent === "tv") {
         return (
             <Fragment>
                {details.vote_average && <div className="info-icon">
                    <div>
                        <span className="material-symbols-rounded">star</span>
                        {details.vote_average.toFixed(1)}
                    </div>
                    <small>{details.vote_count} avaliações</small>
                </div>}

                <Rating/>

                {details.popularity && <div className="info-icon">
                    <div>{details.popularity.toFixed(0)}</div>
                    <small>Popularidade</small>
                </div>}

                {details.number_of_seasons && <div className="info-icon">
                    <div>
                        <span className="material-symbols-rounded">live_tv</span>
                        {details.number_of_seasons}
                    </div>
                    <small>Temporadas</small>
                </div>}
                  
                {details.number_of_episodes && <div className="info-icon">
                    <div>
                        <span className="material-symbols-rounded">live_tv</span>
                        {details.number_of_episodes}
                    </div>
                    <small>Episódios</small>
                </div>}
                  
             </Fragment>
         )
      }
   } catch (error) {
      console.error("[Error - BannerIcons] " + error);
   }
}
