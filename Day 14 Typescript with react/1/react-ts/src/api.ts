import axios from "axios"

interface Todo {
    title:string;
    status:boolean;
    id?:number;
}

export const postTodo = async (title:string) =>{
    const newTodo:Todo = {
        title,
        status:false
    }

    let res =await axios.post("http://localhost:8080/todos",newTodo)
}