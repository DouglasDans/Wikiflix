import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const itemsLength = Array.from({ length: 5 });

const items = itemsLength.map((item, index) => {
    const style = { width: 400 + index };
    return (<div className="item" style={style}><img height="215px" width="380px" src='https://upload.wikimedia.org/wikipedia/pt/2/26/CrashTwinsanityAmerican.png'/></div>);
});

const Carousel = () => (
    <AliceCarousel
        autoWidth  
        mouseTracking
        items={items}
    />
);

export default Carousel