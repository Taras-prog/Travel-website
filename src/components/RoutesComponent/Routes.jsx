import React from 'react';
import {Container, Col, Row, Media, Card, ListGroup, ListGroupItem} from 'react-bootstrap';

const RoutesComponent = () => {
    return (
      <Container>
        <Row>
            <Col md="9">
            <Media className="m-5">
             <img  
                width={150}
                height={150}
                className="mr-3"
                src="https://img.tsn.ua/cached/1533908292/tsn-8c5f6b23d1211bb14030cc3abd4583f7/thumbs/x/bf/74/1d750cdae19c5075e0123ec455ee74bf.jpeg"
                />

                <Media.Body>
                <h4>Наші походи</h4>
                <p>Говерла – найвища точка українських Карпат. Гора розташовується на межі 
                5 подорожей Івано-Франківщиною: від місць, де спалювали "упирів" до тих, де відпочивають президенти
                Івано-Франківської та Закарпатської областей. 
                Одні із найпопулярніших поселень для старту подорожі до вершини – Ворохта, Яремче та Верховина. 
                Населені пункти розташовані за рейтингом популярності серед туристів, тому зважайте, 
                що важливіше – чи нові знайомства отримати, чи побути наодинці з природою.</p>
                    </Media.Body>
                </Media>
            </Col>

            <Col md="3">
            <h4 className="mt-5">Категорії</h4>
                <Card>
                    <ListGroup variant="flush">
                        <ListGroupItem>Говерла</ListGroupItem>
                        <ListGroupItem>Боржава</ListGroupItem>
                        <ListGroupItem>Яремче</ListGroupItem>
                    </ListGroup>
                </Card>
            </Col>
        </Row>
      </Container>
    );
};

export default RoutesComponent;
 