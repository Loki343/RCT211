import React, { useState, useEffect } from "react";
import { getTodos } from "../api";
import { Todo } from "../constants";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";

const TodoApp = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [updt, setUpdt] = useState<boolean>(false);

  const onAdd = () => {
    setUpdt((prev) => !prev);
  };

  useEffect(() => {
    //here getTodos is a async function so we have to handleit
    getTodos().then((res) => {
      setTodos(res);
    });
  }, [updt]);
  console.log(todos);

  return (
    <div>
      <TodoInput update={onAdd} />
      <h3>Todo Lists</h3>
      {todos.length > 0 && todos.map((el) => <TodoItem key={el.id} {...el} update={onAdd}/>)}
    </div>
  );
};

export default TodoApp;
