import React from "react";
import { toggleTodo } from "../api";
import { Todo } from "../constants";

interface TodoItemProps extends Todo {
  update: () => void;
}

const TodoItem = ({ title, status, id, update }: TodoItemProps) => {
  const handleToggle = () => {
    toggleTodo(Number(id), status);
    update();
  };

  return (
    <div>
      <h3>
        Title: {title} -- Status: {status ? "Done" : "Not done"}
      </h3>
      <button onClick={handleToggle}>Toggle</button>
    </div>
  );
};

export default TodoItem;
