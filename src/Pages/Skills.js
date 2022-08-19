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
        return <containers.col   className={"w-64  bg-white items-center  flex   h-64  shadow-sm rounded-lg"} key={index}>
            <containers.col style={{borderColor:color}} className={"rounded-t-lg border-l-4 pl-1 mr-auto"}>
                <div style={{background:color}}  className={"h-1 rounded-tl-lg  w-10 -ml-1"}></div>
                <p tabIndex={this.tabIndex++}   title={"Skill Name"} className={" bg-white  h-7 flex items-center "}>{name}</p>


            </containers.col>
            <p tabIndex={this.tabIndex++} title={"Skill Description"} className={"m-auto px-3"}>{desc}</p>
            <containers.row className={"ml-auto h-10"}>
           <div  className={"w-10 h-full rounded-br border pt-2 pl-2"} style={{borderColor:color}}>
                <div style={{background:color}} className={"h-full pt-2 pl-2 w-full"}>
                    <div style={{background:"White"}} className={"h-full pt-2 pl-2  w-full"}>
                        <div style={{background:color}} className={"h-full  w-full"}>


                        </div>

                    </div>

                </div>
           </div>
            </containers.row>
        </containers.col >
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
