import React from "react";
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";

/// ------------------- ///

/*
const useSemiPersistentState = () => {

  const [todoList, setTodoList] = React.useState(
    JSON.parse(localStorage.getItem("savedTodoList")) || []);

  React.useEffect(() => {
    localStorage.setItem("savedTodoList", JSON.stringify(todoList));
  }, [todoList]);

  return [todoList, setTodoList];

};
*/

/// ------------------- ///

function App() {
  const [todoList, setTodoList] = React.useState([]);

  const [isLoading, setIsLoading] = React.useState(true);

  
  React.useEffect(() => {
    new Promise((resolve, reject) =>
      setTimeout(
        resolve({
          data: {
            todoList: JSON.parse(localStorage.getItem("savedTodoList")) || [],
          },
        }),
        2000
      )
    ).then((result) => {
      // setTodoList(todoList);
      // setTodoList(result.data.todoList);
      // setIsLoading(false);
    });
  });




  /*
  React.useEffect(() => {
    if (isLoading === false) {
      localStorage.setItem("savedTodoList", JSON.stringify(todoList));
    }
  }, [todoList]);
*/

  // const [todoList, setTodoList] = useSemiPersistentState(); // old

  const addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo]);
  };

  /// ----------------------------- ///

  const removeTodo = (id) => {
    const todoListNew = todoList.filter((obj) => {
      return obj.id !== id;
    });

    setTodoList(todoListNew);
  };

  /// ----------------------------- ///

  return (
    <>
      <h1>Todo List</h1>
      <AddTodoForm onAddTodo={addTodo} />

      <TodoList todoList={todoList} onRemoveTodo={removeTodo} />


      {/*isLoading ? (
        <p>Loading ...</p>
      ) : (
        <TodoList todoList={todoList} onRemoveTodo={removeTodo} />

      )*/}




      

      
    </>
  );
}

export default App;
