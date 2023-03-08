import React, { Fragment } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './Slider.css'
import { Link } from "react-router-dom";

export default function BannerSlider(props){
    let dataType = "tv"
    try {
        let itens = props.itens.map((item) => {
            if (item.title != null) {
                dataType = "movie"
            }
            if (item.name != null) {
                dataType = "tv"
            }
            
            return (
                <Link to={`/${dataType}/${item.id}`}>
                    <section className='main-slider'>
                        <div className="bg-img-banner">
                            <div className="gradient-banner"></div>
                            <img id="img-banner-details" src={"https://image.tmdb.org/t/p/w500/" + item.backdrop_path} />
                        </div>

                        <div className='slider-banner-content'>
                            <div className='title-banner'>
                                <h1>{item.title || item.name}</h1>
                                <div>
                                    <span>2023 - 2023</span>
                                    &bull; 
                                    <span>Ação</span>
                                </div>
                            </div>
                            <h3>Quando estiver perdido na escuridão, procure a luz.</h3>
                            <div className='info-icon-container'>
                                <div className="info-icon">
                                    <div>
                                        <span className="material-symbols-rounded">star</span>
                                        9.8
                                    </div>
                                    <small>14000 avaliações</small>
                                </div>
                            </div>
                        </div>
                    </section>
                </Link>
            )
        })
    
            
    
    return (
        <div className="carousel-container">
            <AliceCarousel
                items={itens}
                activeIndex={0}
                controlsStrategy={"responsive"}
                mouseTracking
                touchTracking
                touchMoveDefaultEvents
                autoPlay
                autoPlayInterval={10000}
                animationDuration={500}                
                infinite
                Height={0}
                disableDotsControls
                // infinite
                paddingLeft={0}
                renderPrevButton={() => {
                    return(
                    <div className='arrow-container banner-left-arrow'>
                        <span class="material-symbols-rounded">
                            chevron_left
                        </span>
                    </div>
                    )
                }}
                renderNextButton={() => {
                    return(
                    <div className='arrow-container banner-right-arrow'>
                        <span class="material-symbols-rounded">
                            chevron_right
                        </span>
                    </div>
                    )
                }}
            />
        </div>
    )
    } catch (error) {
        console.warn(error);
    }
}

