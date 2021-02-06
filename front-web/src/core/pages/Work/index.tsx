import React from 'react';
import { Link } from 'react-router-dom';
import WorkCard from './components/WorkCard';
import './styles.scss';

const Work = () => (
    <div className="work-container">
        <h1 className="work-title">
            Task Work
   </h1>
        <div className="work-tasks">
            <Link to="/works/1"><WorkCard /></Link>
            <Link to="/works/2"><WorkCard /></Link>
            <Link to="/works/3"><WorkCard /></Link>
            <Link to="/works/4"><WorkCard /></Link>
            <Link to="/works/5"><WorkCard /></Link>
            <Link to="/works/6"><WorkCard /></Link>
            <Link to="/works/7"><WorkCard /></Link>
            <Link to="/works/8"><WorkCard /></Link>
            <Link to="/works/9"><WorkCard /></Link>
            <Link to="/works/10"><WorkCard /></Link>
        </div>
    </div>
);

export default Work;;