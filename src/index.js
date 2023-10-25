import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


const root = document.getElementById('root');
ReactDOM.render(
  <App

  colorPickerOptions = {[
    "red",
    "green",
    "yellow",
    "pink",
    "indigo",
  ]}
  initialSelectedColor= {"black"}
  />,root
);
