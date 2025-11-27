import React from 'react'
import "./taiwind.css"
import img from "/src/one.jpg"
import { FaHome } from "react-icons/fa";
const App = () => {
  return (
    <>
    <header className='flex justify-between px-3'>
    {/* <div  class="bg-[url('/src/bgimg.jpg')] bg-cover bg-center bg-no-repeat h-96 w-full"> */}
    <img src={img} alt="Logo" class="h-12 w-auto rounded-3xl "  />
    <ul className='flex items-center'>
    <li className='text-cyan-700 p-2 flex '><FaHome />Home</li>
    <li  className='text-cyan-500 p-2 '>About</li>
    <li className='text-cyan-300 p-2'>contect</li>
    <li className='text-cyan-300 p-2'>Logine</li>
    </ul>
    <button className='border-2 bg-cyan-600 h-8 border-cyan-900 text-gray-50  rounded'>clicke me</button>
 
   {/* </div> */}
   </header>
    </>
  )
}

export default App;