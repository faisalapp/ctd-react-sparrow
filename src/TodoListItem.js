import React from "react";

// console.log("TodoListItem")

export default function TodoListItem({todo:{title}}) {
    // const {todo:{title}} = props; // applying destructuring directly in parameters
  return (
    <div>
      <li>{title}</li>
    </div>
  );
}
