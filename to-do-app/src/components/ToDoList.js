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
    // console.log("removing id" + id);
    const removeArr = todos.filter((todo) => todo.id !== id);

    // const newArray = removeArr.map((obj) => {
    //   return Object.keys(obj).map((key) => {
    //     return obj[key];
    //   });
    // });

    console.log(Array.isArray(removeArr));
    setToDos(removeArr);
    console.log(removeArr);
  };

  return (
    <div>
      <h1 className="text-white">Whats the plan for today?</h1>
      <ToDoForm onSubmit={AddToDo} />
      <ToDo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} />
    </div>
  );
}

export default ToDoList;
