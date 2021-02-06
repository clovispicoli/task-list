import React from 'react';
import PersonalCard from './components/PersonalCard';

const Personal = () => (
    <div className="personal-container">
        <h1 className="personal-title">
            Task Personal
   </h1>
        <div className="personal-tasks">
            <PersonalCard />
        </div>
    </div>
);

export default Personal;