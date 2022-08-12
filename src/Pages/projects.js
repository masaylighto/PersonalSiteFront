import React from 'react';
import "../Assets/Css/tailwind.css"
import Cnav from '../Components/navbar';
import containers from '../Components/containers';

class Cprojects extends React.Component{
    constructor(props) {
        super(props);
        this.tabIndex=0
    }
    tabIndex
    card(name, desc, price, index)
    {
        return(
            <containers.col key={index} style={{borderColor:"#93c5fd"}} className={ "max-w-[20rem]  bg-white  relative border-r-[2px] shadow-sm      rounded-2xl " }>

                <p tabIndex={this.tabIndex++} title='Project Name'        className='text-white z-10 flex-1 bg-blue-300 rounded rounded-tl-2xl pl-3 sticky  z-20 w-fit pr-5'>{name}</p>
                <p tabIndex={this.tabIndex++} title='Project Description' className='pl-1 break-words  z-10 flex-4 rounded-tl-none pr-2  min-h-fit flex items-center sticky  py-10 px-3 rounded-2xl h-full pt-3 '>{desc} </p>
                <p tabIndex={this.tabIndex++} title='Project Price'    style={{borderColor:"#93c5fd"}}   className={"text-right -mr-[1px] border-[2px] p-1 rounded-br-2xl z-10 w-fit ml-auto pr-5 "} >{price}</p>

            </containers.col>
        )
    }

    cards()
    {
        return [
            {
                "Name":"Python",
                "Desc":"This unit includes some Algorithms for Python programming language.",
                "Price":"123$"
            },
            {
                "Name":"Python",
                "Desc":"Some Package",
                "Price":"123$"
            },
            {
                "Name":"Python",
                "Desc":"Some Package",
                "Price":"Free"
            },
            {
                "Name":"Python",
                "Desc":"Some Package",
                "Price":"123$"
            },
            {
                "Name":"Python",
                "Desc":"Some Package",
                "Price":"123$"
            },
            {
                "Name":"Python",
                "Desc":"Some Package",
                "Price":"123$"
            },
            {
                "Name":"Python",
                "Desc":"Some Package",
                "Price":"123$"
            },
            {
                "Name":"Python",
                "Desc":"Some Package",
                "Price":"123$"
            },
            {
                "Name":"Python",
                "Desc":"Some Package",
                "Price":"123$"
            },
            {
                "Name":"Python",
                "Desc":"Some Package",
                "Price":"123$"
            },
            {
                "Name":"Python",
                "Desc":"Some Package",
                "Price":"123$"
            },
            {
                "Name":"Python",
                "Desc":"Some Package",
                "Price":"123$"
            },
            {
                "Name":"Python",
                "Desc":"Some Package",
                "Price":"123$"
            },
            {
                "Name":"Python",
                "Desc":"Some Package",
                "Price":"123$"
            },
            {
                "Name":"Python",
                "Desc":"Some Package",
                "Price":"123$"
            }



        ].map((item,index)=>{
            return this.card(item.Name,item.Desc,item.Price,index)
        })
    }

render(){
    return(
    <containers.col style={{background:"#f3f5f9"}} className={"h-full"}>
        <Cnav className={"bg-white"}></Cnav>
        <div className='h-90 mt-2  justify-center items-center flex'>
            <containers.grid    className={"  w-fit mx-auto  py-10  gap-10 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 overflow-scroll scrollbar-hide   h-full   "}>
            {this.cards()}
            </containers.grid>
        </div>
    </containers.col>)
}
}
export default Cprojects
