import React from 'react';
import "../Assets/Css/tailwind.css"
import { CopyToClipboard } from '../helper/buttonActions';
import  containers from './containers';
 
const linkBtn=(props)=>{
 return   <button onClick={(()=>{window.location=props.jumpTo}).bind()} className={'hover:brightness-75' +props.className}>{props.name}</button>
}

const contactBtn=(props)=>{
    return (  
        <p tabIndex={props.tabIndex} title={props.title}  onClick={CopyToClipboard(props.link,Event).bind()}  className={" h-4 "+props.className} >{props.children}</p>

     )
}
const buttons={
    link: linkBtn,
    contact:contactBtn
}

export  default buttons
