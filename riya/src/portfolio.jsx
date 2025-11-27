import React from 'react'
import "./portfolio.css"
import { LuLaptopMinimalCheck } from "react-icons/lu";
import img from "./assets/img.jpg"
const portfolio = () => {
  return (
    <>
    <header className='flex gap-40  border-amber-100 bg-blue-800 text-amber-50'>
      <i className='ml-2'> My portfolio</i>  
<ul className='flex gap-6 '>
    <li>Home</li>
    <li>Skill</li>
    <li>Project</li>
    <li>Eduction</li>
    <li>contact</li>
</ul>
    </header>
<section className='bg-blue-950 h-96 flex '>
   <div className='w-auto border-amber-600 ' >
    <h3 className='text-amber-50 ml-8 pt-3 flex  ' ><LuLaptopMinimalCheck />Coder</h3>
    <h1 className='text-amber-50 ml-8 text-3xl'>HI,I'M</h1>
    <h1 className='text-cyan-500 ml-8 text-3xl'>RIYA</h1>
    <h1 className='text-cyan-300 ml-8 text-3xl'>VERMA</h1>
    <p className='mr-90 ml-8 text-sm text-cyan-200'>continuously improving my skill to build responsive and scalable web application beinding both forntend and backend development.passionate about full-stack development and creating impactful project</p>
</div>
<img src={img} alt=""className="w-40 h-40 rounded-full object-cover"/>
</section>
    </>
  )
}

export default portfolio