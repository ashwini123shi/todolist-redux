import React, { useState } from "react";
//css
import "bootstrap/dist/css/bootstrap.min.css";
import "../index.css";
//components
import Header from "./Header";
import ToDoList from "./ToDoList";

import ToDoForm from "./ToDoForm";

//redux
import { useSelector } from "react-redux";
import { addTodo,clearTodoList,deleteTodo,toggleTodo,duplicateItem,duplicateEditItem,duplicateItemIndex} from "../redux/actions/index";



const TodoApp = () => {
  
  const { toDoListVal } = useSelector(state => state.todos);


  return (
    <div className="container">
      <div className="row">
        <div className="col-10 mx-auto col-md-8 mt-4">
          <Header />
          <ToDoForm />
          <ToDoList/>
        </div>
      </div>
    </div>
  );
};

export default TodoApp;
