import React from "react";

// console.log("TodoListItem")

export default function TodoListItem({ todo: { title, id }, onRemoveTodo }) {
  const handleRemoveItem = () => {
    onRemoveTodo(id);
  };

  return (
    <div>
      <li>
        {title} <button onClick={handleRemoveItem}>Remove</button>
      </li>
    </div>
  );
}
