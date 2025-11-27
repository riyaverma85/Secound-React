import React from 'react'
import Child from './Child';

const App = () => {
let name="riya"
 let age =18
  return (
    <>
    <h1>home page</h1>
         <Child myname={name} myage={age} myprice={price}/>
         <Child myname="riya" myage={18} myprice={400}/>
    </>
  )
}
export default App;