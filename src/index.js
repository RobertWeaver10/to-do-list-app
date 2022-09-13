import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App.js'


const container = document.getElementById('root');

//Create a root
const root = ReactDOMClient.createRoot(container);

root.render(<App />);
