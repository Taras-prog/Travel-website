import React from "react";
import {
  Navbar,
  Container,
  Nav,
  Form,
  Button,
  FormControl,
  
} from "react-bootstrap";
import "./Header.css";
import logo from "../../images/470-4703547_icon-user-icon-hd-png-download.png";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import {BrowserRouter, Route, Switch, Link} from "react-router-dom";
// import RoutesComponent from "../RoutesComponent/Routes";
// import HomeComponent from "../HomeComponent/Home";
// import ContactsComponent from "../ContactsComponent/Contacts";
// import AboutComponent from "../AboutComponent/About";


const HeaderComponent = () => {
  return (
    <>
    <BrowserRouter>
      <Navbar fixed="top" collapseOnSelect expand="md" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">  
            <img src={logo} className="d-inline-block align-top" alt="Logo" />
            Наші подорожі
          </Navbar.Brand>
          <NavbarToggle aria-controls="responsive-navbar-nav" />
          <NavbarCollapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/"> Головна </Nav.Link>
              <Nav.Link href="/about"> Про нас </Nav.Link>
              <Nav.Link href="/contacts"> Контакти </Nav.Link>
              <Nav.Link href="/routes"> Маршрути </Nav.Link>
            </Nav>
            <Form inline>
              <FormControl
                type="text"
                placeholder="Пошук"
                className="mr-sm-2"
              />
              <Button variant="outline-info">Пошук</Button>
            </Form>
          </NavbarCollapse>
        </Container>
      </Navbar>
</BrowserRouter>
   
    </>
  );
};

export default HeaderComponent;
