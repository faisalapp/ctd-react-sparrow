import React from "react";

export default function AddTodoForm({onAddTodo}) {

  // const {onAddTodo, todoTitle} = props; // applying destructuring directly in parameters

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

    onAddTodo({ title: todoTitle, id: Date.now() });
   
    // Inside handleAddTodo, remove the reset() method and replace it with logic to reset the todoTitle state to an empty String
    // event.target[0].value="" // is this correct logic? If some mentor could verify in the feedback. Thx
    setTodoTitle(""); // correct logic

    

  };

  return (
    <div>
      <form onSubmit={handleAddTodo}>
        <label htmlFor="todoTitle">Title </label>
        <input
          type="text"
          id="todoTitle"
          name="title"
          value={todoTitle} // there is no such parameter for this component on app.js line # 25  so how come no error flag?
          onChange={handleTitleChange}
        ></input>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
