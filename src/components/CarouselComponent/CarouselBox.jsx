import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

import './CarouselBox.css'


const CarouselComponent = () => {
    return (
<Carousel>
    <Carousel.Item>
    <img 
    className=" img"
    src="https://images.pexels.com/photos/2574643/pexels-photo-2574643.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    alt="first"
    />
        <Carousel.Caption>
    <h5> 
    «Гори не стадіони, де я задовольняю свої амбіції, вони - храми, де я сповідую мою релігію.»
    </h5>
        </Carousel.Caption>
    </Carousel.Item>


    <Carousel.Item>
    <img 
    className=" img"
    src="https://images.pexels.com/photos/371589/pexels-photo-371589.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    alt="second"
    />
        <Carousel.Caption>
    <h5> Гори мають владу кликати нас у свої краї, це вже не пристрасть, це доля моя </h5>
        </Carousel.Caption>
    </Carousel.Item>

    <Carousel.Item>
    <img 
    className="img"
    src="https://images.pexels.com/photos/206660/pexels-photo-206660.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    alt="Гора Парашка"
    />
        <Carousel.Caption >
    <h5> Досягти мети у горах — це не тільки піднятися на верхівку, але і спуститися вниз. </h5>
        </Carousel.Caption>
    </Carousel.Item>
</Carousel>

    )
}

export default CarouselComponent;