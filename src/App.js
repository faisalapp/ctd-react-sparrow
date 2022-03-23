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

/* define function TodoList */

function funcTodoList(todoList) {
  let arrayOutput = todoList.map(function (obj) {
    // return <li key={obj.id}>{obj.id} - {obj.title}</li>
    return <li key={obj.id}>{obj.title}</li>;
  });

  return arrayOutput;
}

/// ------------------- ///

function App() {
  return (
    <div>
      <h1>Todo List</h1>

      <ul>
        {todoList.map(function (obj) {
          return <li key={obj.id}>{obj.title}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
