// import React from 'react';
import ReactDOM from 'react-dom/client';
import { AliveScope } from 'react-activation';
import { BrowserRouter } from "react-router-dom";
import App from './App.tsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
  // <Provider {...store}>
  <BrowserRouter>
    <AliveScope>
      <App />
    </AliveScope>
  </BrowserRouter>
  // </Provider>
  // </React.StrictMode>
)
