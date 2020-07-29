import React from "react";
import "../../scss/pages/login.scss"; 
import { Nav, Div, DivTeste, Inputs } from "./buildingHeader/Header.components";

export default function Header() {
  return ( 
    <header className="header">
      <Nav class="navbar">    
        <DivTeste class="logo" text="facebook" />

        <DivTeste class="box-inputLabelTop">
          <DivTeste class="box-inputLabelTop_label" text="Email ou Telefone" />

          <DivTeste class="box-inputLabelTop_label" text="Senha" />
        </DivTeste>
        <Div class="box-input">
          <Inputs textPlace="Digite seu login..." type="text" class="box-input_Login" />

          <Inputs textPlace="Digite sua Senha..." type="password" class="box-input_Login" />

          <DivTeste class="button button--blue button--small" text="Entrar" />
        </Div>

        <DivTeste class="box-inputLabelBottom">
          <DivTeste
            class="box-inputLabelBottom_label"
            text="Esqueceu a conta?"
          />
        </DivTeste>
      </Nav>
    </header>
  );
}
  