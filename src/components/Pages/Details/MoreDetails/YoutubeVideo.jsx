import React, { Fragment } from 'react'
import style from './youtubeVideo.module.css'

export default function YoutubeVideo({videos}) {
   try {
      let video = videos.results[0]
      return (
         <Fragment>
            {video && <iframe className={style.video} src={`https://www.youtube.com/embed/${video.key}`}title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; fullscreen; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>}
         </Fragment>
      )
   } catch (error) {
       console.error("[Error - YouTube Video] " + error);
   }
}
