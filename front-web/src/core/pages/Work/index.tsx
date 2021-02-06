import React from 'react';
import WorkCard from './components/WorkCard';
import './styles.scss';

const Work = () => (
    <div className="work-container">
        <h1 className="work-title">
            Task Work
   </h1>
        <div className="work-tasks">
            <WorkCard />
            <WorkCard />
            <WorkCard />
            <WorkCard />
            <WorkCard />
            <WorkCard />
            <WorkCard />
            <WorkCard />
            <WorkCard />
            <WorkCard />
        </div>
    </div>
);

export default Work;;