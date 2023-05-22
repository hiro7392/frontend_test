import { useState } from "react"
import { Todo } from "../../domain/task"
import { DummyTodos } from "../../mocks/sampleTodos";
import { UserTaskLists } from "../templates/UserTaskLists";

const todoStyles={
    backgroundColor:"rgb(200,200,200)",
    testAlign:"left",
}
export const ShowTodoPage=()=>{
    const [todos,setTodos]=useState<Todo[]>(DummyTodos);
    return(
        <div>
            <UserTaskLists/>
        </div>
    )
}