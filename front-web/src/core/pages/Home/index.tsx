import { TaskResponse } from 'core/types/Task';
import { makeRequest } from 'core/utils/request';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import HomeCard from 'core/pages/Home/components/HomeCard';
import CardLoader from 'core/components/Loaders/CardLoader';
import Pagination from 'core/components/Pagination';
import './styles.scss';

const Home = () => {

    const [homesResponse, setHomesResponse] = useState<TaskResponse>();
    const [ isLoading, setIsLoading ] = useState(false);
    const [ activePage, setActivePage ] = useState(0);

    useEffect(() => {
        const params = {
            page: activePage,
            linesPerPage: 12
        }
        setIsLoading(true);
        makeRequest({ url: '/homes', params })
            .then(response => setHomesResponse(response.data))
            .finally(() => {
                setIsLoading(false);
            })
    }, [activePage]);

    return (
        <div className="home-container">
            <h1 className="home-title">
                Task Home
            </h1>
            <div className="home-tasks">
            {isLoading ? <CardLoader /> : (
                homesResponse?.content.map(home => (
                    <Link to={`/homes/${home.id}`} key={home.id}>
                        <HomeCard task={home} />
                    </Link>
                )))}
            </div>
            {homesResponse && (
                <Pagination
                    totalPages={homesResponse.totalPages}
                    activePage={activePage}
                    onChange={page => setActivePage(page)}
                />
            )}
        </div>
    );
}

export default Home;;