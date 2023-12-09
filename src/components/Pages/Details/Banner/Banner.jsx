import React from 'react'

import './Banner.css'

import InfoMain from './InfoMain/InfoMain';
import WatchProviders from './WatchProviders';

export default function Banner({details, watchProviders, typeContent}) {

   try {
      return (
         <div className="container-banner">
            <div className="bg-img-banner">
               <div className="gradient-banner"></div>
               <img id="img-banner-details" src={"https://image.tmdb.org/t/p/w500/" + details.backdrop_path} />
            </div>

            <div className="container-details-banner">
               <div className="container-details-info">
                  <div className="top-container">
                        <div className="left-container">
                           <img src={"https://image.tmdb.org/t/p/w500/" + details.poster_path}/>
                        </div>
                        <div className="right-container">
                           <InfoMain {...details} typeContent={typeContent}/>      
                           <WatchProviders {...watchProviders.results.BR}/>
                        </div>
                  </div>
                  <div className="bottom-container">
                        <div className="action-buttons-container">
                           
                        </div>
                        <div className="infos-icon-container">
                           {/* <InfoIcon apiData={apiData} typeContent={typeContent} ratings={ratings}/> */}
                        </div>
                  </div>
               </div>
            </div>

         </div>
      )
   } catch (error) {
      console.error("[Error - Banner] " + error);
   }
}
