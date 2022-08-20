import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './Carousel.css'


export default function Carousel(props) {
    console.log(props.itens);
    
    const itens = props.itens.map((item, index) => {
        if(props.coverType == 'large'){
            const style = { width: 400 + index };
            return (
                <div className="item" style={style}>
                    <img className='carousel-img' height="215px" width="380px" src={'https://image.tmdb.org/t/p/w500/' + item.backdrop_path} />
                    
                </div>
            );
        } else{
            const style = { width: 130 + index };
            return (
                <div className="item" style={style}>
                    <img className='carousel-img' height="165px" width="110px" src={'https://image.tmdb.org/t/p/w500/' + item.poster_path} />
                    
                </div>
            );
        }
        
    });

        

    return (
        <div className="carousel-container">
            <span className='carousel-title'>{props.title}</span>
            <AliceCarousel
                items={itens}
                autoWidth  
                mouseTracking
                disableDotsControls
                touchTracking
                // infinite
                paddingLeft={55}
                renderPrevButton={() => {
                    return(
                    <div className='arrow-container'>
                        <span class="material-symbols-rounded">
                            chevron_left
                        </span>
                    </div>
                    )
                }}
                renderNextButton={() => {
                    return(
                    <div className='arrow-container'>
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

function prevButton(){
    return(
        <div className='arrow-container'>
            <span class="material-symbols-rounded">
                chevron_left
            </span>
        </div>
    )
}

function nextButton(){
    return(
        <div className='arrow-container'>
            <span class="material-symbols-rounded">
                chevron_next
            </span>
        </div>
    )
}
