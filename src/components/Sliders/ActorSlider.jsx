import React, { Fragment } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './Slider.css'

export default function ActorSlider({credits}){

    const itens = credits.cast.map((item) => {
        return (
            <section className='actor-card'>
                <img src={'https://image.tmdb.org/t/p/w500/' + item.profile_path}/>
                <div>
                    <span>{item.name}</span>
                    <small>{item.character}</small>
                </div>
            </section>
        )
    })

    return (
        <div className="actor-carousel-container">
            <span className=''>Principais Participantes</span>
                <AliceCarousel
                    items={itens}
                    activeIndex={0}
                    // controlsStrategy={"responsive"}
                    mouseTracking
                    touchTracking
                    touchMoveDefaultEvents
                    autoWidth
                    disableDotsControls
                    // infinite
                    renderPrevButton={() => {
                        return(
                        <div className='arrow-container large-left-arrow'>
                            <span class="material-symbols-rounded">
                                chevron_left
                            </span>
                        </div>
                        )
                    }}
                    renderNextButton={() => {
                        return(
                        <div className='arrow-container large-right-arrow'>
                            <span class="material-symbols-rounded">
                                chevron_right
                            </span>
                        </div>
                        )
                    }}
                />
        </div>
    )






   
}