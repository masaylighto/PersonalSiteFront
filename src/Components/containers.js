import React from 'react';

function row(props){
    return (<div  style={props.style} className={'flex flex-row ' +props.className}>
        {props.children}
    </div>
    )
}
function col(props){
    return (<div style={props.style} className={'flex flex-col ' +props.className}>
            {props.children}
    </div>)
}
function grid(props){
    return (<div style={props.style} className={'grid ' +props.className}>
            {props.children}
    </div>)
}
function scroller(props){
    return (<div style={props.style} className={'flex overflow-scroll ' +props.className}>
        {props.children}
    </div>)
}
function wrap(props){
    return (<div style={props.style} className={'flex flex-wrap ' +props.className}>
        {props.children}
    </div>)
}
const containers={
    row:row,
    col:col,
    grid:grid,
    scroller:scroller,
    warp:wrap
}



export  default containers
