import React from 'react';
import "../Assets/Css/tailwind.css"
import Cnav from '../Components/navbar';
import containers from '../Components/containers';
import buttons from '../Components/buttons';
class Cprojects extends React.Component{
    btn(name,desc,index)
    {
        return(
            <containers.row key={index} className={ "w-2/5 " }>
                <div className='w-20 h-20 shadow rounded-full '></div>
            </containers.row>
        )
    }
    btns()
    {
        return [
            {
                "Name":"Python",
                "Desc":"Some Package"
            },
            {
                "Name":"Python",
                "Desc":"Some Package"
            },
            {
                "Name":"Python",
                "Desc":"Some Package"
            },
            {
                "Name":"Python",
                "Desc":"Some Package"
            },
            {
                "Name":"Python",
                "Desc":"Some Package"
            },
            {
                "Name":"Python",
                "Desc":"Some Package"
            }

        ].map((item,index)=>{
            return this.btn(item.name,item.desc,index)
        })
    }
render(){
    return(
    <containers.col className={"h-100vmin"}>
        <Cnav></Cnav>
        <div className='h-95vmin justify-center items-center flex'>
            <containers.grid className={" w-5/6 grid-cols-2 overflow-scroll  p-3 h-4/5 rounded shadow "}>
            {this.btns()}
            </containers.grid>
        </div>
    </containers.col>)
}
}
export default Cprojects