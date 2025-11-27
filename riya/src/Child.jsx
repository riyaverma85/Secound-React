import React from 'react'
import img from "..//src/download.jpg"
const Child= ({myname,myage,myprice}) => {
  // let[name,age,city]=mydata

  // let props={
  //   myname:"riya",
  //   myage:18
  // }
  // let {myname,myage}=props

  return (
    <div>
     <h1>Hello Child</h1>
     <h2>my name is {myname}</h2>
     <h2>my age is {myage}</h2>
     <h2>my price is{myprice}</h2>
     {/* <img src={img} alt="" /> */}
      </div>
  )
}

export default Child;