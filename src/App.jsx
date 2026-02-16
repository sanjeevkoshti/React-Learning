import react from 'react'
import './App.css'

//individual props
const book1 = {
  name: "React", 
  author: "Sanju"
}
const book2 = {
  name: "Node", 
  author: "Sanjeev"
}
const book3 = {
  name: "Express", 
  author: "Sanjay"
}

function App() {
  return (
    <>
       <Book name={book1.name} author={book1.author}/>
       <Book name={book2.name} author={book2.author}/>

       {/* children props */}
       <Book name={book3.name} author={book3.author}>
        <p>This is a book about Express</p>
       </Book>
    </>
  )
}

// function App() {
//   return (
//     <>
//        <Book name="React" author="Sanju"/>
//        <Book name="Node" author="Sanjeev"/>

//        {/* children props */}
//        <Book name="Express" author="Koshti">
//         <p>This is a book about Express</p>
//        </Book>
//        <Book name="MongoDB" author="Sanjay">
//         <p>This is a book about MongoDB</p>
//        </Book>
//     </>
//   )
// }
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
