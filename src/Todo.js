import React, { useState } from "react";

import AppCss from "./App.css";
import TodoInput from "./Todoconpornents/TodoInput";
import TodoTasks from "./Todoconpornents/TodoTasks";

const Todo = () => {
  const [val, setVal] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <div className="todo__container">
      <TodoInput
        setVal={setVal}
        val={val}
        setTodos={setTodos}
        todos={todos}
      ></TodoInput>
      <div className="todotasks__wrap">
        <ul className="task__list">
          <TodoTasks setTodos={setTodos} todos={todos}></TodoTasks>
        </ul>
      </div>
    </div>
  );
};

export default Todo;
