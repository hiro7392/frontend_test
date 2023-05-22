import { Task } from "../../domain/task"
import TaskCard from "../molecules/TaskCard";
import styled from 'styled-components';
type TaskListsProps={
    tasks:Task[];
};
const TaskListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`;
export const TaskList:React.FC<TaskListsProps>=({tasks})=>{

    return(
        // {
        //     todos.map((todo:Todo,index)=>{
        //         return(
        //             <div style={todoStyles}>
        //                 <h3>id:{todo.id}</h3>
        //                 <h3>content:{todo.content}</h3>
        //                 <h3>updated_at:{todo.updated_at}</h3>
        //             </div>
        //         );
        //     })
        // }
        <TaskListContainer>
            <div className="task-list"> 
            {
                tasks.map((task)=>(
                    <TaskCard task={task}/>
                ))
            }
            </div>
        </TaskListContainer>
       
    );
};

export default TaskList;