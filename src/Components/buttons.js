import React from 'react';
import "../Assets/Css/tailwind.css"
import { CopyToClipboard,OpenPhoneLink,OpenEmailLink,OpenLink } from '../helper/buttonActions';
import  containers from './containers';
 
const linkBtn=(props)=>{
 return   <button onClick={(()=>{window.location=props.jumpTo}).bind()} className={'hover:brightness-75' +props.className}>{props.name}</button>
}


const ContactBtnOnClickEvent=
    {
        "phone":OpenPhoneLink,
        "email":OpenEmailLink,
        "url":OpenLink,
        "text":CopyToClipboard
    }

const contactBtn=(props)=>{
    let OnClickEvent = ContactBtnOnClickEvent[props.type]

    return (

        <button tabIndex={props.tabIndex} title={props.title}  onClick={OnClickEvent.bind(this,props.link)}  className={" h-4 "+props.className} >{props.children}</button>

     )
}
const buttons={
    link: linkBtn,
    contact:contactBtn
}

export  default buttons
