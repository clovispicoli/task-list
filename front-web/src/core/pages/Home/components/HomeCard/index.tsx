import React from 'react';
import { Homes } from 'core/types/Task';
import './styles.scss';

type Props = {
    task: Homes;
}

const HomeCard = ({ task }: Props) => (
    <div className="card-base border-radius-10 home-card">
        <h6 className="home-name">
            {task.name}
        </h6>
        <div className="home-info">
            {task.date}
        </div>
    </div>
);

export default HomeCard; 