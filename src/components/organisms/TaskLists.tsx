import { makeStyles } from "@material-ui/core";
import { Task } from "../../domain/task"
import TaskCard from "../molecules/TaskCard";

type TaskListsProps={
    tasks:Task[];
};
const useStyles = makeStyles({
    list: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'start',
      backgroundColor: '#f5f5f5',
      padding: '1em',
      borderRadius: '5px',
    },
  });
  
export const TaskList:React.FC<TaskListsProps>=({tasks})=>{

    const classes=useStyles();
    return(
            <div className={classes.list}> 
            {tasks.map((task)=>(
                    <TaskCard task={task}/>
            ))}
            </div>
    );
};

export default TaskList;