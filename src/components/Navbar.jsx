import { BsEnvelopeAt, BsGithub, BsLinkedin, BsTwitterX } from "react-icons/bs"
import {BiX, BiMenu} from "react-icons/bi"
import React, { useState } from "react";


const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const menuOpen = () => {
    setIsOpen(!isOpen);
  }


  return (
    <nav className="fixed top-0 z-50 flex w-full items-center justify-between border-b border-slate-800 bg-slate-950/90 px-6 py-4 text-slate-100 backdrop-blur-md md:justify-evenly">
      <a
        href="#home"
        className="text-2xl font-semibold tracking-tight text-slate-100 opacity-90 transition-all duration-300 hover:opacity-100 md:text-3xl"
      >
        Divyanshu
      </a>

      <ul className="hidden items-center gap-10 text-sm font-medium md:flex">
        <a href="#home" className="cursor-pointer text-slate-300 transition-all duration-150 hover:text-slate-50">
          <li>Home</li>
        </a>

        <a href="#experience" className="cursor-pointer text-slate-300 transition-all duration-150 hover:text-slate-50">
          <li>Experience</li>
        </a>

        <a href="#projects" className="cursor-pointer text-slate-300 transition-all duration-150 hover:text-slate-50">
          <li>Projects</li>
        </a>

        <a href="#honors" className="cursor-pointer text-slate-300 transition-all duration-150 hover:text-slate-50">
          <li>Honors</li>
        </a>

        <a href="#publications" className="cursor-pointer text-slate-300 transition-all duration-150 hover:text-slate-50">
          <li>Publications</li>
        </a>

        <a
          href="https://drive.google.com/file/d/1_Tozd4c6lzNwI5PjJd51GlQ1Vob32aOD/view?usp=sharing"
          target="_blank"
          className="cursor-pointer rounded-full border border-slate-700 bg-slate-900 px-4 py-1.5 text-slate-100 shadow-sm transition-all duration-150 hover:border-indigo-400 hover:bg-slate-800 hover:text-white"
        >
          <li>Resume</li>
        </a>
      </ul>

      <ul className="hidden items-center gap-5 md:flex">
        <li className="cursor-pointer text-xl text-slate-400 transition-all duration-150 hover:text-indigo-300">
          <a href="mailto:divyanshu.sharma@nyu.edu"><BsEnvelopeAt/></a>
        </li>

        <li className="cursor-pointer text-xl text-slate-400 transition-all duration-150 hover:text-indigo-300">
          <a href="https://www.linkedin.com/in/divyanshusharma17/" target="_blank" ><BsLinkedin/></a>
        </li>

        <li className="cursor-pointer text-xl text-slate-400 transition-all duration-150 hover:text-indigo-300">
          <a href="https://github.com/divyanshusharma1709" target="_blank" ><BsGithub/></a>
        </li>
          
      </ul>
      {isOpen ? (
        <BiX className="block text-3xl md:hidden" onClick={menuOpen}/>
      ): (
        <BiMenu className="block text-3xl md:hidden" onClick={menuOpen}/>
      )}

      {isOpen && (
        <div className={`fixed right-0 top-[72px] flex h-screen w-3/4 flex-col items-start justify-start gap-10 border-l border-slate-800 bg-slate-950/95 p-10 ${isOpen ? "block" : "hidden"}`}>

          <ul className="flex flex-col gap-8 text-lg">
              <a href="#home" className="cursor-pointer text-slate-300 transition-all duration-150 hover:text-slate-50" onClick={menuOpen}>
              <li>Home</li>
            </a>

            <a href="#experience" className="cursor-pointer text-slate-300 transition-all duration-150 hover:text-slate-50" onClick={menuOpen}>
              <li>Experience</li>
            </a>

            <a href="#projects" className="cursor-pointer text-slate-300 transition-all duration-150 hover:text-slate-50" onClick={menuOpen}>
              <li>Projects</li>
            </a>

            <a href="#honors" className="cursor-pointer text-slate-300 transition-all duration-150 hover:text-slate-50" onClick={menuOpen}>
              <li>Honors</li>
            </a>

            <a href="#publications" className="cursor-pointer text-slate-300 transition-all duration-150 hover:text-slate-50" onClick={menuOpen}>
              <li>Publications</li>
            </a>

            <a href="#contact" className="cursor-pointer text-slate-300 transition-all duration-150 hover:text-slate-50" onClick={menuOpen}>
              <li>Contact</li>
            </a>
          </ul>
          <ul className="mt-4 flex flex-wrap gap-5 text-2xl text-slate-400">
            <li className="cursor-pointer transition-all duration-150 hover:text-indigo-300"><BsEnvelopeAt/></li>

            <li className="cursor-pointer transition-all duration-150 hover:text-indigo-300"><BsLinkedin/></li>

            <li className="cursor-pointer transition-all duration-150 hover:text-indigo-300"><BsGithub/></li>

            <li className="cursor-pointer transition-all duration-150 hover:text-indigo-300"><BsTwitterX/></li>
          </ul>
        </div>
      )}


    </nav>
  )
}

export default Navbar
