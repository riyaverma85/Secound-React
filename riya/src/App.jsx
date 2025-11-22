//rafce


 const App = () => {
 const Riya=()=>{
let sum=0
  for(let i=1;i<=10;i++){
    
    if(i%2==0){
      sum++;
    } 
  }
  alert(`total even numbers =${sum}`)
 }
  return (
    <div>
      <button onClick={Riya} >count even Numbers</button><br/><br/>
    </div>
  )
}
export default App;

