import React, { useState } from "react";
import { Form } from "react-router-dom";

function ToDoForm(props) {
  const [input, setInput] = useState("");

  const handleSubmitFunc = (e) => {
    e.preventDefault();
    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });
    console.log("Submitted");
    setInput("");
  };

  const handleOnChange = (e) => {
    setInput(e.target.value);
    console.log("Changed!");
  };
  return (
    <div className="bg-white rounded-md w-full">
      <form className="todo-form flex">
        <input
          type="text"
          placeholder="Add to do"
          value={input}
          name="text"
          className="todo-input pl-4 rounded-md mr-2 w-full"
          onChange={handleOnChange}
        />

        <button
          type="button"
          onClick={handleSubmitFunc}
          className="inline-block px-5 py-5 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out"
        >
          AddToDo
        </button>
      </form>
    </div>
  );
}

export default ToDoForm;
