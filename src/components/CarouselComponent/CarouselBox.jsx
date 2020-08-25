import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

import firstImg from '../../essets/mac.png';
import secondImg from '../../essets/gemba.png';
import thirdImg from '../../essets/par.png';

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
    src={secondImg}
    alt="Гора Гимба"
    />
        <Carousel.Caption>
    <h3>Гора Гимба </h3>
    <p>Ґе́мба (Ґи́мба) — гора в Українських Карпатах, одна з найвищих вершин гірського масиву Полонина Боржава. Розташована на межі Свалявського та Міжгірського районів Закарпатської області.</p>
        </Carousel.Caption>
    </Carousel.Item>

    <Carousel.Item>
    <img 
    className="img"
    src={thirdImg}
    alt="Гора Парашка"
    />
        <Carousel.Caption >
    <h3>Гора Парашка </h3>
    <p>Пара́шка (рідко — Параска) — гора в Українських Карпатах, найвища вершина однойменного хребта (Парашка) в Сколівських Бескидах.
    Висота 1268,5 м над рівнем моря (за іншими даними — 1271 м). 
    Розташована на відстані 8 км на північний захід від м. Сколе Львівської області. 
    На схилі гори встановлений пам'ятний камінь, на вершині — хрест.</p>
        </Carousel.Caption>
    </Carousel.Item>
</Carousel>

    )
}

export default CarouselComponent;