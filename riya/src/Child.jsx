import React from 'react'

const Child = ({mydata}) => {
  const[name,age,city]=mydata
  return (
    <div>
     <h1>Hello Child</h1>
     <h2>my name is {name}</h2>
     <h2>my age is {age}</h2>
      </div>
  )
}

export default Child;