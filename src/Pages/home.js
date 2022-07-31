import React from 'react';
import "../Assets/Css/tailwind.css"
import Cnav from '../Components/navbar';
import containers from '../Components/containers';
import buttons from '../Components/buttons';
class Chome extends React.Component{

    
    contactUs(){
        return [
            {
                "link":"+96407716803406",
                "img":require("../Assets/icons/Phone.png")
            },
            {
                "link":"@alimiracle",
                "img":require("../Assets/icons/telegram.png")
            },
            {
                "link":"linkedin",
                "img":require("../Assets/icons/linkedin.png")
            },
            {
                "link":"github",
                "img":require("../Assets/icons/Github.png")
            },

        ].map((item,index)=>{
            return <buttons.contact  key={index} link={item.link} img={item.img}/>

        })
    }
    aboutUs(){
        return (

            <p className={"w-full border-l pl-1 border-black"}>
            I am <span style={{color:"#95B2FF"}} className=' w-fit'>Ali Abdul Ghani</span>
            <br/>
             based in Baghdad. People call me ‘Ali Miracle’ <br/> and I am known by this name on the internet.
            This name came to me when I was a Solaris user. I like to tell jokes, I like it when people laugh until they can’t breathe, it makes me happy
            My Education Bachelor of English Literature 2015 I was not allowed to get a degree in Computer Science in Iraq. The law here does not allow blind
            people to obtain a degree in Computer Science or any scientific stream such as Mathematics or Physics.
            </p>
        )
    }
    render(){

        return <containers.col className={"h-100vmin bg-main-graidant"}>
            <Cnav></Cnav>
            <containers.row className={"w-full justify-evenly h-95vmin items-center"}>
            <div className='w-3/5'>
                <containers.row className='mx-auto gap-3 w-4/6'>
                <containers.col  className={"  justify-between py-1"}>
                       {this.contactUs()}
                    </containers.col>
                  {this.aboutUs()}
          
                </containers.row>
                </div>
                <containers.row className='w-2/5 flex justify-start gap-2  items-center h-4/5'>
                   
                    <div className={" w-3/6 bg-gradiant-blue rounded-full p-6 h-3/5"}>
                        <div className={"  bg-white rounded-full p-3  w-full h-full"}>
                            <img src={require("../Assets/icons/freedo.png")} className={"bg-contain    w-full h-full "} ></img>
                        </div>
                    </div>
                    <containers.col className={"text-white justify-between mb-5 h-2/5"}>
                        <p className='-ml-6'>Devops Engineer</p>
                        <p className='-ml-1'>Software Developer</p>
                        <p>Free Software Activist</p>                        
                        <p className='-ml-1'>System Adminstrator</p>
                        <p className='-ml-5'>Data Scientist</p>
                    </containers.col>
                </containers.row>
             
            </containers.row>
        </containers.col>
    }
}
export default Chome

