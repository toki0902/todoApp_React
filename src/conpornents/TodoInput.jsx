import React, { useState } from "react";

const TodoInput = ({ val, setVal, setTodos, todos }) => {
  const handleChange = (e) => {
    setVal(e.target.value);
  };

  const handleSubmit = () => {
    if (val !== "") {
      setTodos([...todos, { text: val, id: todos.length, completed: false }]);
    }
    setVal("");
  };
  const handleEnter = (e) => {
    if (val !== "" && e.key === "Enter") {
      setTodos([...todos, { text: val, id: todos.length, completed: false }]);
      setVal("");
    }
  };

  const handleDelete = () => {
    setTodos(todos.filter((todo) => todo.completed === false));
  };

  return (
    <div className="todoInput__wrap">
      <h1 className="todo__title">TODOLIST</h1>
      <input
        value={val}
        type="text"
        className="todo__input"
        placeholder="what you should do?"
        onChange={handleChange}
        onKeyDown={handleEnter}
      ></input>
      <div className="btn__wrap">
        <div className="add__btn" onClick={handleSubmit}>
          Add task
        </div>
        <div className="delete__btn" onClick={handleDelete}>
          delete task
        </div>
      </div>
    </div>
  );
};

export default TodoInput;
