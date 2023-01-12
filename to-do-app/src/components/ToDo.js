import React, { useState } from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";

function ToDo({ todos, completeTodo, removeTodo }) {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  return todos.map((todo, index) => (
    <div
      className={
        todo.isComplete
          ? "todo-row complete"
          : "todo-row content-center mx-auto items-center bg-blue-500 px-8 rounded-md"
      }
      key={index}
    >
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        <p className="text-white">{todo.text}</p>
      </div>
      <div className="icons flex">
        <RiCloseCircleLine
          className="text-white delete-icon"
          onClick={() => removeTodo(todo.id)}
        />
        <TiEdit
          className="text-white edit-icon"
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
        />
      </div>
    </div>
  ));
}

export default ToDo;
