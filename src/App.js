import React from 'react';
import './App.css';
import { projects } from './projects';
import { experiences } from './projects';
import Project from './components/projects';
import About from './components/about';
import Skills from './components/skills';
import skills from './skills.js';
import Experience from './components/experience';
import Intro from './components/intro';
import { StickyNavbar } from './components/navbar';
import Contact from './components/contact';

function createProject(content){
  return(
    <Project 
      key={content.key}
      num={content.num}
      img={content.img}
      name={content.name}
      about={content.about}
      tech={content.tech}
      github={content.github}
      link={content.link}
    />
  )
}

function createCard(content){
  return(
    <Skills 
      key={content.key}
      img={content.img}
      name={content.name}
    />
  )
}

function createExp(content){
  return(
    <Experience 
      key={content.id}
      logo={content.logo}
      logoAlt={content.logoAlt}
      position={content.position}
      // startDate={content.startDate}
      // currentlyWorkHere={content.currentlyWorkHere}
      date={content.DateExp}
      summary={content.summary}
    />
  )
}

function App() {
  return (
    <div className="App">
      <StickyNavbar />
      <div className='bg-[#030712] pb-16 pt-[10rem]'>
        <Intro />
      </div>
      <div id="about" className="bg-[#111827] pb-16 pt-20">
        <p className="rounded-xl text-[#f9fafb] bg-[#374151] w-fit pt-1 pb-1 pl-2 pr-2 flex justify-center items-center ml-auto mr-auto font-semibold">About me</p>
        <About />
      </div>
      <div id="skills" className='bg-[#030712] pb-16 pt-20'>
        <p className="rounded-xl text-[#f9fafb] bg-[#374151] w-fit pt-1 pb-1 pl-2 pr-2 flex justify-center items-center ml-auto mr-auto font-semibold">Skills</p>
        <p className='text-[#f9fafb] ml-auto mr-auto flex justify-center items-center font-medium pt-4'>The skills, tools and technologies I am good at:</p>
        <div className='pt-8 grid grid-cols-3 gap-y-4 md:grid-cols-6 md:gap-y-8 lg:grid-cols-7 lg:px-32 lg:gap-y-12'>
          {skills.map(createCard)}
        </div>
      </div>
      <div id="experience" className="bg-[#111827] pb-16 pt-20">
        <p className="rounded-xl text-[#f9fafb] bg-[#374151] w-fit pt-1 pb-1 pl-2 pr-2 flex justify-center items-center ml-auto mr-auto font-semibold">Experience</p>
        <p className='text-[#f9fafb] ml-auto mr-auto flex justify-center items-center font-medium pt-4'>Here is a quick summary of my most recent experiences:</p>
        <div className='flex flex-wrap gap-5 justify-evenly items-center pt-8 md:px-36'>
          {experiences.map(createExp)}
        </div>
      </div>
      <div id="projects" className='bg-[#030712] pb-16 pt-20'>
        <p className="rounded-xl text-[#f9fafb] bg-[#374151] w-fit pt-1 pb-1 pl-2 pr-2 flex justify-center items-center ml-auto mr-auto font-semibold">Work</p>
        <p className='text-[#f9fafb] ml-auto mr-auto flex justify-center items-center font-medium pt-4'>Some of the projects I have built:</p>
        {projects.map(createProject)}
      </div>
      <Contact />
      <p className="text-[#f9fafb] bg-[#111827] font-thin font-mono text-center text-xs text-blue-400 pb-1">-A N I L-</p>
    </div>
  );
}

export default App;
