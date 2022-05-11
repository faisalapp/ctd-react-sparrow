import React from "react";
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";

/// ------------------- ///

const useSemiPersistentState = () => {

  const [todoList, setTodoList] = React.useState(
    JSON.parse(localStorage.getItem("savedTodoList")) || []);

  React.useEffect(() => {
    localStorage.setItem("savedTodoList", JSON.stringify(todoList));
  }, [todoList]);

  return [todoList, setTodoList];

};

/// ------------------- ///

function App() {
  // const [newTodo, setNewTodo] = React.useState(""); // old
  const [todoList, setTodoList] = useSemiPersistentState();

  const addTodo = (newTodo) => {
    // setTodoList([...todoList, newTodo]) // old
    setTodoList([...todoList, newTodo]);
  };

  /// ----------------------------- ///

  const removeTodo = (id) => {

    const todoListNew = todoList.filter((obj) => {
      return obj.id !== id;
    });

    setTodoList(todoListNew);

  }

  /// ----------------------------- ///

  return (
    <>
      <h1>Todo List</h1>
      <AddTodoForm onAddTodo={addTodo} />
      <TodoList todoList={todoList} onRemoveTodo={removeTodo}/>

      <p>{}</p>
    </>
  );
}

export default App;
