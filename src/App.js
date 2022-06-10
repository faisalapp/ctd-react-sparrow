import React from "react";
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";

import { BrowserRouter, Routes, Route } from "react-router-dom";

/*
function App() {
  return (
    <BrowserRouter>
      <Routes></Routes>

      <h1>H1</h1>
    </BrowserRouter>
  );
}

*/

function App() {
  const [todoList, setTodoList] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  /// ------- Airtable ------------ ///

  React.useEffect(() => {
    fetch(
      `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Default`,
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
        },
      }
    )
      .then((response) => response.json())
      .then((result) => {
        setTodoList(result.records);
        setIsLoading(false);
        // console.log(result.records[0].fields.Title);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  /// ------- Airtable ------------ ///

  /// ----------------------------- ///

  React.useEffect(() => {
    if (isLoading === false) {
      localStorage.setItem("savedTodoList", JSON.stringify(todoList));
    }
  }, [todoList, isLoading]);

  const addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo]);
    // setTodoList([...todoList,result.records])
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
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          exact
          element={
            <>
              <h1>Todo List</h1>
              <AddTodoForm onAddTodo={addTodo} />

              {isLoading ? (
                <p>Loading ...</p>
              ) : (
                <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
              )}
            </>
          }
        />
        <Route path="/new" element={<h1>New Todo List</h1>} />
      </Routes>
    </BrowserRouter>
  );
  
} // App()

/// ----------------------------- ///

export default App;
