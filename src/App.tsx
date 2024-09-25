import './App.css'
import Button from './genrics/Button'

function App() {
 const handleClick =() =>{
  console.log("cliked")
 }
 const handleClick2 =() =>{
  console.log("cliked add")
 }

  return (
    <>
      <Button style={{backgroundColor:"yellow"}} onClick={handleClick}><p>Submit</p></Button>
      <Button style={{backgroundColor:"red"}} onClick={handleClick2}>Add</Button>

    </>
  )
}

export default App
