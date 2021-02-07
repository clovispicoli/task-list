import { makeRequest } from 'core/utils/request';
import { WorksResponse } from 'core/types/Task';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import WorkCard from './components/WorkCard';
import './styles.scss';

const Work = () => {  

    const [worksResponse, setWorksResponse] = useState<WorksResponse>();

    useEffect(() => {
        const params = {
            page: 0,
            linesPerPage: 12
        }

      makeRequest({url: '/works', params})
      .then(response => setWorksResponse(response.data));
    }, []);

   return (
    <div className="work-container">
        <h1 className="work-title">
            Task work
        </h1>
        <div className="work-tasks">
            {worksResponse?.content.map(work => (
                <Link to={`/works/${work.id}`} key={work.id}>
                    <WorkCard task={work}/>
                </Link>
            ))}
        </div>
    </div>
    );
}

export default Work;