import React from 'react';
import "../Assets/Css/tailwind.css"
import { CopyToClipboard } from '../helper/buttonActions';
import  containers from './containers';
 
const linkBtn=(props)=>{
 return   <button onClick={(()=>{window.location=props.jumpTo}).bind()} className={'hover:brightness-75' +props.className}>{props.name}</button>
}

const contactBtn=(props)=>{
    return (  
        <img tabIndex={props.tabIndex} title={props.title}  onClick={CopyToClipboard(props.link,Event).bind() } src={props.img} className={"w-5 h-4 "+props.className} ></img>

     )
}
const buttons={
    link: linkBtn,
    contact:contactBtn
}

export  default buttons
