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
    src={firstImg}
    alt="Гора маковиця"
    />
        <Carousel.Caption>
    <h3>Гора Маковиця </h3>
    <p>Ма́ковиця — гора в Українських Карпатах. Орографічно відноситься до гірського масиву Ґорґани. 
    Розташована на схід від центральної частини міста Яремче, на межі Яремчанської міської ради та Надвірнянського району Івано-Франківської області.</p>
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