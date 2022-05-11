import React from "react";
import InputWithLabel from "./InputWithLabel";

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
    setTodoTitle("");
  };

  return (
    <div>
      <form onSubmit={handleAddTodo}>
      <InputWithLabel todoTitle={todoTitle} handleTitleChange={handleTitleChange} isFocused>Title </InputWithLabel>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
