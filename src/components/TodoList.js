import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos,setTodos,filterTodos }) => {
  return (
    <div>
      {filterTodos.map((todo) => (
        <Todo
          key={todo.id}
          text={todo.text}
          setTodos={setTodos}
          todo={todo}
          todos={todos}
        />
      ))}
    </div>
  );
};

export default TodoList;
