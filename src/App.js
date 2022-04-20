import React from "react";
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";

/// ------------------- ///

function App() {

  // const [newTodo, setNewTodo] = React.useState(""); // old

  let [todoList, setTodoList] = React.useState([]);

  const addTodo = (newTodo) => {
    // setTodoList([...todoList, newTodo]) // old
    setTodoList([...todoList, newTodo])
  }


  /// ----------------------------- ///

  return (
    <div>
      <h1>Todo List</h1>
      <AddTodoForm onAddTodo={addTodo}/>
      <TodoList todoList={todoList} />
      
      <p>{}</p>
    </div>
  );
}

export default App;
