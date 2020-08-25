import React from "react";
import CarouselComponent from '../CarouselComponent/CarouselBox';
import {Container, CardDeck, Card, CardImg, Button} from 'react-bootstrap';
import './Home.css';

const HomeComponent =() => {
    return (<>
        <CarouselComponent/>
        <Container>
            <h2 className="text-center m-4">Походи</h2>
            <CardDeck>
                <Card>
                    <CardImg 
                    // className="homeImg"
                    variant="bottom"
                   src="https://i1.wp.com/tourbaza.com/wp-content/uploads/2014/07/%D0%91%D0%BE%D1%80%D0%B6%D0%B0%D0%B2%D0%B0.jpg?fit=739%2C554&ssl=1"/>
                   <Card.Body>
                    <Card.Title>Маршрут №1 (Полонина Боржава)</Card.Title>
                    <Card.Text>
                    <h3>Чому саме ця подорож?</h3>
                   <p> Полонина Боржава — один із найбільших гірських хребтів в Українських Карпатах, що пролягає між річками Віча, Боржава і Ріка. 
                    У назві хребта недарма присутнє слово «полонина» — гори тут вкриті травою та чорничниками, а не холодними кам’яними брилами. 
                    Одноденний похід по Боржаві простіший, ніж підкорення Говерли, до того ж тут набагато менше людей, що особливо важливо для походів у високий сезон. 
                    Боржава вважається однією з наймальовничіших полонин Українських Карпат. </p>
                    </Card.Text>
                </Card.Body>
                <Button variant="primary">Детально про маршрут</Button>
                </Card>

                <Card>
                <CardImg 
                // className="homeImg"
                variant="top"
               src="https://vseua.info/wp-content/uploads/2017/12/LR4ezgrIpzA.jpg"/>
               <Card.Body>
                <Card.Title>Маршрут №2 (Таємниці Сколівських Бескидів: гора Лопата і околиці)</Card.Title>
                <Card.Text>
                 <h3>Чому саме ця подорож?</h3>
                   <p> Похід на одну з найгарніших вершин Сколівських Бескидів — гору Лопату, з порівняно пологим підйомом і стрімким спуском — чудова фізична вправа для вихідного дня. 
                    Гора Лопата має видатне історичне минуле: там досі збереглися окопи І світової війни, а під час ІІ світової війни вона була місцем переможних боїв УПА з німецько-угорськими загонами. 
                    У маршруті є дві цікаві гідрологічні пам’ятки Львівщини: водоспад Кам’янка і Мертве озеро з сірководневою водою, через що там не водиться риба.</p>
                </Card.Text>
            </Card.Body>
            <Button variant="primary">Детально про маршрут</Button>
            </Card>

            <Card>
            <CardImg 
            // className="homeImg"
            variant="top"
           src="https://kuluarpohod.com/files/routes/middle/1584522582_96.jpg"/>
           <Card.Body>
            <Card.Title>Маршрут №3 Хом’як і Говерла</Card.Title>
            <Card.Text>
            <h3>Чому саме ця подорож?</h3>
           <p> Побувати на Говерлі — найвищій вершині України — хоча б раз у житті мусить кожен. 
            У цьому дводенному поході ви зможете скласти уявлення одразу про два визначні гірські масиви Карпат: найвищий український гірський хребет Чорногору і дикі кам’янисті Ґорґани. 
            При цьому похід досить нескладний і навіть комфортний, оскільки ночувати будемо в гуцульській садибі. </p>
            </Card.Text>
        </Card.Body>
        <Button variant="primary">Детально про маршрут</Button>
        </Card>
              
            </CardDeck>
        </Container>
        </>
    );
};

export default HomeComponent;