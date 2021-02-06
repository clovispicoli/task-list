import React from 'react';
import { Link } from 'react-router-dom';
import PersonalCard from './components/PersonalCard';
import './styles.scss';

const Personal = () => (
    <div className="personal-container">
        <h1 className="personal-title">
            Task Personal
   </h1>
        <div className="personal-tasks">
            <Link to="/personals/1"><PersonalCard /></Link>
            <Link to="/personals/2"><PersonalCard /></Link>
            <Link to="/personals/3"><PersonalCard /></Link>
            <Link to="/personals/4"><PersonalCard /></Link>
            <Link to="/personals/5"><PersonalCard /></Link>
            <Link to="/personals/6"><PersonalCard /></Link>
            <Link to="/personals/7"><PersonalCard /></Link>
            <Link to="/personals/8"><PersonalCard /></Link>
            <Link to="/personals/9"><PersonalCard /></Link>
            <Link to="/personals/10"><PersonalCard /></Link>
        </div>
    </div>
);

export default Personal;