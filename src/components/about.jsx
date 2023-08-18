import React from "react";

function About(){
    return(
        <div className="w-[90%] ml-auto mr-auto md:flex md:justify-evenly md:p-10">
            <div className="flex justify-center md:order-first md:justify-end">
                <div className="relative h-[380px] w-[320px] md:h-[460px] md:w-[380px] lg:h-[520px] lg:w-[440px]">
                    <img
                        src="Assets\WhatsApp Image 2023-08-18 at 13.00.52.jpg"
                        alt="Fullpose of Sagar"
                        className="absolute z-10 h-[360px] w-[280px] border-8 border-[#111827] max-md:left-5 md:right-0 md:top-0 md:h-[420px] md:w-[340px] lg:h-[480px] lg:w-[400px]"
                        style={{ objectFit: 'cover' }}
                    ></img>
                    <div className="absolute h-[360px] w-[320px] border-8 border-transparent bg-[#374151] max-md:top-5 md:bottom-0 md:left-0 md:h-[420px] md:w-[340px] lg:h-[480px] lg:w-[400px]"></div>
                </div>
            </div>
            <p className="text-[#f9fafb] max-w-xl">Hi, I'm Hitesh Bharadwaj Vemprala, a full stack developer with a passion for building innovative and user-friendly web applications. I'm proficient in a variety of programming languages and technologies, including JavaScript, React, Node.js and I'm all about making cool stuff on the internet. <br /><br />
            I have pursued my Bachelor of Technology in Computer Science and Engineering at IIIT Nagpur. During my journey, I took courses in data structures, algorithms, object-oriented programming, and software engineering to build a strong foundation in computer science principles and enhance my problem-solving abilities.<br /><br />
            In my spare time, I enjoy contributing to open source projects and participating in hackathons.<br /><br />
            I am looking for a challenging and rewarding position where I can use my skills and experience to make a real impact. I am also eager to learn new things and grow as a developer.<br /><br />
            If you are looking for a talented and motivated full stack developer, I would be honored to be considered for your team. Please feel free to <a href="#contact" className="underline"><span>contact me</span></a>.</p>
        </div>
    )
}

export default About;