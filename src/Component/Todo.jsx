import React from "react"


const Todo =({text, toDO, setTodo, todo}) =>{

    const deletes = () => {
            setTodo(toDO.filter((todos) => todos.id !== todo.id))
          
        }
    const completeHandler =() =>{
            setTodo(
                toDO.map((item)=> {
                  if(item.id === todo.id){
                    return {
                        ...item,  completed : !item.completed
                    }
                  }
                 
                    return item
                  
                })
            )

    }

    return (

        <div className="todo">
            <li className = {`todo-item ${todo.completed ? "completed" : ''} `}>{todo.text}</li>
            <button onClick ={completeHandler} className="complete-btn"><i className="fas fa-check"></i></button>
            <button onClick={deletes} className="trash-btn"><i className="fas fa-trash"></i></button>
        </div>
    )

}

export default Todo;