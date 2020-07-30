import React from "react";

export const Inputs = function Inputs(props) {
  return (
    <input
      type={props.type}
      className={props.class}
      placeholder={props.textPlace}
    />
  );
};

export const Div = function Div(props) {
  return (
    <div className={props.class}>
      {props.text}
      {props.children}
    </div>
  );
};

 

export const Nav = function Nav(props) {
  return (
  <nav className={props.class}>
  {props.children}
  </nav>);
};
