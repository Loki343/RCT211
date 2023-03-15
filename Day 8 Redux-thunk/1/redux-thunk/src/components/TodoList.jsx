import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, getTodos } from "../redux/action";

import TodoInput from "./TodoInput";

const TodoList = () => {
  const dispatch = useDispatch();

  const todos = useSelector((store) => {
    // console.log(store.todos);
    return store.todos;
  });

  useEffect(() => {
    // getTodos(dispatch);
    dispatch(getTodos)
  }, []);

  return (
    <div>
      <TodoInput/>
      <h1>Todo List</h1>
      {todos.length > 0 &&
        todos.map((d) => (
          <div key={d.id}>
            {d.title} --- {d.status ? "Completed" : "Pending"}
          </div>
        ))}
    </div>
  );
};

export default TodoList;
