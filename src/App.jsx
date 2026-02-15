import react from 'react'
import './App.css'

function App() {
  return (
    <>
       <Book name="React" author="Sanju"/>
       <Book name="Node" author="Sanjeev"/>
    </>
  )
}
function Book(props) {
  return (
    <>
       <h1>{props.name}</h1>
       <p>{props.author}</p>
    </>
  )
}
export default App
