import React from "react";
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";

/// ------------------- ///

/* below code belongs to previous lesson-1-6
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


  /*
  React.useEffect(() => {
    new Promise((resolve, reject) =>
      setTimeout(
        () =>
          resolve({
            data: {
              todoList: JSON.parse(localStorage.getItem("savedTodoList")) || [],
            },
          }),
        2000
      )
    ).then((result) => {
      setTodoList(result.data.todoList);
      setIsLoading(false);
    });
  }, []);

  */

/// ------- Airtable ------------ ///

  React.useEffect(() => {
  fetch(`https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Default`, {
    headers : { Authorization : `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`}
  })
  
  .then(response => response.json())
  .then(result => {
    setTodoList(result.records);
    setIsLoading(false);

    // console.log(result.records[0].fields.Title);

  })

// Chain a then method to your fetch call and pass it a function that returns the response JSON data

.catch((error) => {
  console.error('Error:', error);
});

  }, []);

/// ------- Airtable ------------ ///



/// ----------------------------- ///


  
  React.useEffect(() => {
    if (isLoading === false) {
      localStorage.setItem("savedTodoList", JSON.stringify(todoList));
    }
  }, [todoList, isLoading]);


  // const [todoList, setTodoList] = useSemiPersistentState(); // old

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
    <>
      <h1>Todo List</h1>
      <AddTodoForm onAddTodo={addTodo} />

     

      {isLoading ? (
        <p>Loading ...</p>
      ) : (
        <TodoList todoList={todoList} onRemoveTodo={removeTodo} />

      )}
    </>
  );
}

export default App;
