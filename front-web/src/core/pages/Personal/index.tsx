import React from 'react';
import PersonalCard from './components/PersonalCard';
import './styles.scss';

const Personal = () => (
    <div className="personal-container">
        <h1 className="personal-title">
            Task Personal
   </h1>
        <div className="personal-tasks">
            <PersonalCard />
            <PersonalCard />
            <PersonalCard />
            <PersonalCard />
            <PersonalCard />
            <PersonalCard />
            <PersonalCard />
            <PersonalCard />
            <PersonalCard />
            <PersonalCard />
            <PersonalCard />
        </div>
    </div>
);

export default Personal;