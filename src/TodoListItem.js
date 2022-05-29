import React from "react";

// console.log("TodoListItem")
// todo.fields.Title

export default function TodoListItem({ todo: { title, id, fields }, onRemoveTodo }) {

  // console.log(fields.Title);

  const handleRemoveItem = () => {
    onRemoveTodo(id);
  };

  return (
    <div>
      <li>
        {fields.Title} <button onClick={handleRemoveItem}>Remove</button>
      </li>
    </div>
  );
}
