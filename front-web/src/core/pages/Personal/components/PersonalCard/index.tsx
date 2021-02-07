import React from 'react';
import { Personals } from 'core/types/Task';
import './styles.scss';

type Props = {
    task: Personals;
}

const PersonalCard = ({ task }: Props) => (
    <div className="card-base border-radius-10 personal-card">
        <h6 className="personal-name">
            {task.name}
        </h6>
        <div className="personal-info">
            {task.date}
        </div>
    </div>
);

export default PersonalCard; 