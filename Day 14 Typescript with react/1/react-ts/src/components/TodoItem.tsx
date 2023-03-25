import React from "react";
import { Todo } from "../constants";

const TodoItem = ({ title, status }: Todo) => {
  return (
    <div>
      <h3>
        Title: {title} -- Status: {status ? "Done" : "Not done"}
      </h3>
      <button>Toggle</button>
    </div>
  );
};

export default TodoItem;
