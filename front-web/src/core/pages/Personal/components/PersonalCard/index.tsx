import React from 'react';
import { ReactComponent as PersonalImage } from 'core/assets/images/task.svg';
import './styles.scss';

const PersonalCard = () => (
    <div className="card-base border-radius-10 personal-card">
        <PersonalImage />
        <div className="personal-info">
            <h6 className="personal-name">
                Computador Personal
            </h6>
        </div>
    </div>
);

export default PersonalCard; 