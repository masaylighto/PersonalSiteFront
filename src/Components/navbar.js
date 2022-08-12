import React from 'react';
import buttons from './buttons';
import containers from './containers';

class Cnav extends React.Component{

    btn(name,link,key){

        return <buttons.link title={"navbar btn"} key={key} name={name} jumpTo={link} className={"px-4 h-10 text-center flex-1 hover:border-t-2 border-t-blue-300"}/>
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

    render(){

        return (<div className={"w-full  " +this.props.className}>
                    <div  className={"flex flex-wrap  w-fit sm:justify-evenly gap-10 items-center px-3 gap-2"}>
                        <p style={{color:"#628cfb"}} className={"flex gap-2 items-end"} >
                            Ali
                            <img src={require("../Assets/icons/freedo.png")} className={"logo w-7 h-7 hover:scale-110  bg-no-repeat bg-contain"}/>
                            Miracle
                        </p>
                        {this.pageBtns()}
                    </div >
                </div>)
    }
}
export default Cnav
