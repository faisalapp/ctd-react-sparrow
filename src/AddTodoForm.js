import React from "react";

export default function AddTodoForm() {
  return (
    <div>
      <form>
        <label htmlFor="todoTitle">Title </label>
        <input id="todoTitle"></input>
        <button>Add</button>
      </form>
    </div>
  );
}
