import React, { Fragment } from 'react'

export default function Descricao({details}) {
   try {
      return (
         <Fragment>
            <h2>{details.tagline && <>{details.tagline}</>}</h2>
            <p>{details.overview && <>{details.overview}</>}</p>
         </Fragment>
      )
   } catch (error) {
      console.error("[Error - Descricao] " + error);
   }
}
