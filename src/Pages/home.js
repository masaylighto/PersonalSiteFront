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
            return <buttons.contact  className={"hover:-translate-x-2"} key={index} link={item.link} img={item.img}/>

        })
    }
    aboutUs(){
        return (

            <p className={"w-full border-l pl-1 border-black"}>
            <div className='hover:translate-x-1'> I am <span style={{color:"#628cfb"}} className=' w-fit'>Ali Abdul Ghani</span></div>        
            <div className='hover:translate-x-1'> I'm from Baghdad. I go by the name  <span style={{color:"#628cfb"}} className=' w-fit'>"Ali Miracle"</span>,</div>
            <div className='hover:translate-x-1'> am known by this name on the internet, and have been  </div>
            <div className='hover:translate-x-1'> referred to by this name ever since I was a Solaris user. </div>     
            <div className='hover:translate-x-1'> I like to tell jokes, I like it when people laugh until</div>
            <div className='hover:translate-x-1'> they can't breathe, it makes me happy.</div>
            <div className='hover:translate-x-1'> My education is bachelor of English literature ,</div>
            <div className='hover:translate-x-1'> As the laws in Iraq does not permit blind people</div> 
            <div className='hover:translate-x-1'> from obtaining degrees in computer science or any other </div>
            <div className='hover:translate-x-1'> scientific field, such as mathematics or physics.</div>
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
                        <div style={{background:"#ffffff96"}} className={"e  rounded-full p-3  w-full h-full"}>
                            <img src={require("../Assets/icons/freedo.png")} className={"bg-contain  hover:animate-bounce w-full h-full "} ></img>
                        </div>
                    </div>
                    <containers.col className={"text-white justify-between mb-5 h-2/5"}>
                        <p className='-ml-8 hover:-translate-y-1'>Devops Engineer</p>
                        <p className='-ml-3 hover:-translate-y-1 hover:translate-x-1'>Software Developer</p>
                        <p className='-ml-2 hover:translate-x-1'>Free Software Activist</p>                        
                        <p className='-ml-3 hover:translate-y-1 hover:translate-x-1'>System Adminstrator</p>
                        <p className='-ml-5 hover:translate-y-1 '>Data Scientist</p>
                    </containers.col>
                </containers.row>
             
            </containers.row>
        </containers.col>
    }
}
export default Chome

