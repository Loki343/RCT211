import React, { useState } from "react";
import { addTodo } from "../redux/action";
import { useDispatch } from 'react-redux';

const TodoInput = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch()

  const handleAdd = () => {
    addTodo(text,dispatch);
    setText("");
  };

  return (
    <div>
      <input
        placeholder="Write your todo"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default TodoInput;
