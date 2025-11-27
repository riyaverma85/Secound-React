import React from 'react'
import "./portfolio.css"
const portfolio = () => {
  return (
    <>
    <header className='flex gap-40  border-1 bg-fuchsia-900'>
      <i className='ml-2'> My portfolio</i>  
<ul className='flex gap-6'>
    <li>Home</li>
    <li>Skill</li>
    <li>Project</li>
    <li>Eduction</li>
    <li>contact</li>
</ul>
    </header>
<section className='bg-fuchsia-950 h-96'>
    <h3>Coder</h3>
</section>
    </>
  )
}

export default portfolio