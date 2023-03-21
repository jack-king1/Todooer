import React, { useState } from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import ToDoForm from "./ToDoForm";

function ToDo({ todos, completeTodo, removeTodo, updateToDo }) {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const gradientArray = [
    "bg-gradient-to-r from-red-500 to-transparent",
    "bg-gradient-to-r from-purple-500 to-transparent",
    "bg-gradient-to-r from-indigo-500 to-transparent",
    "bg-gradient-to-r from-fuchsia-500 to-transparent",
    "bg-gradient-to-r from-emerald-500 to-transparent",
    "bg-gradient-to-r from-violet-500 to-transparent",
  ];

  const hoverArray = [
    " hover:from-red-800 hover:to-transparent",
    " hover:from-purple-800 hover:to-transparent",
    " hover:from-indigo-800 hover:to-transparent",
    " hover:from-fuchsia-800 hover:to-transparent",
    " hover:from-emerald-800 hover:to-transparent",
    " hover:from-violet-800 hover:to-transparent",
  ];

  const HandleSetEdit = (e, todoVal) => {
    e.stopPropagation();
    setEdit({
      id: todoVal.id,
      value: todoVal.text,
    });
  };

  const submitUpdate = (value) => {
    updateToDo(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  const GetColourBg = (index) => {
    const modValue = index % 5;
    return gradientArray[modValue % 5];
  };

  const GetHoverBg = (index) => {
    const modValue = index % 5;
    return hoverArray[modValue % 5];
  };

  if (edit.id) {
    console.log("edit id: " + edit.id);
    return <ToDoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo, index) => (
    <div
      className={
        todo.isComplete
          ? "complete todo-row content-center mx-auto items-center px-8 py-6 rounded-md mt-3 flex justify-between bg-gradient-to-r from-green-600 to-transparent hover:cursor-pointer hover:from-green-800 hover:to-transparent"
          : "todo-row content-center mx-auto items-center px-8 py-6 rounded-md mt-3 flex justify-between hover:cursor-pointer " +
            GetColourBg(index) +
            GetHoverBg(index)
      }
      key={index}
      onClick={(e) => completeTodo(todo.id, e)}
    >
      <div key={todo.id}>
        <p
          className={
            todo.isComplete ? "text-white line-through font-bold" : "text-white"
          }
        >
          {todo.text}
        </p>
        <p className="text-white text-xs">added: {todo.time}</p>
      </div>
      <div className="icons flex">
        <button
          type="button"
          onClick={(e) => removeTodo(todo.id, e)}
          className="hover:from-rose-600 hover:to-red-900 inline-block px-2 py-2 bg-gradient-to-r from-rose-400 to-red-500 mr-1 rounded-xl md:mr-4 md:px-4 md:py-4"
        >
          <RiCloseCircleLine className="text-white delete-icon text-sm md:text-2xl" />
        </button>

        <button
          type="button"
          className="hover:from-green-600 hover:to-green-900 inline-block px-2 py-2 bg-gradient-to-r from-green-500 to-green-700 rounded-xl md:px-4 md:py-4"
          onClick={(e) => HandleSetEdit(e, todo)}
        >
          <TiEdit className="text-white edit-icon text-sm md:text-2xl" />
        </button>
      </div>
    </div>
  ));
}

export default ToDo;
