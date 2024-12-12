import React, { useContext, useState } from "react";
import Style from "./TodoItem.module.css";
import "@coreui/coreui/dist/css/coreui.min.css";
import "../App.css";
import { TodoContext } from "./Context/Context";

export default function TodoItems() {

  
  const [Todo, setTodo] = useState({ name: "", date: "" });
  const { dispatch } = useContext(TodoContext);

  const handleSubmit = (ev) => {
    ev.preventDefault();
    dispatch({
      type: "ADD_ITEM",
      payload: { name: Todo.name, date: Todo.date },
    });
    setTodo({
      name: "",
      date: "",
    });
  };

  const handleTextChange = (ev) => {
    const name = ev.target.value;
    setTodo({
      name,
      date: Todo.date,
    });
  };
  const handleDateChange = (ev) => {
    const date = ev.target.value;
    setTodo({
      name: Todo.name,
      date,
    });
  };
  return (
    <>
      <div className="Input">
        <form onSubmit={handleSubmit}>
          <input
            className={Style.input}
            type="text"
            placeholder="Enter a todo item"
            value={Todo.name}
            onChange={handleTextChange}
          />

          <input
            className={Style.date}
            type="date"
            value={Todo.date}
            onChange={handleDateChange}
          />

          <button
            type="submit"
            disabled={Todo.name.length === 0 || Todo.date.length === 0}
            className={`btn btn-success ${Style.BTN}`}
          >
            Add
          </button>
        </form>
      </div>
    </>
  );
}
