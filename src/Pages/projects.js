import React from 'react';
import "../Assets/Css/tailwind.css"
import Cnav from '../Components/navbar';
import containers from '../Components/containers';
import env from "../helper/env";

class Cprojects extends React.Component{
    constructor(props) {
        super(props);
        this.tabIndex=0
    }
    componentDidMount() {
        fetch(env.Backend_Base_Url+"/projects").then(c=>c.json()).then((r)=>{this.cards(r)}).catch(r=>console.log(r))
    }

    tabIndex
    card(name, desc, price,link, index)
    {
        return(
            <containers.col key={index} style={{borderColor:"#93c5fd"}} className={ "max-w-[20rem] min-w-[20rem]  bg-white  relative border-r-[2px] shadow-sm      rounded-2xl " }>

                <p tabIndex={this.tabIndex++} title='Project Name'        className='text-white z-10 flex-1 max-w-[19.2rem] bg-blue-300 rounded rounded-tl-2xl pl-3 sticky  z-20 w-fit pr-5'>{name}</p>
                <p tabIndex={this.tabIndex++} title='Project Description' className='px-3 text-center  break-all justify-center z-10 flex-4 rounded-tl-none pr-2  min-h-fit flex items-center sticky   px-3 rounded-2xl h-full pt-3 '>{desc} </p>
                <containers.row >
                    <a href={link} tabIndex={this.tabIndex++} title='Project link'    style={{borderColor:"#93c5fd"}}   className={"text-left  p-1 z-10 w-fit mr-auto px-4 "} >visit</a>
                    <p tabIndex={this.tabIndex++} title='Project Price'    style={{borderColor:"#93c5fd"}}   className={"text-right -mr-[1px] border-[2px] p-1 rounded-br-2xl z-10 w-fit ml-auto pl-4 pr-5"} >{price}</p>
                </containers.row>
            </containers.col>
        )
    }

    cards(cards)
    {

        this.state.cards= cards.map((item,index)=>{
            return this.card(item.name,item.description,item.price,item.link,index)
        })
        this.setState(this.state)
    }
state={
        cards:""
}
render(){
    return(
    <containers.col style={{background:"#f3f5f9"}} className={"h-full"}>
        <Cnav className={"bg-white"}></Cnav>
        <div className='h-90 mt-2  justify-center items-center flex'>
            <containers.grid    className={"  w-fit mx-auto  py-10  gap-10 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 overflow-scroll scrollbar-hide   h-full   "}>
            {this.state.cards}
            </containers.grid>
        </div>
    </containers.col>)
}
}
export default Cprojects
