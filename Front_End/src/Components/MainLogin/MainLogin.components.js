import React from "react";
import "../../scss/pages/login.scss";
import { Div, Nav, H2 ,Inputs } from "./buildingMainLogin/MainLogin.components";
import Logo from './mapa_mundo.png';

export default function MainLogin() {
  return (
    <Nav class="mainLogin">
      <Div class="boxMain">
        <Div class="row">
          <Div class="col-1-of-2">
            <H2 class="heading-primary" text="O Facebook ajuda você a se conectar e compartilhar com as pessoas que fazem parte da sua vida." />

            <img className="mapaMundo" src={Logo}/>
          </Div>
          <Div class="col-1-of-2">
            <p>lado 02 </p>
          </Div>
        </Div>
      </Div> 
    </Nav>
  );
}
