import React, { Fragment } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './Slider.css'

export default function ActorSlider({credits}){

    const itens = credits.cast.map((item) => {
        return (
            <section className='actor-card'>
                <img src={ item.profile_path ? 'https://image.tmdb.org/t/p/w185/' + item.profile_path : "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/2048px-Default_pfp.svg.png"}/>
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