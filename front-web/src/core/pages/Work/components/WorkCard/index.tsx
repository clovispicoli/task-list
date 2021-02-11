import React from 'react';
import { Task } from 'core/types/Task';
import './styles.scss';

type Props = {
    task: Task;
}

const WorkCard = ({ task }: Props) => (
    <div className="card-base border-radius-10 work-card">
        <h6 className="work-name">
            {task.name}
        </h6>
        <div className="work-info">
            {task.date}
        </div>
    </div>
);

export default WorkCard; 