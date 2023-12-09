import React, { Fragment } from 'react'

export default function BannerIcons(props){
   const typeContent = props.typeContent
   const apiData = props.apiData
   
   function Rating(){
       let rating = "null"
       try {
           props.ratings.map((item) => {
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

   if (typeContent === "movie") {
       return (
           <Fragment>
               <div className="info-icon">
                   <div>
                       {apiData.vote_average.toFixed(1)}
                       <span className="material-symbols-rounded">star</span>
                   </div>
                   <small>{apiData.vote_count} avaliações</small>
               </div>
               <div className="info-icon">
                   <div>{apiData.popularity.toFixed(0)}</div>
                   <small>Popularidade</small>
               </div>
           </Fragment>
       )
   } 
   if (typeContent === "tv") {
       return (
           <Fragment>
               <div className="info-icon">
                   <div>
                       <span className="material-symbols-rounded">star</span>
                       {apiData.vote_average.toFixed(1)}
                   </div>
                   <small>{apiData.vote_count} avaliações</small>
               </div>
               <Rating/>
               <div className="info-icon">
                   <div>
                       <span className="material-symbols-rounded">chart_data</span>
                       {apiData.popularity.toFixed(0)}
                   </div>
                   <small>Popularidade</small>
               </div>
               <div className="info-icon">
                   <div>
                       <span className="material-symbols-rounded">live_tv</span>
                       {apiData.number_of_seasons}
                   </div>
                   <small>Temporadas</small>
               </div>
               <div className="info-icon">
                   <div>
                       <span className="material-symbols-rounded">live_tv</span>
                       {apiData.number_of_episodes}
                   </div>
                   <small>Episódios</small>
               </div>
               
           </Fragment>
       )
   }
}
