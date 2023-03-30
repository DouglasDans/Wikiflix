import React, { Fragment } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './Slider.css'
import { Link } from "react-router-dom";

export default function BannerSlider(props){
    try {
        let itens = props.itens.map((item) => {
            let dataType 
            if (item.title != null) {
                dataType = "movie"
            }
            if (item.name != null) {
                dataType = "tv"
            }

            let tagline = item.details.tagline !== undefined ? item.details.tagline : "";
            let vote_average = item.details.vote_average !== undefined ? item.details.vote_average : 0;
            let vote_count = item.details.vote_count !== undefined ? item.details.vote_count : 0;
            let popularity = item.details.popularity !== undefined ? item.details.popularity : 0;
            let genres = item.details.genres !== undefined ? item.details.genres : [{ name: "null" }];

            // async function validateData() {
            //     tagline = item.details.tagline || "";
            //     vote_average = item.details.vote_average || 0;
            //     vote_count = item.details.vote_count || 0;
            //     popularity = item.details.popularity || 0;
            //     genres = item.details.genres || [{ name: "null" }];
            //     // retorna uma promessa que resolve imediatamente
                
            //   }
                
            // Promise.resolve(validateData())

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
                                    <span>{genres[0].name || null}</span>
                                </div>
                            </div>
                            <h3>{tagline}</h3>
                            <div className='info-icon-container'>
                                <div className="info-icon">
                                    <div>
                                        <span className="material-symbols-rounded">star</span>
                                        {vote_average.toFixed(1)}
                                    </div>
                                    <small>{vote_count} avaliações</small>
                                </div>
                                <div className="info-icon">
                                    <div>
                                        <span className="material-symbols-rounded">chart_data</span>
                                        {popularity.toFixed(0)}
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
