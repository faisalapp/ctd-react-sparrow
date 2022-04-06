import React from "react";

// console.log("TodoListItem")

export default function TodoListItem(props) {
  return (
    <div>
      <li>{props.todo.title}</li>
    </div>
  );
}
