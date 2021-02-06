import React from 'react';
import { ReactComponent as HomeImage } from 'core/assets/images/task.svg';
import './styles.scss';

const HomeCard = () => (
    <div className="card-base border-radius-10 home-card">
        <HomeImage />
        <div className="home-info">
            <h6 className="home-name">
                Computador da Home
            </h6>
        </div>
    </div>
);

export default HomeCard; 