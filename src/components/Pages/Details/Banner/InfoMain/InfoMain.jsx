import React, { Fragment } from 'react'
import convertStringToDate from '../../../../../util/convertStringToDate';

export default function InfoMain(details){
      console.log(details.typeContent);

      try {
         if (details.typeContent === "movie") {
            return(
               <Fragment>
                     <div className="info-title">
                        <h1>{details.title}</h1>
                        <div>
                           <span>
                              {details.release_date ? convertStringToDate(details.release_date).getFullYear() : "aui"}
                           </span>
                           
                           {details.release_date && <>&bull;</>}
                           
                           <span>{details.runtime + " minutos"}</span>

                           {details.runtime && <>&bull;</>} 

                           <span>{details.genres[0] && <>{details.genres[0].name}</>}</span>
                        </div>
                     </div>
               </Fragment>
            )
         }
         
         if (details.typeContent === "tv") {
            return(
               <Fragment>
                     <div className="info-title">
                        <h1>{details.name}</h1>
                        <div>
                           <span>

                              {details.first_air_date
                                 ? details.last_air_date
                                    ? `${convertStringToDate(details.first_air_date).getFullYear()} - ${convertStringToDate(details.last_air_date).getFullYear()}`
                                    : "Hoje"
                                 : "Data não disponível"}   
                           
                           </span>

                           {details.first_air_date && <>&bull;</>} 

                           <span>{details.genres[0] && <>{details.genres[0].name}</>}</span>
                        </div>
                     </div>
               </Fragment>
            )
         }
      } catch (error) {
         console.error("[Error - InfoTitle] " + error)
      }
}

