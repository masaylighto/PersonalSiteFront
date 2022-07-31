import React from 'react';
import buttons from './buttons';
import containers from './containers';

class Cnav extends React.Component{

    btn(name,link,key){

        return <buttons.link key={key} name={name} jumpTo={link} className={"px-4 h-10  hover:border-t-2 border-t-blue-300"}/>
    }
    pageBtns(){
    return     [
            {
                "Name":"Home",
                "Url":"/"
            },
            {
                "Name":"Skills",
                "Url":"/Skills"
            },
            {
                "Name":"Projects",
                "Url":"/Projects"
            }, 
            {
                "Name":"Expirences",
                "Url":"/Expirences"
            }, 
        ]
        .map((item,index)=>{
            return this.btn(item.Name,item.Url,index)
        })
    }
    startSide(){
        return(
            <containers.row  className={"justify-center items-center px-3 gap-2"}>               
                <p style={{color:"#628cfb"}} className={"flex gap-2 items-end"} >Ali  <img src={require("../Assets/icons/freedo.png")} className={"logo w-7 h-7 hover:scale-110  bg-no-repeat bg-contain"}/> Miracle</p>
            </containers.row >
        )
    }
    endSide(){
        return (
            <containers.row  className={" mt-1 justify-evenly w-2/5"}>{this.pageBtns()}</containers.row>
        )
    }
    render(){

        return (<containers.row  className={"w-full  "}>   
                  {this.startSide()}
                  {this.endSide()}  
                 
                      
                </containers.row>)
    }
}
export default Cnav