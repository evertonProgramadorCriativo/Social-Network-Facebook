import React from "react";
import "../../scss/pages/login.scss"; 
import { Nav, Div, BoxInput, Inputs } from "./buildingHeader/Header.components";

export default function Header() {
  return ( 
    <header className="header"> 
      <Nav class="navbar">    
        <Div class="logo" text="facebook" />

        <Div class="box-inputLabelTop">
          <Div class="box-inputLabelTop_label" text="Email ou Telefone" />

          <Div class="box-inputLabelTop_label" text="Senha" />
        </Div>
        <BoxInput>
          <Inputs textPlace="Digite seu login..." type="text" class="box-input_Login" />

          <Inputs textPlace="Digite sua Senha..." type="password" class="box-input_Login" />

          <Div class="button button--blue button--small" text="Entrar" />
        </BoxInput>

        <Div class="box-inputLabelBottom">
          <Div
            class="box-inputLabelBottom_label"
            text="Esqueceu a conta?"
          />
        </Div>
      </Nav>
    </header>
  );
}
  