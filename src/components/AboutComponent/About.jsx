import React from 'react';
import './About.css';
import { Container, TabContainer, Nav, Col, Row, TabContent, TabPane} from 'react-bootstrap';

const AboutComponent = () => {
    return (
    <Container>
        <TabContainer id="left-tabs-example" defaultActiveKey="first">
            <Row>
                <Col sm={3}>
                    <Nav variant ="pills" className="flex-column mt-2">
                        <Nav.Item>
                            <Nav.Link eventKey="first">Перший похід у Яремче</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="second"> Похід на Боржаву</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="third">Похід на гору Парашку</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Col>
                <Col sm={9}>
                    <TabContent className="mt-3">
                        <TabPane eventKey="first">
                            <img className="first" src="https://restlib.com.ua/sites/default/files/styles/1920x/public/resorts/yaremche1.jpg?itok=iQv9JLAj" />
                            <p>Яре́мче (до 2006 року — Яремча) — місто обласного значення в Україні, Івано-Франківській області. 
                            Розміщене на річці Прут, на автошляху Івано-Франківськ — Рахів — Ужгород. 
                            Залізниця зв'язує місто з обласним центром, Тернополем, Києвом та Львовом. 
                            Яремче — найвідоміший кліматичний курорт Прикарпаття, туристичний цент</p>
                        </TabPane>
                        <TabPane eventKey="second">
                            <img className="second" src="https://static.ukrinform.com/photos/2019_07/thumb_files/630_360_1562348024-585.jpg" />
                            <p>
                            Полони́на Боржа́ва — гірський масив на Полонинському хребті в Українських Карпатах, між річками Віча і Рікою. 
                            Розташований у межах Воловецького, Міжгірського, Свалявського, Іршавського і (частково) Хустського районів Закарпатської області.
                            </p>
                        </TabPane>
                        <TabPane eventKey="third">
                            <img className="third" src="https://guide.karpaty.ua/uploads/article_photos/w420_1432630506-726861__w420_parashka2.jpg" />
                            <p>Пара́шка (рідко — Параска) — гора в Українських Карпатах, найвища вершина однойменного хребта (Парашка) в Сколівських Бескидах.
                            Висота 1268,5 м над рівнем моря (за іншими даними — 1271 м). 
                            Розташована на відстані 8 км на північний захід від м. Сколе Львівської області. 
                            На схилі гори встановлений пам'ятний камінь, на вершині — хрест.
                            За легендою гора названа на честь Парашки — дочки (згідно з іншими версіями — жінки) князя Святослава Володимировича, сина Володимира Великого, яка була вбита на цій горі дружинниками Святополка Окаянного в 1015 році. 
                            Цій події передувала битва між Святославом та Святополком біля міста Сколе.</p>
                        </TabPane>
                    </TabContent>
                </Col>
            </Row>
        </TabContainer>
    </Container>
        );
};
export default AboutComponent;