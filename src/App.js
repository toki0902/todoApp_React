import React, { useState } from "react";
import AppCss from "./App.css";
import TodoInput from "./conpornents/TodoInput";
import TodoTasks from "./conpornents/TodoTasks";

function App() {
  const [val, setVal] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <>
      <div className="main__container">
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
      </div>
    </>
  );
}

export default App;
