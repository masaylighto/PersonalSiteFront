import React from 'react'
const CopyToClipboard=(Text,Element)=>
{
   return ()=>
    {
        console.log("hi "+Text)
        window.navigator.clipboard.writeText(Text)   
        let OldText =  Element.innerText
        Element.innerText="✓"
        setTimeout(()=>{Element.innerText=OldText},500)
    }
}
export {CopyToClipboard}