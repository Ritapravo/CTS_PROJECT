import logo from './logo.svg';
import './App.css';
import  Header  from "./myComponents/header.js";
import Todos from "./myComponents/todos.js";
import Footer from "./myComponents/footer.js";
import { AddTodo } from './myComponents/AddTodo';
import React,{ useState } from 'react';




function App() {
  const onDelete = (todo) => {
    console.log("I am onDelete of todo", todo);

    setTodos(todos.filter((e)=>{
      return e != todo;
    }));
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const addTodo = (title, desc)=>{
    console.log("I am adding this Todo", title, desc);
    let sno = todos.length?todos[todos.length-1].sno + 1:1;
    const myTodo ={
      sno: sno,
      title: title,
      desc: desc
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);

    localStorage.setItem("todos", JSON.stringify(todos));
  }

  // const [todos, setTodos] = useState([
  //   {
  //     sno : 1, 
  //     title: "go to market", 
  //     desc: "you need to go to the market",
  //   },
  //   {
  //     sno : 2, 
  //     title: "go to home", 
  //     desc: "you need to go to the home",
  //   },
  //   {
  //     sno : 3, 
  //     title: "go to ghat", 
  //     desc: "you need to go to the ghat",
  //   }
  // ])

  const [todos, setTodos] = useState([])

  return (
    <>
      <Header title="MyTodosList" searchBar = {true}/>
      <AddTodo addTodo={addTodo}/>
      <Todos todos = {todos} onDelete={onDelete}/>
      <Footer/>
    </>
  )
}

export default App;



// function App() {
//   let myVariable = 345;
//   return (
//     <div className="App">
//       <header className="App-header">
//         <div>{12+45} {myVariable}</div>
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }