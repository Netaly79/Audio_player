import React from 'react';
import ReactDOM from 'react-dom';
import {Container} from "./Container";


const placeWeWantToPutComponent = document.getElementById('hook');
console.log (placeWeWantToPutComponent);

  ReactDOM.render(<Container />, placeWeWantToPutComponent);