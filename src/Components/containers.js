import React from 'react';

function row(props){
    return (<div className={'flex flex-row ' +props.className}>
        {props.children}
    </div>
    )
}
function col(props){
    return (<div className={'flex flex-col ' +props.className}>
            {props.children}
    </div>)
}
function grid(props){
    return (<div className={'grid ' +props.className}>
            {props.children}
    </div>)
}
const containers={
    row:row,
    col:col,
    grid:grid

}



export  default containers