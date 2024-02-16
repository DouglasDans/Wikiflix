import React, { Fragment } from 'react'

import './SideDetails.css'

export default function SideDetails({details}, typeContent) {
   
   const releaseDate = new Date(details.release_date || details.first_air_date)

   const productionCompanies = () =>  {
      let content = ""
      details.production_companies.map((item, index) => {
         content = content + item.name
         if(details.production_companies[index + 1]){
            content = content + ", "
         }
      })
      return content
   }

   const productionCountries = () =>  {
      let content = ""
      details.production_countries.map((item, index) => {
         content = content + item.name
         if(details.production_countries[index + 1]){
            content = content + ", "
         }
      })
      return content
   }

   return (
      <Fragment>
         <div className="info-line">
            <p className="titulo">Título Original: </p>
            <p>{details.original_title || details.original_name}</p>
         </div>
         <div className="info-line">
            <p className="titulo">Lançamento: </p>
            <p> {`${releaseDate.getDay()}/${releaseDate.getMonth()}/${releaseDate.getFullYear()}`}</p>
         </div>
         <div className="info-line">
            <p className="titulo">Estúdios de Produção: </p>
            <p>{productionCompanies()}</p>
         </div>
         <div className="info-line">
            <p className="titulo">País de Origem: </p>
            <p>{productionCountries()}</p>
         </div>
         <div className="info-line">
            <p className="titulo">Idioma Original: </p><p>{details.original_language}</p>
         </div>

         {
            typeContent === "movie" ? 
            <div className="info-line">
               <p className="titulo">Duração: </p><p>{`${details.runtime}m`}</p>
            </div> : <></> 
         }
         
         {
            details.homepage ? 
            <div className="info-line">
               <button className='link-site'>
                  <a href={details.homepage}><p>Acessar Homepage</p></a>
               </button>
            </div> : <></>
         }
         
      </Fragment>    
   )
}