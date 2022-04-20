import React from "react";

export default function AddTodoForm(props) {

  const [todoTitle, setTodoTitle] = React.useState("");

  const handleTitleChange = (event) => {
    let newTodoTitle = event.target.value;
    setTodoTitle(newTodoTitle);
    // console.log("newTodoTitle = " + newTodoTitle);
  };

  /// ----------------------------- ///

  const handleAddTodo = (event) => {

    event.preventDefault();
    // let todoTitle = event.target.title.value; // old
    // props.onAddTodo(todoTitle); // old

    props.onAddTodo({ title: todoTitle, id: Date.now() });

    // console.log("todoTitle = " + todoTitle);
   
   // Inside handleAddTodo, remove the reset() method and replace it with logic to reset the todoTitle state to an empty String

    event.target[0].value="" // is this correct logic? If some mentor could verify in his feedback. Thx
 
    // console.log(event.target[0].value);

    

  };

  return (
    <div>
      <form onSubmit={handleAddTodo}>
        <label htmlFor="todoTitle">Title </label>
        <input
          type="text"
          id="todoTitle"
          name="title"
          value={props.todoTitle}
          onChange={handleTitleChange}
        ></input>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
