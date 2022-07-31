import React from 'react';
import ReactDOM from 'react-dom/client';
import Chome from './Pages/home';
import "./Assets/Css/tailwind.css"
import "./Assets/Css/shared.css"
import { BrowserRouter, Route,  Routes } from 'react-router-dom';
import Cprojects from './Pages/projects';
import Cskills from './Pages/Skills';
import Cexpirences from './Pages/Expirences';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>       
   <BrowserRouter>
      <Routes>
        <Route path={"/"}  element={<Chome/>}/> 
        <Route path={"/Projects"} element={<Cprojects/>}/>   
        <Route path={"/Skills"} element={<Cskills/>}/> 
        <Route path={"/Expirences"} element={<Cexpirences/>}/>
      </Routes>
    </BrowserRouter>   
  </React.StrictMode>
);

