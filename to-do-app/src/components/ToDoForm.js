import React, { useState, useEffect, useRef } from "react";
import { Form } from "react-router-dom";
import ToDoList from "./ToDoList";

function ToDoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");
  const [maxCharReached, setCharsReached] = useState(false);
  const focus = useRef(null);
  const [maxLength, setmaxLength] = useState(50);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (screenWidth < 768) {
      // call your function here
      setmaxLength(30);
      console.log("MaxLength at 30");
    } else if (screenWidth >= 768) {
      console.log("MaxLength at 30");
      setmaxLength(30);
    }
  }, [screenWidth]);

  useEffect(() => {
    focus.current.focus();
  });

  const GetTime = () => {
    const currentDate = new Date();
    const day = currentDate.getDate().toString().padStart(2, "0");
    const month = (currentDate.getMonth() + 1).toString().padStart(2, "0"); // Adding 1 to the month since January is represented by 0
    const year = currentDate.getFullYear().toString();
    let formatedDate = `${day}/${month}/${year}`;
    return formatedDate;
  };

  const handleSubmitFunc = (e) => {
    e.preventDefault();
    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
      time: GetTime(),
    });

    console.log("Submitted");
    setInput("");
  };

  const handleOnChange = (e) => {
    setInput(e.target.value);

    if (e.target.value.length <= maxLength - 1) {
      setCharsReached(false);
    } else {
      setCharsReached(true);
    }

    console.log("Changed!");
  };

  const GetMaxCharsReachedText = () => {
    const charsRemaining = maxLength - input.length;
    return <p className="text-white">{charsRemaining}</p>;
  };

  const GetBtnText = () => {
    return props.edit ? <p>Finish</p> : <p>Add To Do</p>;
  };

  return (
    <div className="w-full max-w-sm md:min-w-410 md:max-w-full ">
      <div className="bg-white rounded-md">
        <form className="todo-form flex " onSubmit={handleSubmitFunc}>
          <input
            type="text"
            placeholder="Add to do"
            value={input}
            name="text"
            className="todo-input pl-4 rounded-md mr-2 w-full"
            onChange={handleOnChange}
            ref={focus}
            maxLength={maxLength}
          />

          <button
            type="submit"
            className="inline-block px-5 py-5 bg-gradient-to-r from-green-500 to-green-700 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out
            hover:from-green-600 hover:to-green-900"
          >
            {GetBtnText()}
          </button>
        </form>
      </div>
      <div>{GetMaxCharsReachedText()}</div>
    </div>
  );
}

export default ToDoForm;
