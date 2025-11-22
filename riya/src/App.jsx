//rafce


 const App = () => {
 const Riya=()=>{
  let num=prompt("enter number")
    if(num>0){
      alert(" Positive")
    }
     else if(num<0) {

      alert("Neagitive")
    }
    else {
     alert("Zero")
    }
 }
  return (
    <div>
      <button onClick={Riya} >Check Number</button>
    </div>
  )
}
export default App;


