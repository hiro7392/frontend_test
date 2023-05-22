import { makeStyles } from "@material-ui/core";


const useStyles = makeStyles({
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      
      backgroundColor: '#ddd',
    },
  });

type TaskListTemplateProps = {
children: React.ReactNode;
};

export const TaskListTemplate:React.FC<TaskListTemplateProps>=({children})=>{

    const classes=useStyles();
    return(
        <div className={classes.container}>
            {children}
            {children}
            {children}
        </div>   
    );
}

export default TaskListTemplate