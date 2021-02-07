import { makeRequest } from 'core/utils/request';
import { PersonalsResponse } from 'core/types/Task';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PersonalCard from './components/PersonalCard';
import './styles.scss';

const Personal = () => {  

    const [personalsResponse, setPersonalsResponse] = useState<PersonalsResponse>();

    useEffect(() => {
        const params = {
            page: 0,
            linesPerPage: 12
        }

      makeRequest({url: '/personals', params})
      .then(response => setPersonalsResponse(response.data));
    }, []);

   return (
    <div className="personal-container">
        <h1 className="personal-title">
            Task Personal
        </h1>
        <div className="personal-tasks">
            {personalsResponse?.content.map(personal => (
                <Link to={`/personals/${personal.id}`} key={personal.id}>
                    <PersonalCard task={personal}/>
                </Link>
            ))}
        </div>
    </div>
    );
}

export default Personal;