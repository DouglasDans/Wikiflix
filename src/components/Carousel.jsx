import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './Carousel.css'


export default function Carousel(props) {
    console.log(props.itens);

    if(props.coverType == 'large'){
        return(
            <CarouselLarge itens={props.itens} title={props.title}/>
        )
    }else{
        return(
            <CarouselSmall itens={props.itens} title={props.title}/>
        )
    }

    
    // const itens = props.itens.map((item, index) => {
    //     if(props.coverType == 'large'){
    //         const style = { width: 400 };
    //         return (
    //             <div className="item" style={style}>
    //                 <div className='carousel-item-container'>
    //                     <div className='title-carousel-item'>
    //                         <h1>{item.title}</h1>
    //                         <span>{item.release_date}</span>
    //                     </div>
    //                     <img className='carousel-img' height="215px" width="380px" src={'https://image.tmdb.org/t/p/w500/' + item.backdrop_path} />
    //                 </div>
    //             </div>
    //         );
    //     } else{
    //         const style = { width: 130 };
    //         return (
    //             <div className="item" style={style}>
    //                     <img className='carousel-img' height="165px" width="110px" src={'https://image.tmdb.org/t/p/w500/' + item.poster_path} />
    //             </div>
    //         );
    //     } 
    // });
    // return (
    //     <div className="carousel-container">
    //         <span className='carousel-title'>{props.title}</span>
    //         <AliceCarousel
    //             items={itens}
    //             autoWidth  
    //             mouseTracking
    //             disableDotsControls
    //             touchTracking
    //             // infinite
    //             paddingLeft={55}
    //             renderPrevButton={() => {
    //                 return(
    //                 <div className='arrow-container left-arrow'>
    //                     <span class="material-symbols-rounded">
    //                         chevron_left
    //                     </span>
    //                 </div>
    //                 )
    //             }}
    //             renderNextButton={() => {
    //                 return(
    //                 <div className='arrow-container right-arrow'>
    //                     <span class="material-symbols-rounded">
    //                         chevron_right
    //                     </span>
    //                 </div>
    //                 )
    //             }}
                
    //         />
    //     </div>
    // )
}

function CarouselLarge(props){
    const itens = props.itens.map((item, index) => {
        const style = { width: 400 };
        return (
            <div className="item" style={style}>
                <div className='carousel-item-container'>
                    <div className='title-carousel-item'>
                        <h1>{item.title}</h1>
                        <span>{item.release_date}</span>
                    </div>
                    <img className='carousel-img' height="215px" width="380px" src={'https://image.tmdb.org/t/p/w500/' + item.backdrop_path} />
                </div>
            </div>
        );
    })
    return (
        <div className="carousel-container">
            <span className='carousel-title'>{props.title}</span>
            <AliceCarousel
                items={itens}
                activeIndex={0}
                controlsStrategy={"responsive"}
                mouseTracking
                touchTracking
                touchMoveDefaultEvents
                autoWidth
                Height={55}
                disableDotsControls
                // infinite
                paddingLeft={55}
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
function CarouselSmall(props){
    const itens = props.itens.map((item, index) => {
        const style = { width: 130 };
        return (
            <div className="item" style={style}>
                <img className='carousel-img' height="165px" width="110px" src={'https://image.tmdb.org/t/p/w500/' + item.poster_path} />
            </div>
        );
    })
    return (
        <div className="carousel-container">
            <span className='carousel-title'>{props.title}</span>
            <AliceCarousel
                items={itens}
                activeIndex={0}
                controlsStrategy={"responsive"}
                mouseTracking
                touchTracking
                touchMoveDefaultEvents
                autoWidth
                Height={55}
                disableDotsControls
                // infinite
                paddingLeft={55}
                renderPrevButton={() => {
                    return(
                    <div className='arrow-container small-left-arrow'>
                        <span class="material-symbols-rounded">
                            chevron_left
                        </span>
                    </div>
                    )
                }}
                renderNextButton={() => {
                    return(
                    <div className='arrow-container small-right-arrow'>
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