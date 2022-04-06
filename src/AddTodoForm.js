import React from "react";

export default function AddTodoForm(props) {
  const handleAddTodo = (event) => {
    event.preventDefault();
    let todoTitle = event.target.title.value;
    // console.log("todoTitle = " + todoTitle);
    props.onAddTodo(todoTitle);
  };

  return (
    <div>
      <form onSubmit={handleAddTodo}>
        <label htmlFor="todoTitle">Title </label>
        <input type="text" id="todoTitle" name="title"></input>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
