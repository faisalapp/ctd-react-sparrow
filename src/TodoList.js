import React from "react";
import TodoListItem from "./TodoListItem";

/* define object */

let todoList = [
  {
    id: 1,
    title: "Complete assignment",
  },
  {
    id: 2,
    title: "Grocery",
  },
  {
    id: 3,
    title: "Walking",
  },
];

// console.log("TodoList")

export default function TodoList() {
  return (
    <div>
      <ul>
        {todoList.map(function (todo) {
          return <TodoListItem key={todo.id} todo={todo} />
        })}
      </ul>
    </div>
  );
}
