import React from "react";
import { Link, Route, Routes } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <nav className="sidebar__nav">
        <div className="sidebar__list">
          <Link className="sidebar__item" to="/">
            Todo
          </Link>

          <Link className="sidebar__item" to="lidjfad">
            Todo
          </Link>

          <Link className="sidebar__item" to="tosok">
            Todo
          </Link>

          <Link className="sidebar__item" to="kaldjfhja">
            Todo
          </Link>

          <Link className="sidebar__item" to="asdofaij">
            Todo
          </Link>

          <Link className="sidebar__item" to="kiasjdf">
            Todo
          </Link>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
