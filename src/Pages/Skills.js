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

    }
    tabIndex
    skill(name,desc,cata,index)
    {
        let color=GetPrimaryColors(index)
        return <containers.col   className={"w-52  bg-white items-center  flex   h-52 shadow-sm rounded"} key={index}>
            <p tabIndex={this.tabIndex++}  style={{borderColor:color}}  title={"Skill Name"} className={"border-l-4 rounded-t h-7 flex items-center pl-1 mr-auto"}>{name}</p>
            <p tabIndex={this.tabIndex++} title={"Skill Description"} className={"m-auto"}>{desc}</p>
            <containers.row className={"ml-auto h-10"}>
           <div  className={"w-10 h-full rounded-br border"} style={{borderColor:color}}>

           </div>
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

render(){
    return(
        <containers.col  style={{background:"#f3f5f9"}} className={"h-100 w-full"}>
            <Cnav className={"bg-white "}></Cnav>
            <containers.scroller className={"h-full scrollbar-hide"}>
            <containers.grid   className={"w-fit mx-auto gap-12 justify-between   bg-milky  py-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1   md:m-auto "}>
                {this.state.skills}
            </containers.grid>
            </containers.scroller>
        </containers.col>)
}
}
export default Cskills
