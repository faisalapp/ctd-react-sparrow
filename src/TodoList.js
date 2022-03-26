import React from "react";

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

export default function TodoList() {
  return (
    <div>
      <ul>
        {todoList.map(function (obj) {
          return <li key={obj.id}>{obj.title}</li>;
        })}
      </ul>
    </div>
  );
}
