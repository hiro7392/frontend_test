import { useState } from "react"
import { DummyTodos } from "../../mocks/sampleTodos";
import TaskListTemplate from "../templates/UserTaskTemplate";
import TaskList from "../organisms/TaskLists";
import { Task } from "../../domain/task";

const todoStyles={
    backgroundColor:"rgb(200,200,200)",
    testAlign:"left",
}
export const UserTaskPage:React.FC=()=>{
    const [todos,setTodos]=useState<Task[]>(DummyTodos);
    return(
        <div>
            <h1>サンプルTODO</h1>
            <TaskListTemplate>
                <TaskList tasks={todos} />
            </TaskListTemplate>
        </div>
    )
}
export default UserTaskPage;