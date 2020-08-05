import React from 'react';
import {BrowserRouter, Route, Switch, Link} from "react-router-dom";


import './App.css';
import HeaderComponent from './components/HeaderComponent/Header';
import HomeComponent from './components/HomeComponent/Home'
import ContactsComponent from './components/ContactsComponent/Contacts';
import RoutesComponent from './components/RoutesComponent/Routes';
import AboutComponent from './components/AboutComponent/About';
const App = () => {
  return (<div className="App">
    <HeaderComponent/>
    <BrowserRouter>
    <Switch>
    <Route exact path="/" component={HomeComponent}/>
    <Route exact path="/about" component={AboutComponent}/>
    <Route exact path="/contacts" component={ContactsComponent}/>
    <Route exact path="/routes" component={RoutesComponent}/>
    </Switch>
    </BrowserRouter>
    </div>);
}

export default App;
