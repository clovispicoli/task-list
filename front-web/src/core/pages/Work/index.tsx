import { TaskResponse } from 'core/types/Task';
import { makeRequest } from 'core/utils/request';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import WorkCard from 'core/pages/Work/components/WorkCard';
import CardLoader from 'core/components/Loaders/CardLoader';
import Pagination from 'core/components/Pagination';
import './styles.scss';

const Work = () => {

    const [worksResponse, setWorksResponse] = useState<TaskResponse>();
    const [ isLoading, setIsLoading ] = useState(false);
    const [ activePage, setActivePage ] = useState(0);

    useEffect(() => {
        const params = {
            page: activePage,
            linesPerPage: 12
        }
        setIsLoading(true);
        makeRequest({ url: '/works', params })
            .then(response => setWorksResponse(response.data))
            .finally(() => {
                setIsLoading(false);
            })
    }, [activePage]);

    return (
        <div className="work-container">
            <h1 className="work-title">
                Task work
            </h1>
            <div className="work-tasks">
            {isLoading ? <CardLoader /> : (
                worksResponse?.content.map(work => (
                    <Link to={`/works/${work.id}`} key={work.id}>
                        <WorkCard task={work} />
                    </Link>
                )))}
            </div>
            {worksResponse && (
                <Pagination
                    totalPages={worksResponse.totalPages}
                    activePage={activePage}
                    onChange={page => setActivePage(page)}
                />
            )}
        </div>
    );
}

export default Work;