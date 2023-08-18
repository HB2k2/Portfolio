import React from "react";
import {Mail} from 'lucide-react';
import {Instagram} from 'lucide-react';
import {Twitter} from 'lucide-react';
import {Linkedin} from 'lucide-react';
import {Github} from 'lucide-react';


function Contact(){
    return (
        <div id="contact" className="bg-[#111827] text-center pt-20 pb-16">
            <p className="rounded-xl text-[#f9fafb] bg-[#374151] w-fit pt-1 pb-1 pl-2 pr-2 flex justify-center items-center ml-auto mr-auto font-semibold">Get in touch</p>
            <p className="text-[#f9fafb] ml-auto mr-auto flex justify-center items-center font-medium p-4">Feel free to reach out to me if you are looking for a developer, have a query, or simply want to connect</p>
            <div className="flex justify-center gap-10">
                <a href="mailto:hiteshbharadwaj526@yahoo.in" target="blank"><Mail className="stroke-gray-600 cursor-pointer hover:scale-125 hover:stroke-green-400"/></a>
                <a href="https://github.com/HB2k2" target="blank"><Github className="stroke-gray-600 cursor-pointer hover:scale-125 hover:stroke-neutral-800"/></a>
                <a href="https://www.linkedin.com/in/hitesh-bharadwaj-vemprala-6844b8229/" target="blank"><Linkedin className="stroke-gray-600 cursor-pointer hover:scale-125 hover:stroke-sky-300"/></a>
                <a href="https://www.instagram.com/hiteshbharadwaj526/" target="blank"><Instagram className="stroke-gray-600 cursor-pointer hover:scale-125  hover:stroke-red-400"/></a>
                {/* <a href="https://twitter.com/anil_koduru12?t=HxktXYBje9wR3NscIcPArQ&s=09" target="blank"><Twitter className="stroke-gray-600 cursor-pointer hover:scale-125 hover:stroke-cyan-900"/></a> */}
            </div>
        </div>
    )
}

export default Contact;