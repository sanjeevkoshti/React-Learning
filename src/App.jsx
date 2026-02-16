import react from 'react'
import './App.css'

function App() {
  return (
    <>
       <Book name="React" author="Sanju"/>
       <Book name="Node" author="Sanjeev"/>

       {/* children props */}
       <Book name="Express" author="Koshti">
        <p>This is a book about Express</p>
       </Book>
       <Book name="MongoDB" author="Sanjay">
        <p>This is a book about MongoDB</p>
       </Book>
    </>
  )
}
function Book(props) {
  return (
    <>
       <h1>{props.name}</h1>
       <h3 className='author'>{props.author}</h3>
       {props.children}
    </>
  )
}

// destucturing props in function:
// function Book(props) {
//   const {name, author} = props;
//   return (
//     <>
//        <h1>{name}</h1>
//        <p>{author}</p>
//     </>
//   )
// }

// destucturing props in function arguments:
// function Book({name, author}) {
//   return (
//     <>
//        <h1>{name}</h1>
//        <p>{author}</p>
//     </>
//   )
// }
export default App
