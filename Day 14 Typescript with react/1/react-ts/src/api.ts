import axios, { AxiosResponse } from "axios";
import { Todo } from "./constants";

export const postTodo = async (title: string) => {
  const newTodo: Todo = {
    title,
    status: false,
  };

  let res: AxiosResponse<Todo> = await axios.post(
    "http://localhost:8080/todos",
    newTodo
  );
};

export const getTodos = async () => {
  const res: AxiosResponse<Todo[]> = await axios.get(
    "http://localhost:8080/todos"
  );
  return res.data;
};

export const toggleTodo = async (id: number, status: boolean) => {
  const res = await axios.patch(`http://localhost:8080/todos/${id}`, {
    status: !status,
  });
};

//0r
/*
export const toggleTodo = async (id: number) => {
  const todo = await axios.get(`http://localhost:8080/todos/${id}`);
  const res = await axios.patch(`http://localhost:8080/todos/${id}`, {
    status: !todo.status,
  });
};
*/
