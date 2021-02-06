import React from 'react';
import { ReactComponent as WorkImage } from 'core/assets/images/task.svg';
import './styles.scss';

const WorkCard = () => (
    <div className="card-base border-radius-10 work-card">
        <WorkImage />
        <div className="work-info">
            <h6 className="work-name">
                Computador Work
            </h6>
        </div>
    </div>
);

export default WorkCard; 