import React from 'react';
import { Task } from 'core/types/Task';
import './styles.scss';
// import TaskDate from 'core/components/TaskDate';

type Props = {
    task: Task;
}

const HomeCard = ({ task }: Props) => (
    <div className="card-base border-radius-10 task-card">
        
        <div className="task-info">
            <h6 className="task-name">
                {task.name}
            </h6>
            {/* <TaskDate date={task.date}/> */}
        </div>
    </div>
);

export default HomeCard; 