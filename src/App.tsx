import './App.css'
import Employee from './components/Employee'
import ParentComponent from './components/ParentComponent'

const App: React.FC=()=>{


  return (
    <>
    <ParentComponent />
    <Employee />
    </>
  )
}

export default App
