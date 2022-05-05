import React from "react";

export default function InputWithLabel({
  handleTitleChange,
  todoTitle,
  children,
  isFocused
  
  
}) {
  // const {handleTitleChange, todoTitle, children, isFocused} = props; // applying destructuring

  const inputRef = React.useRef();

  React.useEffect(() => {
    inputRef.current.focus();
  });

  return (
    <>
      <label htmlFor="todoTitle">{children}</label>
      <input
        type="text"
        id="todoTitle"
        name="title"
        value={todoTitle}
        onChange={handleTitleChange}
        ref={inputRef}
      ></input>
    </>
  );
}
