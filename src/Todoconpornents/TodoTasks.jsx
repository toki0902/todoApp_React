import React, { useState } from "react";

const TodoTasks = ({ todos, setTodos }) => {
  const handleClick = (id) => {
    setTodos(
      todos.map((todo) => {
        if (id === todo.id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      })
    );
  };

  return todos.map((todo, index) => (
    <li
      id={todo.id}
      className={`list__item ${todo.completed ? "completed" : ""}`}
      key={index}
      onClick={() => handleClick(todo.id)}
    >
      <div className="checkbox"></div>
      <p className="todo__text">{todo.text}</p>
    </li>
  ));
};

export default TodoTasks;
