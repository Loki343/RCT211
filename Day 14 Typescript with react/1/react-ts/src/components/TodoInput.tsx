import React, { useState } from "react";
import { postTodo } from '../api';


const TodoInput = () => {
  const [title, setTitle] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    postTodo(title);
    setTitle("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Entaer Todo"
          onChange={handleChange}
          value={title}
        />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};

export default TodoInput;
