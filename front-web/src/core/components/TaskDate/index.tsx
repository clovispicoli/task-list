import React from 'react';
import './styles.scss';

type Props = {
    date: number;
}

const formatDate = (date: number) => {
    return new Intl.NumberFormat('pt-BR', { minimumFractionDigits: 2 }).format(date);
}

const TaskDate = ({ date }: Props) => (
    <div className="task-date-container">
            <h3 className="task-date">
                {formatDate(date)}
             </h3>
    </div>
);

export default TaskDate;

