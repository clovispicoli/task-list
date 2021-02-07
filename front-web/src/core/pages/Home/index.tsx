import { HomesResponse } from 'core/types/Task';
import { makeRequest } from 'core/utils/request';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import HomeCard from './components/HomeCard';
import './styles.scss';

const Home = () => {  

    const [homesResponse, setHomesResponse] = useState<HomesResponse>();

    useEffect(() => {
        const params = {
            page: 0,
            linesPerPage: 12
        }

      makeRequest({url: '/homes', params})
      .then(response => setHomesResponse(response.data));
    }, []);

   return (
    <div className="home-container">
        <h1 className="home-title">
            Task Home
        </h1>
        <div className="home-tasks">
            {homesResponse?.content.map(home => (
                <Link to={`/admin/${home.id}`} key={home.id}>
                    <HomeCard task={home}/>
                </Link>
            ))}
        </div>
    </div>
    );
}

export default Home;;