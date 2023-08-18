// import React, { useEffect, useState } from "react";
import githubIcon from "./Icons/github.svg";
import linkIcon from "./Icons/link.svg";

function Project(props){
    // const [classes,setClasses] = useState(["right-border","left-border"]);
    // const classs1 = props.num%2?"left-border":"right-border";
    // const classs2 = props.num%2?"right-border":"left-border";

    return( 
        <div className={`ml-auto mr-auto w-[95%] md:flex xl:w-[1150px] pt-10 ${props.num % 2 === 1 ? 'flex-row' : 'flex-row-reverse'}`}>
            <div className="bg-[#374151] flex justify-center initial-border-top items-center md:w-[50%] md:rounded-none">
                <img className="transition duration-3 ease-in-out hover:scale-105 w-[90%] p-5 md:h-[355px] lg:pt-10 lg:pb-10" src={props.img} alt="Weather"/>
            </div>
            <div className="bg-[#1f2937] initial-border-bottom md:w-[50%] md:rounded-none">
                <div className="w-[95%] ml-auto mr-auto p-5 lg:p-10 lg:pb-5">
                    <h1 className="text-[#f9fafb] font-bold pb-4">{props.name}</h1>
                    <p className="text-[#f9fafb] pb-4">{props.about}</p>
                    <div className="flex flex-wrap gap-2 font-Cinzel">
                    {props.tech.map((item) => 
                        <p className="flex items-center justify-center rounded-xl text-[#f9fafb] bg-[#374151] px-5 py-1">{item}</p>
                    )}
                    </div>
                </div>
                <div className="flex gap-5 pl-7 pb-10 lg:pl-14">
                <a href={props.github} target="blank" className="hover:bg-[#374151] rounded-sm p-1"><img className="w-[20px]" src={githubIcon} alt="Github"/></a>
                <a href={props.link} target="blank" className="hover:bg-[#374151] rounded-sm p-1"><img className="w-[20px]" src={linkIcon} alt="Link"/></a>
                </div>
            </div>
        </div>
    )
}

export default Project;