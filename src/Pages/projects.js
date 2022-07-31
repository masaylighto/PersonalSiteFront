import React from 'react';
import "../Assets/Css/tailwind.css"
import Cnav from '../Components/navbar';
import containers from '../Components/containers';
import buttons from '../Components/buttons';
class Cprojects extends React.Component{
    btn(name,desc,index)
    {
        return(
            <containers.row key={index} className={ "gap-2 " }>
                <button title='Project Name'value={name} className='w-24 h-20 flex justify-center items-center shadow rounded-full '>{name}</button>
                <button title='Project Description' className='w-full rounded-l-full rounded-tr-lg  text-sm h-20 shadow pl-4 overflow-scroll scrollbar-hide flex items-center'>{desc}</button>
            </containers.row>
        )
    }
    btns()
    {
        return [
            {
                "Name":"Python",
                "Desc":"This unit includes some Algorithms for Python programming language."
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
            },
            {
                "Name":"Python",
                "Desc":"Some Package"
            }


        ].map((item,index)=>{
            return this.btn(item.Name,item.Desc,index)
        })
    }
render(){
    return(
    <containers.col className={"h-100vmin"}>
        <Cnav></Cnav>
        <div className='h-95vmin p-10 justify-center items-center flex'>
            <containers.grid className={" w-5/6  gap-10 grid-cols-2 overflow-scroll scrollbar-hide  p-3 h-full rounded  "}>
            {this.btns()}
            </containers.grid>
        </div>
    </containers.col>)
}
}
export default Cprojects