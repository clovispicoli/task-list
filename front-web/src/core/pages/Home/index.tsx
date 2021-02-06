import React from 'react';
import { Link } from 'react-router-dom';
import HomeCard from './components/HomeCard';
import './styles.scss';

const Home = () => (
    <div className="home-container">
        <h1 className="home-title">
            Task Home
   </h1>
        <div className="home-tasks">
            <Link to="/homes/1"><HomeCard /></Link>
            <Link to="/homes/2"><HomeCard /></Link>
            <Link to="/homes/3"><HomeCard /></Link>
            <Link to="/homes/4"><HomeCard /></Link>
            <Link to="/homes/5"><HomeCard /></Link>
            <Link to="/homes/6"><HomeCard /></Link>
            <Link to="/homes/7"><HomeCard /></Link>
            <Link to="/homes/8"><HomeCard /></Link>
            <Link to="/homes/9"><HomeCard /></Link>
            <Link to="/homes/10"><HomeCard /></Link>
        </div>
    </div>
);

export default Home;;