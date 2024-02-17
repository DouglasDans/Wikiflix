import React, { Fragment } from 'react'

import './SideDetails.css'
import convertStringToDate from '../../../../util/convertStringToDate'

export default function SideDetails({details}, typeContent) {
   
   const releaseDate = convertStringToDate(details.release_date || details.first_air_date)

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

   console.log(details)

   return (
      <Fragment>
         <div className="info-line">
            <span className="titulo">Título Original</span>
            <p>{details.original_title || details.original_name}</p>
         </div>

         <div className="info-line">
            <span className="titulo">Lançamento</span>
            <p> {`${releaseDate.getDay()}/${releaseDate.getMonth()}/${releaseDate.getFullYear()}`}</p>
         </div>

         {
            details.status ? 
            <div className="info-line">
               <span className="titulo">Status</span>
               <p> {`${details.status}`}</p>
            </div> : <></> 
         }

         {
            details.first_air_date ? 
            <div className="info-line">
               <span className="titulo">Primeiro episódio exibido</span>
               <p> {`${releaseDate.getDay()}/${releaseDate.getMonth()}/${releaseDate.getFullYear()}`}</p>
            </div> : <></> 
         }
         
         {
            details.last_air_date ? 
            <div className="info-line">
               <span className="titulo">Episódio mais recente</span>
               <p> {`${convertStringToDate(details.last_air_date).getDay()}/${convertStringToDate(details.last_air_date).getMonth()}/${convertStringToDate(details.last_air_date).getFullYear()}`}</p>
            </div> : <></> 
         }

         {
            details.type ? 
            <div className="info-line">
               <span className="titulo">Tipo</span>
               <p> {`${details.type}`}</p>
            </div> : <></> 
         }
         
         {
            details.original_language ? 
            <div className="info-line">
               <span className="titulo">Idioma Original</span>
               <p>{details.original_language}</p>
            </div> : <></> 
         }
         
         <div className="info-line">
            <span className="titulo">País de Origem</span>
            <p>{productionCountries()}</p>
         </div>

         <div className="info-line">
            <span className="titulo">Estúdios de Produção</span>
            <p>{productionCompanies()}</p>
         </div>

         {
            typeContent === "movie" ? 
            <div className="info-line">
               <span className="titulo">Duração</span>
               <p>{`${details.runtime}m`}</p>
            </div> : <></> 
         }
         
         {
            details.homepage ? 
            <div className="info-line">
               <button className='link-site'>
                  <a href={details.homepage}><p>Acessar site oficial</p></a>
               </button>
            </div> : <></>
         }
         
      </Fragment>    
   )
}