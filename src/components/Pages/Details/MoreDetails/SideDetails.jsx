import React, { Fragment } from 'react'

import './SideDetails.css'

export default function SideDetails({details}) {
   return (
      <Fragment>
         <div className="info-line">
            <p className="titulo">Título Original: </p><p>{details.original_title}</p>
         </div>
         {/* <div className="info-line">
            <p className="titulo">Lançamento: </p><p> {`${apiData.release_date[props.typeContent].getDay()}/${apiData.release_date[props.typeContent].getMonth()}/${apiData.release_date[props.typeContent].getFullYear()}`}</p>
         </div> */}
         {/* <div className="info-line">
            <p className="titulo">Estúdios de Produção: </p><p>{apiData.production_companies()}</p>
         </div>
         <div className="info-line">
            <p className="titulo">País de Origem: </p><p>{apiData.production_countries()}</p>
         </div> */}
         <div className="info-line">
            <p className="titulo">Idioma Original: </p><p>{details.original_language}</p>
         </div>
         <div className="info-line">
            <p className="titulo">Duração: </p><p>{`${details.runtime}m`}</p>
         </div>
         <div className="info-line">
            <p className="titulo">Site Oficial: </p><a href={details.homepage}><p>Acessar</p></a>
         </div>
      </Fragment>    
   )
}
