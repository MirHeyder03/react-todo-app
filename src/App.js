import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import TodoList from "./components/Todolist";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filterTodos, setFilterTodos] = useState([]);

  useEffect(()=>{
    getLocalTodos();
  },[])

  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);

  const filterHandler = () => {
    switch (status) {
      case 'completed':
        setFilterTodos(todos.filter((todo) => todo.completed === true));
        break;
      case 'uncompleted':
        setFilterTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilterTodos(todos);
        break;
    }
  };

  const saveLocalTodos=()=>{
      localStorage.setItem("todos",JSON.stringify(todos));
  };
  const getLocalTodos=()=>{
    if(localStorage.getItem("todos")===null){
      localStorage.setItem("todos",JSON.stringify([]));
    }
    else{
      let todoLocal=JSON.parse(localStorage.getItem("todos"))
      setTodos(todoLocal);
    }
  }

  return (
    <div className="App">
      <section className="vh-100">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col">
              <div className="card" id="list1">
                <div className="card-body py-4 px-4 px-md-5">
                  <p className="h1 text-center mt-3 mb-4 pb-3 text-primary">
                    <i className="fas fa-check-square me-1"></i>
                    <u>My Todo's</u>
                  </p>
                  <Form
                    todos={todos}
                    setTodos={setTodos}
                    inputText={inputText}
                    setInputText={setInputText}
                    setStatus={setStatus}
                  />
                  <hr className="my-4"></hr>
                  <TodoList
                    filterTodos={filterTodos}
                    setTodos={setTodos}
                    todos={todos}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
