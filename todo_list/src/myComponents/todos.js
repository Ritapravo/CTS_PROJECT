import React from 'react'
import TodoItem from './todoItem.js'

function Todos(props) {
    let myStyle = {
        minHeight:"70vh",
        margin:"30px auto"
    }
    return (
        <div>
            <div className="container my-3" style={myStyle}>
                <h3 className=''>Todos List</h3>
                {/* <TodoItem todo = {props.todos[0]}/> */}
                {props.todos.length==0? "No Todos to display!":
                    props.todos.map((todo)=>{
                        return <TodoItem todo = {todo} key={todo.sno} onDelete={props.onDelete}/> 
                    })
                }
            </div>
        </div>
    )
}

export default Todos
