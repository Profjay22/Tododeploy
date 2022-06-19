import React, {useState, useEffect}  from 'react';
import './App.css';
import Form from "./Component/Form"
import TodoList from './Component/TodoList';
function App() {

  const [inputText, setinputText] = useState(" ");
  const [toDO, setTodo] = useState([]);
  const [status, setStatus] = useState("all")
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    getLocalTodos()
  }, [])

  useEffect(() => {
    
    filterHandler(); saveLocalTodos()
  }, [toDO,status])

  

  const filterHandler = () => {
    switch(status){
      case 'completed' :
        setFilteredTodos(toDO.filter((todo) => todo.completed === true))
        break;
      case 'uncompleted' :
      setFilteredTodos(toDO.filter((todo) => todo.completed === false))
      break;
      default:
        setFilteredTodos(toDO)
        break;
    }
    
  }

  const saveLocalTodos = () => {
    
    
      localStorage.setItem("toDO", JSON.stringify(toDO))
    
  }

  const getLocalTodos = () => {
    
    if(localStorage.getItem("toDO") === null){
      localStorage.setItem("toDO", JSON.stringify([]))
    }
    else{
    
    let localStorageVal = JSON.parse(localStorage.getItem("toDO"));
    setTodo(localStorageVal)
    
  }
  }

  return (
    <div className="App">
        <header>
          <h1>Jerry's Todo List </h1>
        </header>
        <Form setStatus= {setStatus} inputText = {inputText} toDo = {toDO} setTodo ={setTodo} setinputText={setinputText}/>
        <TodoList filteredTodos= {filteredTodos} toDO = {toDO} setTodo={setTodo}/>
    </div>
  );
}

export default App;
