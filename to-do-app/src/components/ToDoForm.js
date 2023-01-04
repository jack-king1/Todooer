import React, { useState } from "react";
import { Form } from "react-router-dom";

function ToDoForm(props) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // props.onSubmit({
    //   id: Math.floor(Math.random() * 10000),
    //   text: input,
    // });
    alert("I am an alert box!");
    setInput("");
  };

  const handleOnChange = (e) => {
    setInput(e.target.value);
  };
  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add to do"
        value={input}
        name="text"
        className="todo-input"
        onChange={handleOnChange}
      />
      <button type="button">Add Todo</button>
    </form>
  );
}

export default ToDoForm;
