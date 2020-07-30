import React from "react";
import "../../scss/pages/login.scss";
import { Div, Nav, Inputs } from "./buildingMainLogin/MainLogin.components";

export default function MainLogin() {
  return (
    <Nav class="mainLogin">
      <Div class="boxMain">
        <Div class="row">
          <Div class="col-1-of-2">
            <p>lado 01</p>
          </Div>
          <Div class="col-1-of-2">
            <p>lado 02 </p>
          </Div>
        </Div>
      </Div>
    </Nav>
  );
}
