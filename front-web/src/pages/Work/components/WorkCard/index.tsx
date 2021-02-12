import React from 'react';
import { Work } from 'core/types/Tasks';
import './styles.scss';

type Props = {
    work: Work;
}

const WorkCard = ({ work }: Props) => (
    <div className="card-base border-radius-10 work-card">
        {work.id}
        <div className="work-info">
            <h6 className="work-name">
                {work.name}
            </h6>
            <h6 className="work-name">
                {work.date}
            </h6>
        </div>
    </div>
);

export default WorkCard;