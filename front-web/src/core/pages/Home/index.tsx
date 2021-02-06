import React from 'react';
import HomeCard from './components/HomeCard';

const Home = () => (
    <div className="home-container">
        <h1 className="home-title">
            Task Home
   </h1>
        <div className="home-tasks">
            <HomeCard />
        </div>
    </div>
);

export default Home;