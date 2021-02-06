import React from 'react';
import HomeCard from './components/HomeCard';
import './styles.scss';

const Home = () => (
    <div className="home-container">
        <h1 className="home-title">
            Task Home
   </h1>
        <div className="home-tasks">
            <HomeCard />
            <HomeCard />
            <HomeCard />
            <HomeCard />
            <HomeCard />
            <HomeCard />
            <HomeCard />
            <HomeCard />
            <HomeCard />
            <HomeCard />
        </div>
    </div>
);

export default Home;;