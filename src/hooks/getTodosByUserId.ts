import { getAllTodos } from "../api/getTodos";

export async function getMyTodo(userId:string){
    const data=await getAllTodos();

    const myTodos=data.filter((Todo)=>{
        Todo.id.match(userId)
    })
    if(!myTodos.length){
        return null;
    }

    return myTodos;
}