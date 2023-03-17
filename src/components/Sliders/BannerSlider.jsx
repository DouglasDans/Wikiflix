import React, { Fragment } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './Slider.css'
import { Link } from "react-router-dom";

export default function BannerSlider(props){
    let dataType = "tv"

    function validateDate(fstDate = null, lstDate = null) {
        fstDate = new Date(fstDate).getFullYear()
        lstDate = lstDate ? " - " + (new Date(lstDate).getFullYear()) : ""
        return [fstDate, lstDate]
    }

    try {
        let itens = props.itens.map((item) => {
            console.log(item);
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
                                    <span>{new Date(item.first_air_date || item.release_date).getFullYear()}</span>
                                    &bull; 
                                    <span>{item.details.genres[0].name || null}</span>
                                </div>
                            </div>
                            <h3>{item.details.tagline}</h3>
                            <div className='info-icon-container'>
                                <div className="info-icon">
                                    <div>
                                        <span className="material-symbols-rounded">star</span>
                                        {item.details.vote_average.toFixed(1)}
                                    </div>
                                    <small>{item.details.vote_count} avaliações</small>
                                </div>
                                <div className="info-icon">
                                    <div>
                                        <span className="material-symbols-rounded">chart_data</span>
                                        {item.details.popularity.toFixed(0)}
                                    </div>
                                    <small>Popularidade</small>
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
