import { makeRequest } from 'core/utils/request';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Pagination from 'core/components/Pagination';
import './styles.scss';
import PersonalCardLoader from './components/Loaders/PersonalCardLoader';
import PersonalCard from './components/CardLoader';
import { PersonalResponse } from 'core/types/Tasks';

const Personal = () => {

    const [personalsResponse, setPersonalsResponse] = useState<PersonalResponse>();
    const [ isLoading, setIsLoading ] = useState(false);
    const [ activePage, setActivePage ] = useState(0);

    useEffect(() => {
        const params = {
            page: activePage,
            linesPerPage: 12
        }
        setIsLoading(true);
        makeRequest({ url: '/personals', params })
            .then(response => setPersonalsResponse(response.data))
            .finally(() => {
                setIsLoading(false);
            })
    }, [activePage]);

    return (
        <div className="personal-container">
            <h1 className="personal-title">
                Task personal
            </h1>
            <div className="personal-tasks">
            {isLoading ? <PersonalCardLoader /> : (
                personalsResponse?.content.map(personal => (
                    <Link to={`/personals/${personal.id}`} key={personal.id}>
                        <PersonalCard personal={personal} />
                    </Link>
                )))}
            </div>
            {personalsResponse && (
                <Pagination
                    totalPages={personalsResponse.totalPages}
                    activePage={activePage}
                    onChange={page => setActivePage(page)}
                />
            )}
        </div>
    );
}

export default Personal;