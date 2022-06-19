import React from "react"
import Todo from "./Todo"
const TodoList = ({toDO,setTodo, filteredTodos}) => {
    return (
        <div className="todo-container">
      <ul className="todo-list">
      {/*toDO */filteredTodos.map((todo)=>
      <Todo todo = {todo} text={todo.text} key={todo.id} toDO={toDO} setTodo = {setTodo}/>
      )}
      </ul>
    </div>
    )
}

export default TodoList