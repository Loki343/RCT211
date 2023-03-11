import React, { useState } from "react";

const TodoInput = ({ addTodo }) => {
  const [input, setInput] = useState("");
  const handleAddTodo = () => {
    if (input.length > 0) {
      addTodo(input);
    }
    setInput("");
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Add todo"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add Todo</button>
    </div>
  );
};

export default TodoInput;
