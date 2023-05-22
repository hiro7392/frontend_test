import { Task } from "../../domain/task";

type  TaskCardProps={
    task:Task;
};
const TaskCard:React.FC<TaskCardProps>=({task})=>{
    return(
        <div className="task-card">
            <h3 className="task-title">{task.title}</h3>
            <p className="task-description">{task.content}</p>
        </div>
    );
};

export default TaskCard;