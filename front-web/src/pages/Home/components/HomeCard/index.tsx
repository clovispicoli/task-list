import React from 'react';
import { Home } from 'core/types/Tasks';
import './styles.scss';

type Props = {
    home: Home;
}

const HomeCard = ({ home }: Props) => (
    <div className="card-base border-radius-10 home-card">
            {home.id}
        <div className="home-info">
            <h6 className="home-name">
                {home.name}
            </h6>
            <h6 className="home-name">
                {home.date}
            </h6>
        </div>
    </div>
);

export default HomeCard;