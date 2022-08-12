import React from 'react';
import "../Assets/Css/tailwind.css"
import Cnav from '../Components/navbar';
import containers from '../Components/containers';
import buttons from '../Components/buttons';
class Chome extends React.Component{

    componentDidMount() {
        let contacts=[{
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
        ]
        this.contactUs(contacts)
        this.setState(this.state)
    }

    contactUs(contacts){
        this.state.contacts= contacts
            .map((item,index)=>{
            return <buttons.contact tabIndex={index+16} title={item.link}  className={"hover:-translate-x-2"} key={index} link={item.link} img={item.img}/>

        })
    }
    aboutUs(){
        return (

            <p className={"w-full flex-warp flex flex-col border-l pl-1 border-black"}>
            <div tabIndex={1}  className='hover:translate-x-1'> I am <span style={{color:"#628cfb"}} className=' w-fit'>Ali Abdul Ghani</span></div>        
            <div tabIndex={2} className='hover:translate-x-1'> I'm from Baghdad. I go by the name  <span style={{color:"#628cfb"}} className=' w-fit'>"Ali Miracle"</span>,</div>
            <div tabIndex={3} className='hover:translate-x-1'> am known by this name on the internet, and have been  </div>
            <div tabIndex={4} className='hover:translate-x-1'> referred to by this name ever since I was a Solaris user. </div>     
            <div tabIndex={5} className='hover:translate-x-1'> I like to tell jokes, I like it when people laugh until</div>
            <div tabIndex={6} className='hover:translate-x-1'> they can't breathe, it makes me happy.</div>
            <div tabIndex={7} className='hover:translate-x-1'> My education is bachelor of English literature ,</div>
            <div tabIndex={8} className='hover:translate-x-1'> As the laws in Iraq does not permit blind people</div> 
            <div tabIndex={9} className='hover:translate-x-1'> from obtaining degrees in computer science or any other </div>
            <div tabIndex={10} className='hover:translate-x-1'> scientific field, such as mathematics or physics.</div>
            </p>
        )
    }
    startSide(){

        return (
            <div className='w-full sm:order-1 order-2'>
                <containers.row className='mx-auto gap-3 w-4/6'>
                    <containers.col  className={"  justify-between py-1"}>
                       {this.state.contacts}
                    </containers.col>
                    {this.aboutUs()}
                </containers.row>
            </div>
        )
    }
    endSide(){
        return (       
        <containers.grid className='sm:w-[27rem] w-full sm:order-2 order-1 bg-main-graidant  sm:items-center ml-auto  sm:grid-cols-2 grid-cols-1   md:gap-2   sm:h-full h-[500px]'>
            <div className={" sm:mx-0 mx-auto bg-gradiant-blue md:mt-0  mt-5  rounded-full w-[15rem] h-[15rem] p-6 "}>
                <div style={{background:"#ffffff96"}} className={"e  rounded-full p-3  w-full h-full"}>
                <img src={require("../Assets/icons/freedo.png")} className={"bg-contain  hover:animate-bounce w-full h-full "} ></img>
                </div>
            </div>
            <containers.col className={"text-white mx-auto md:mx-0 md:gap-y-0 gap-y-3 w-fit justify-between mb-5 h-2/6"}>
                <p tabIndex={11} className='sm:-ml-9 text-center md:text-start hover:-translate-y-1'>Devops Engineer</p>
                <p tabIndex={12} className='sm:-ml-3 text-center md:text-start hover:-translate-y-1 hover:translate-x-1'>Software Developer</p>
                <p tabIndex={13} className='sm:-ml-2 text-center md:text-start hover:translate-x-1'>Free Software Activist</p>
                <p tabIndex={14} className='sm:-ml-3 text-center md:text-start hover:translate-y-1 hover:translate-x-1'>System Adminstrator</p>
                <p tabIndex={15} className='sm:-ml-6 text-center md:text-start hover:translate-y-1 '>Data Scientist</p>
            </containers.col>
        </containers.grid>
        )
    }
    state={
        contacts:""
    }
    render(){

        return <containers.col className={"h-full "}>
            <Cnav></Cnav>
            <containers.grid className={"w-full overflow-scroll scrollbar-hide sm:grid-cols-2  gap-y-10 grid-cols-1 justify-evenly sm:h-[95%] h-[200%] items-center"}>
                {this.startSide()}
                {this.endSide()}
            </containers.grid>
        </containers.col>
    }
}
export default Chome

