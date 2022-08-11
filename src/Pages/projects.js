import React from 'react';
import "../Assets/Css/tailwind.css"
import Cnav from '../Components/navbar';
import containers from '../Components/containers';
import buttons from '../Components/buttons';
class Cprojects extends React.Component{
    constructor() {
        super();
        this.tabIndex=0
    }
    tabIndex
    card(name, desc, price, index)
    {
        return(
            <containers.col key={index} className={ "w-80  relative  bg-colored-shadow  ring-blue    rounded-2xl pr-2" }>

                <p tabIndex={this.tabIndex++} title='Project Name'        className='text-white flex-1 bg-blue-300 rounded rounded-tl-2xl pl-3 sticky  z-20 w-fit pr-5'>{name}</p>
                <p tabIndex={this.tabIndex++} title='Project Description' className='pl-1 bg-gray-50 flex-4 rounded-tl-none  min-h-fit flex items-center sticky  py-10 px-3 rounded-2xl h-full pt-3 '>{desc} </p>
                <p tabIndex={this.tabIndex++} title='Project Price'       className={"text-right pr-5 flex-1"} >{price}</p>

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
    <containers.col className={"h-full"}>
        <Cnav></Cnav>
        <div className='h-90 mt-2  justify-center items-center flex'>
            <containers.grid className={" w-5/6 pb-10  gap-10 grid-cols-3 overflow-scroll scrollbar-hide   h-full rounded  "}>
            {this.cards()}
            </containers.grid>
        </div>
    </containers.col>)
}
}
export default Cprojects
