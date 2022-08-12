import React from 'react';
import "../Assets/Css/tailwind.css"
import Cnav from '../Components/navbar';
import containers from '../Components/containers';
import buttons from '../Components/buttons';
import {GetPrimaryColors} from "../helper/Styles";
class CExpirences extends React.Component{
    constructor(props) {
        super(props);
        this.tabIndex=0;
    }
    tabIndex
    componentDidMount() {

        this.prevJops([
            {"name":"EarthLink","description":"worked for 7 years as devops"},
            {"name":"EarthLink","description":"worked for 7 years as devops"},
            {"name":"EarthLink","description":"worked for 7 years as devops"},
            {"name":"EarthLink","description":"worked for 7 years as devops"},
            {"name":"EarthLink","description":"worked for 7 years as devops"},


        ]);
        this.setState(this.state)
    }
    prevJop(name,desc,index){
        let color =GetPrimaryColors(index);
        return <containers.col key={index} className={"bg-white   py-3 gap-y-3 max-w-[200px] min-w-[200px] min-h-[200px] rounded shadow-sm"}>
            <p tabIndex={this.tabIndex++} title={"Name"} style={{borderColor:color}} className={"h-1/5 w-fit border mx-auto px-2  rounded flex justify-center items-center"}>{name}</p>
            <p tabIndex={this.tabIndex++} title={"Description"} style={{borderColor:color}} className={"text-md px-5 h-fit my-auto items-center border-x flex"}>{desc}</p>
        </containers.col>
    }
    prevJops(PrevJops){
        this.state.prevJops=PrevJops.map((item,index)=>{
        return this.prevJop(item.name,item.description,index);
        })
    }
    state={
        prevJops:""
    }
render(){

    return  (
        <containers.col style={{background:"#f3f5f9"}} className={"h-[100%] w-full"}>
            <Cnav></Cnav>
            <containers.scroller className={"scrollbar-hide h-[100%] w-full mt-5"}>
                <containers.warp className={"gap-5 justify-center  my-auto h-fit w-5/6 mx-auto"}>
                    {this.state.prevJops}
                </containers.warp>
            </containers.scroller>
        </containers.col>)
}
}
export default CExpirences
