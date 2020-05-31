import React from "react";

const isAuth = localStorage.getItem('jwt');

export default ({children, authMode}) => {
  return isAuth ? children : null;
}
