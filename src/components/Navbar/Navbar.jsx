import React from 'react';
import {Button} from 'react-bootstrap'
import './Navbar.css';


const NavbarComponent = () => {
    return (<div>
<nav className="navbar navbar-dark ">
<ul>
  <Button variant="contained">Головна</Button>
  <Button variant="contained" >Про нас</Button>
  <Button variant="contained">Підкорені вершини</Button>
</ul>
</nav>
<hr/>
        </div>)
};

export default NavbarComponent;