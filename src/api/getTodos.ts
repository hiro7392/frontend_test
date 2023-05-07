import { Todos } from "../domain/todo";

const endpoint="https://myapi.com/";

export function getAllTodos():Promise<Todos>{
    return fetch(endpoint).then(async(res)=>{
        const data= await res.json();
        if(!res.ok){
            //200番台いがのレスポンスの時
            throw data;
        }
        return data;
    })
}