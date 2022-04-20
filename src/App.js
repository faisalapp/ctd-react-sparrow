import React from "react";
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";

/// ------------------- ///

function App() {
  // const [newTodo, setNewTodo] = React.useState("");

  let [todoList, setTodoList] = React.useState([]);

  const addTodo = (newTodo) => {
    // setTodoList([...todoList, newTodo]) // old
    setTodoList([...todoList, newTodo])
  }

  // console.log(todoList);


  return (
    <div>
      <h1>Todo List</h1>
      <TodoList todoList={todoList} />
      <AddTodoForm onAddTodo={addTodo} />
      <p>{}</p>
    </div>
  );
}

export default App;
