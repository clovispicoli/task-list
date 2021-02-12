import { Personal } from 'core/types/Tasks';
import React from 'react';
import './styles.scss';

type Props = {
    personal: Personal;
}

const PersonalCard = ({ personal }: Props) => (
    <div className="card-base border-radius-10 home-card">
        {personal.id}
        <div className="personal-info">
            <h6 className="personal-name">
                {personal.name}
            </h6>
            <h6 className="personal-name">
                {personal.date}
            </h6>
        </div>
    </div>
);

export default PersonalCard;