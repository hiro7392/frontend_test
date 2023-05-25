import { makeStyles } from "@material-ui/core";
import { Task } from "../../domain/task";
import { StarRatingOrganism } from "../organisms/StarRatingOrganism";


const useStyles = makeStyles({
    card: {
      borderRadius: '5px',
      margin: '1em',
      padding: '1em',
      backgroundColor: '#fff',
      border: '1px solid #ddd',
      '&:hover': {
        borderColor: '#888',
        border:"bold",
      },
    },
    title: {
      fontSize: '1.25em',
      fontWeight: 'bold',
      color: '#333',
    },
    description: {
      fontSize: '1em',
      fontWeight: 'bold',
      color: '#333',
    },
  });

type  TaskCardProps={
    task:Task;
};

const TaskCard:React.FC<TaskCardProps>=({task})=>{
    const classes=useStyles();
    return(
        <div className={classes.card}>
            <h3 className={classes.title}>{task.title}</h3>
            <p className={classes.description}>{task.content}</p>
        </div>
    );
};

export default TaskCard;