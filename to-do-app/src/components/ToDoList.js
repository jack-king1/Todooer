import React, { useState } from "react";
import ToDo from "./ToDo";
import ToDoForm from "./ToDoForm";

function ToDoList() {
  const [todos, setToDos] = useState([]);

  const AddToDo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];

    setToDos(newTodos);
    console.log(newTodos);
  };

  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setToDos(updatedTodos);
  };

  const removeTodo = (id) => {
    const removeArr = todos.filter((todo) => todo.id !== id);
    setToDos(removeArr);
  };

  return (
    <div className="bg-white-400">
      <h1 className="text-white text-center font-poppins text-4xl pb-4">
        Whats the plan for today?
      </h1>
      <div className="flex justify-center w-1/2 mx-auto ">
        <ToDoForm onSubmit={AddToDo} />
      </div>
      <div className="mt-6 border-solid border-red-500 w-1/2 mx-auto">
        <ToDo
          todos={todos}
          completeTodo={completeTodo}
          removeTodo={removeTodo}
        />
      </div>
    </div>
  );
}

export default ToDoList;
