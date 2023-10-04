import React, { useState } from "react";
import Todo from "./Todo";
import AppCss from "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { Route, Routes } from "react-router-dom";
import NoMatch from "./NoMatch";

function App() {
  return (
    <>
      <Header />
      <div className="flex__wrap">
        <Sidebar />
        <div className="contents__container">
          <Routes>
            <Route path="/" element={<Todo />} />
            <Route path="*" element={<NoMatch />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
