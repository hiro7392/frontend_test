import { DummyTodos } from "../../mocks/sampleTodos"
import TaskList from "../organisms/TaskLists"

export const UserTaskLists=()=>{
    
    return(
        <div>
            <h1>
                Todoリスト
            </h1>
            <TaskList tasks={DummyTodos}/>
        </div>
           
    )
}