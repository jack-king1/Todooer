import React, { useState, useEffect } from "react";
import ToDo from "./ToDo";
import ToDoForm from "./ToDoForm";

function ToDoList() {
  const [todos, setToDos] = useState([]);

  useEffect(() => {
    console.log("trying to load files...");
    const fileTodos = JSON.parse(localStorage.getItem("myTodos"));
    if (fileTodos) {
      console.log("File exists, settingtodos from file...");
      console.log(fileTodos);
      setToDos(fileTodos);
    } else {
      console.log("nothing to load!");
    }
  }, []);

  useEffect(() => {
    console.log("Todos updates, saving it to local storage!");
    localStorage.setItem("myTodos", JSON.stringify(todos));
  }, [todos]);

  const AddToDo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];

    setToDos(newTodos);
    console.log(newTodos);
  };

  const updateToDo = (todoID, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }
    setToDos((prev) =>
      prev.map((item) => (item.id === todoID ? newValue : item))
    );
  };

  const completeTodo = (id, e) => {
    e.stopPropagation();
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setToDos(updatedTodos);
  };

  const removeTodo = (id, e) => {
    e.stopPropagation();
    console.log("Removing todo...");
    const removeArr = todos.filter((todo) => todo.id !== id);
    setToDos(removeArr);
  };

  return (
    <div className="bg-white-400 ">
      <h1 className="text-white text-center font-poppins text-4xl pb-4">
        Whats the plan for today?
      </h1>
      <div className="flex justify-center min-w-460 mx-auto md:px-0 md:min-w-600 md:max-w-[50%]">
        <ToDoForm onSubmit={AddToDo} todos={todos} />
      </div>
      <div className="mt-6 border-solid border-red-500 max-w-sm justify-center mx-auto md:max-w-[50%]">
        <ToDo
          todos={todos}
          completeTodo={completeTodo}
          removeTodo={removeTodo}
          updateToDo={updateToDo}
        />
      </div>
    </div>
  );
}

export default ToDoList;
