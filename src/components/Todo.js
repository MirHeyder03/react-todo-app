import React from "react";

const Todo = ({ text, todos, setTodos, todo }) => {
  const deleteHandler = () => {
    setTodos(todos.filter((elem) => elem.id !== todo.id));
  };
  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };
  return (
    <ul className="list-group list-group-horizontal rounded-0 bg-transparent">
      <li className="list-group-item d-flex align-items-center ps-0 pe-3 py-1 rounded-0 border-0 bg-transparent">
        <div className="form-check">
          <input
            className="form-check-input me-0"
            type="checkbox"
            id="flexCheckChecked1"
            aria-label="..."
            onClick={completeHandler}
          />
        </div>
      </li>
      <li className="list-group-item px-3 py-1 d-flex align-items-center flex-grow-1 border-0 bg-transparent">
        <p
          className={`lead fw-normal mb-0 ${todo.completed ? "completed" : ""}`}
        >
          {text}
        </p>
      </li>
      <li className="list-group-item ps-3 pe-0 py-1 rounded-0 border-0 bg-transparent">
        <div className="d-flex flex-row justify-content-end mb-1">
          <span
            onClick={deleteHandler}
            className="text-danger"
            data-mdb-toggle="tooltip"
            title="Delete todo"
          >
            <i className="fas fa-trash-alt"></i>
          </span>
        </div>
      </li>
    </ul>
  );
};

export default Todo;
