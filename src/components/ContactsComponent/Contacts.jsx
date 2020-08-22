import React from 'react';
import { Container, FormGroup, FormLabel, FormControl, FormText, Form, Button, FormCheck } from 'react-bootstrap';

const ContactsComponent = () => {
    return (
        <Container style={{width: '500px'}}>
        <h1 className="text-center">Зв'яжіться з нами</h1>
        <Form>
            <FormGroup controlId="formBasicEmail">
                <FormLabel>Email address</FormLabel>
                <FormControl type="email" placeholder="введіть свій email"/>
                <FormText>
                    Ми не несемо відповідальність за збереження ващіх особистих даних
                </FormText>
            </FormGroup>

            <FormGroup controlId="fromBasicPassword">
                <FormLabel>Example textarea</FormLabel>
                <FormControl as="textarea" rows="5"/>
            </FormGroup>


            <FormGroup controlId="fromBasicCheckbox">
               <FormCheck type="checkbox" label="Перевір мене"/>
            </FormGroup>
            <Button variant="primary" type="submit">Надіслати</Button>
        </Form>
        </Container>
    );
};

export default ContactsComponent;

