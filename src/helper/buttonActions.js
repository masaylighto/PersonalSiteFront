import React from 'react'
const CopyToClipboard=(Text,Element)=>
{
    Element=Element.target
    window.navigator.clipboard.writeText(Text)
    Element.style.color="#62fb76"
    let OriginalFontSize=Element.style.fontSize;
    let OldText =  Element.innerText
    Element.innerText="✓"
    Element.style.fontSize="24px"
    setTimeout(()=>{
        Element.innerText=OldText;
        Element.style.color="black";
        Element.style.fontSize=OriginalFontSize
    },500)
}
const OpenLink=(link,_)=>
{
    window.open(link, '_blank').focus();
}
const OpenEmailLink=(link,_)=>
{
     window.open("mailto:"+link, '_blank').focus();
}
const OpenPhoneLink=(link,_)=>
{
    window.open("tel:"+link, '_blank').focus();
}
export {CopyToClipboard,OpenPhoneLink,OpenEmailLink,OpenLink}
