import React from 'react';
import "../Assets/Css/tailwind.css"
import "../Assets/Css/shared.css"
import Cnav from '../Components/navbar';
import containers from '../Components/containers';
import {GetPrimaryColors} from "../helper/Styles";
import env from "../helper/env";

class Cskills extends React.Component{
    constructor(props) {
        super(props);
        this.tabIndex=0
    }
    skillsData=[]

    componentDidMount() {
        fetch(env.Backend_Base_Url+"/skills").then(c=>c.json()).then(r=>this.skillsData=r).then((r)=>{this.skills(r)}).catch(r=>console.log(r))
        fetch(env.Backend_Base_Url+"/skillsCategories").then(c=>c.json()).then((r)=>{this.catagories(r)}).catch(r=>console.log(r))

    }
    tabIndex
    skill(name,desc,cata,index)
    {
        let color=GetPrimaryColors(index)
        return <containers.col   className={"w-52  bg-white items-center  flex   h-52 shadow-sm rounded"} key={index}>
            <p tabIndex={this.tabIndex++}  style={{borderColor:color}}  title={"Skill Name"} className={"border-l-4 rounded-t h-7 flex items-center pl-1 mr-auto"}>{name}</p>
            <p tabIndex={this.tabIndex++} title={"Skill Description"} className={"m-auto"}>{desc}</p>
            <containers.row className={"ml-auto h-10"}>
            <p tabIndex={this.tabIndex++} title={"Skill Catagory"} style={{borderColor:color}} className={"border h-full flex px-3 items-center"}>{cata}</p>
            <div  style={{background:color}} className={"w-10 h-full rounded-br"}></div>
            </containers.row>
        </containers.col >
    }
    catagory(desc,index){
        return <option tabIndex={this.tabIndex++} className={"text-center"} value={desc}  key={index}>{desc}</option>
    }
    catagories(catagories){
        catagories.push("All");
        this.state.catagory= catagories.map((catagory,index)=>{
            return this.catagory(catagory,index);
        })
        this.setState(this.state)
    }
    skills(skills)
    {

        this.state.skills =  skills.map((skill,index)=>{
            return this.skill(skill.name,skill.description,skill.category,++index)
        })
        this.setState(this.state)
    }
    state={
        skills:"",
        catagory:""
    }
    SelectCatagory(event){
        let skill = this.skillsData.filter((v,i,a)=>{
            return  event.target.value==="All" || v["category"]===event.target.value
        })
        this.skills(skill);
        this.setState(this.data)
    }
    catagorySelect(){

        return <containers.row className={"w-4/5  p-2  mx-auto mt-10 mb-5"}>
           <select onChange={((event)=>this.SelectCatagory(event)).bind()}  tabIndex={this.tabIndex++} className={"w-52 -ml-2 border h-12 border-blue-100 h-full  shadow rounded bg-white outline-0"}>
               <option selected className={"text-center"} disabled>Select Category</option>
               {this.state.catagory}
            </select>
        </containers.row>
    }
render(){
    return(
        <containers.col  style={{background:"#f3f5f9"}} className={"h-100 w-full"}>
            <Cnav className={"bg-white "}></Cnav>
            {this.catagorySelect()}
            <containers.scroller className={"h-full scrollbar-hide"}>
            <containers.grid   className={"w-fit mx-auto gap-12 justify-between   bg-milky  py-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1   md:m-auto "}>
                {this.state.skills}
            </containers.grid>
            </containers.scroller>
        </containers.col>)
}
}
export default Cskills
