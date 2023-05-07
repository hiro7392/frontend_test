import { useState } from "react"
import { Todo } from "../../domain/todo"
import { DummyTodos } from "../../mocks/sampleTodos";

const todoStyles={
    backgroundColor:"rgb(200,200,200)",
    testAlign:"left",
}
export const ShowTodoPage=()=>{
    const [todos,setTodos]=useState<Todo[]>(DummyTodos);
    return(
        <div>
            
            <h1>
                Todoリスト
            </h1>
            {
                todos.map((todo:Todo,index)=>{
                    return(
                        <div style={todoStyles}>
                            <h3>id:{todo.id}</h3>
                            <h3>content:{todo.content}</h3>
                            <h3>updated_at:{todo.updated_at}</h3>
                        </div>
                    );
                })
            }
        </div>
    )
}