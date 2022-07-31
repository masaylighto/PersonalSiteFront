import React from 'react';
import "../Assets/Css/tailwind.css"
import Cnav from '../Components/navbar';
import containers from '../Components/containers';
import buttons from '../Components/buttons';
class Cskills extends React.Component{
render(){
    return(
        <containers.col className={"h-100vmin"}>
            <Cnav></Cnav>
            <containers.row className={"w-full justify-evenly h-95vmin items-center"}>
            
            </containers.row>
        </containers.col>)
}
}
export default Cskills