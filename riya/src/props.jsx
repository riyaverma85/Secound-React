import React from 'react'
import Child from './Child';
import img from "..//assets/one.jpg"

const App = () => {
let name="riya"
 let age =18
 let price=400
 let productname="one plush nord"
  return (
    <>
    <h1>home page</h1>
         <Child myname={name} myage={age} myprice={price} myproductname={productname}/>
         <Child myname="riya" myage={18} myprice={400} myproductname="one plush nord"/>
    </>
  )
}
export default App;