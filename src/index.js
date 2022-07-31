import React from 'react';
import ReactDOM from 'react-dom/client';

import Chome from './Pages/home';
import "./Assets/Css/tailwind.css"
import "./Assets/Css/shared.css"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode> 
      <Chome/>
  </React.StrictMode>
);

