import React, { Component } from "react";

import {
  Route,
  NavLink,
  HashRouter
  } from "react-router-dom";
import QuienesSomos from "./QuienesSomos";
import Servicios from "./Servicios";
import Proyectos from "./Proyectos";
import Contacto from "./Contacto";


class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1>ADI Arquitectura, Diseño y Ilustración</h1>
          <ul className="header">
            <li><NavLink exact to="/">Quienes Somos</NavLink></li>
            <li><NavLink to="/servicios">Servicios</NavLink></li>
            <li><NavLink to="/proyectos">Proyectos</NavLink></li>
            <li><NavLink to="/contacto">Contacto</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={QuienesSomos}/>
            <Route path="/servicios" component={Servicios}/>
            <Route path="/proyectos" component={Proyectos}/>
            <Route path="/contacto" component={Contacto}/>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default Main;
