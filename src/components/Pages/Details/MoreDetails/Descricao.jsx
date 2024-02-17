import React, { Fragment } from 'react'
import styles from './descricao.module.css'

export default function Descricao({details}) {
   try {
      return (
         <div className={styles.descricaoContainer}>
            <h2 className={styles.tagline}>{details.tagline && <>{details.tagline}</>}</h2>
            <p className={styles.descricao}>{details.overview && <>{details.overview}</>}</p>
         </div>
      )
   } catch (error) {
      console.error("[Error - Descricao] " + error);
   }
}
