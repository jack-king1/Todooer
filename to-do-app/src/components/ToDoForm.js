import React, { useState } from "react";
import { Form } from "react-router-dom";

function ToDoForm() {
  const [input, setInput] = useState('');
  const handleSubmit = e =>{
    e.preventDefault();
  }
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add to do"
        value={input}
        name="text"
        className="todo-input"
      />
      <button className="todo-button">Add todo</button>
    </form>
  );
}

export default ToDoForm;
