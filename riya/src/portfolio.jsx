import React from 'react'
import "./portfolio.css"
import { LuLaptopMinimalCheck } from "react-icons/lu";
const portfolio = () => {
  return (
    <>
    <header className='flex gap-40  border-1 bg-fuchsia-900 text-amber-50'>
      <i className='ml-2'> My portfolio</i>  
<ul className='flex gap-6 '>
    <li>Home</li>
    <li>Skill</li>
    <li>Project</li>
    <li>Eduction</li>
    <li>contact</li>
</ul>
    </header>
<section className='bg-fuchsia-950 h-96 '>
    <h3 className='text-amber-50 ml-8 pt-3 flex ' ><LuLaptopMinimalCheck />Coder</h3>
    <h1 className='text-amber-50 ml-8'>HI,I'M</h1>
    <h1 className='text-cyan-500 ml-8'>RIYA</h1>
    <h1 className='text-cyan-300 ml-8 '>VERMA</h1>

</section>
    </>
  )
}

export default portfolio