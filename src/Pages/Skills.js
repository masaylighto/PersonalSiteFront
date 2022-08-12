import React from 'react';
import "../Assets/Css/tailwind.css"
import "../Assets/Css/shared.css"
import Cnav from '../Components/navbar';
import containers from '../Components/containers';
import {GetPrimaryColors} from "../helper/Styles";

class Cskills extends React.Component{
    constructor(props) {
        super(props);
        this.tabIndex=0
    }
    componentDidMount() {
        this.skills();
        this.catagories();
        this.setState(this.state)
    }
    tabIndex
    skill(name,desc,cata,index)
    {
        let color=GetPrimaryColors(index)
        return <containers.col   className={"w-52  bg-white items-center  flex   h-52 shadow-sm rounded"} key={index}>
            <p tabIndex={this.tabIndex++} style={{borderColor:color}}  title={"Skill Name"} className={"border-l-4 rounded-t h-7 flex items-center pl-1 mr-auto"}>{name}</p>
            <p tabIndex={this.tabIndex++} title={"Skill Description"} className={"m-auto"}>{desc}</p>
            <containers.row className={"ml-auto h-10"}>
            <p tabIndex={this.tabIndex++} title={"Skill Catagory"} style={{borderColor:color}} className={"border h-full flex px-3 items-center"}>{cata}</p>
            <div  style={{background:color}} className={"w-10 h-full rounded-br"}></div>
            </containers.row>
        </containers.col >
    }
    catagory(desc,index){
        return <option tabIndex={this.tabIndex++} className={"text-center"}  key={index}>{desc}</option>
    }
    catagories(){
        this.state.catagory=[
            "prog",
            "prog",
            "prog",
            "prog",
            "prog",
        ].map((catagory,index)=>{

            return this.catagory(catagory,index);
        })


    }
    skills()
    {

        this.state.skills =[
            {"name":"Name","description":"Devops","category":"programming"},
            {"name":"Name","description":"Devops","category":"prog"},
            {"name":"Name","description":"Devops","category":"prog"},
            {"name":"Name","description":"Devops","category":"prog"},
            {"name":"Name","description":"Devops","category":"prog"},
            {"name":"Name","description":"Devops","category":"prog"},
            {"name":"Name","description":"Devops","category":"prog"},
            {"name":"Name","description":"Devops","category":"prog"},
            {"name":"Name","description":"Devops","category":"prog"},
            {"name":"Name","description":"Devops","category":"prog"},
            {"name":"Name","description":"Devops","category":"prog"},
            {"name":"Name","description":"Devops","category":"prog"},
            {"name":"Name","description":"Devops","category":"prog"},
            {"name":"Name","description":"Devops","category":"prog"},
            {"name":"Name","description":"Devops","category":"prog"},
            {"name":"Name","description":"Devops","category":"prog"}
        ].map((item,index)=>{
                return this.skill(item.name,item.description,item.category,index)
            })

    }
    state={
        skills:"",
        catagory:""
    }
    search(){

        return <containers.row className={"w-4/5  p-2  mx-auto mt-10 mb-5"}>
           <select  tabIndex={this.tabIndex++} className={"w-52 -ml-2 border h-12 border-blue-100 h-full  shadow rounded bg-white outline-0"}>
               <option selected className={"text-center"} disabled>Select Category</option>
               {this.state.category}
            </select>
        </containers.row>
    }
render(){
    return(
        <containers.col  style={{background:"#f3f5f9"}} className={"h-100 w-full"}>
            <Cnav className={"bg-white "}></Cnav>
            {this.search()}
            <containers.scroller className={"h-full scrollbar-hide"}>
            <containers.grid   className={"w-fit mx-auto gap-12 justify-between   bg-milky  py-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1   md:m-auto "}>
                {this.state.skills}
            </containers.grid>
            </containers.scroller>
        </containers.col>)
}
}
export default Cskills
