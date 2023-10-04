import React, { useState } from "react";
import Todo from "./Todo";
import AppCss from "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";

function App() {
  return (
    <>
      <Header />
      <div className="flex__wrap">
        <Sidebar />
        <div className="contents__container">
          <Todo />
        </div>
      </div>
    </>
  );
}

export default App;
