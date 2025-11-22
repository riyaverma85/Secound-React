//rafce


 const App = () => {
 const Age=()=>{
  let age=prompt("enter age")
    if(age>=18){
      alert(" vote")
    }
    else{
      alert("note vote")
    }
 }
  return (
    <div>
      <button onClick={Age} >Click Age</button>
    </div>
  )
}
export default App;