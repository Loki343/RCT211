import axios from "axios";
import React, { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import {
  postFailureAction,
  postRequestAction,
  postSuccessAction,
  todoFailureAction,
  todoRequestAction,
  todoSuccessAction,
} from "../redux/action";
import TodoInput from "./TodoInput";

const url = "http://localhost:8080/todos";

const Todos = () => {
  const dispatch = useDispatch();
  const { todos, isLoading } = useSelector((store) => {
    return {
      todos: store.todos,
      isLoading: store.isLoading,
    };
  }, shallowEqual);
  // console.log(todos);
  const getData = () => {
    dispatch(todoRequestAction());
    axios
      .get(url)
      .then((res) => {
        // console.log(res.data);
        dispatch(todoSuccessAction(res.data));
      })
      .catch((err) => {
        // console.log(err);
        dispatch(todoFailureAction());
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const handleAddTodo = (input) => {
    const newTodo = {
      title: input,
      status: false,
    };
    dispatch(postRequestAction());
    axios
      .post(url, newTodo)
      .then((res) => {
        console.log(res.data);
        dispatch(postSuccessAction(res.data));
        //we should call getData if this todo app is used more than 1 person
      })
      .catch((err) => {
        console.log(err);
        dispatch(postFailureAction());
      });
  };

  return (
    <div>
      <TodoInput addTodo={handleAddTodo} />
      <h1>Todo Server List</h1>
      {isLoading ? <h1>Loading...</h1> : ""}
      {todos.length > 0 &&
        todos.map((item) => (
          <h3 key={item.id}>
            {item.title} --- {item.status ? "Completed" : "Pending"}
          </h3>
        ))}
    </div>
  );
};

export default Todos;
