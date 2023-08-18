import React from "react";

function Skills(props){
    return(
        <div className="flex flex-col justify-center items-center md:w-[1/4] lg:w-[1/7] xl:w-[1/7] 2xl:w-[1/7]">
            <img className="p-1 hover:scale-110 max-w-[4rem]" src={props.img} alt="logo"/>
            <p className="text-[#f9fafb]">{props.name}</p>
        </div>
    )
}

export default Skills;