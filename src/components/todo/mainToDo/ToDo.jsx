import React from "react";
import style from "./ToDo.module.css";
import AddToDo from "../inputField/AddToDo";
import ToDoList from "../todolist/ToDoList";
import ModifyList from "../../modifylist/ModifyList";

const ToDo = () => {
  return (
    <div className={style.mainField}>
      <h1 className={style.text}>To Do List</h1>
      {/* <AddToDo /> */}
      {/* <ToDoList/> */}
      {/* <ModifyList/> */}
    </div>
  );
};

export default ToDo;
