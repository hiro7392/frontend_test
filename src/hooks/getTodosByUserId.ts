import { getAllTodos } from "../api/getTodos";

export async function getMyTodo(userId:string){
    const data=await getAllTodos();

    const myTodo=data.filter(todo=>
        todo.id===userId
    );
    
    if(!myTodo.length){
        return null;
    }

    return myTodo;
}