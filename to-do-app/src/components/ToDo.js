import React, { useState } from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";

function ToDo({ todos, completeTodo, removeTodo }) {
  const [isHoverBtn, setBtns] = useState(false);

  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const HandleBtnHover = () => {
    setBtns = !isHoverBtn;
  };

  return todos.map((todo, index) => (
    <div
      className={
        todo.isComplete
          ? "todo-row complete content-center mx-auto items-center bg-orange-500 px-8 py-6 rounded-md mt-3 flex justify-between"
          : "todo-row content-center mx-auto items-center bg-blue-500 px-8 py-6 rounded-md mt-3 flex justify-between"
      }
      key={index}
      onClick={isHoverBtn ? () => completeTodo(todo.id) : null}
    >
      <div key={todo.id}>
        <p className="text-white">{todo.text}</p>
      </div>
      <div className="icons flex">
        <button
          type="button"
          onClick={() => removeTodo(todo.id)}
          className="inline-block px-5 py-5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out mr-4"
        >
          <RiCloseCircleLine className="text-white delete-icon text-2xl" />
        </button>

        <button
          type="button"
          className="inline-block px-5 py-5 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out"
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
        >
          <TiEdit className="text-white edit-icon text-2xl" />
        </button>
      </div>
    </div>
  ));
}

export default ToDo;
