import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));

const kitten = { imgURL: 'https://placekitten.com/200/100' };
const element = <img src={kitten.imgURL}></img>;

root.render(element);