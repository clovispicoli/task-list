import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ReactComponent as ArrowIcon } from 'core/assets/images/arrow.svg';
import './styles.scss';
import { makeRequest } from 'core/utils/request';
import { Homes } from 'core/types/Task';

type ParamsType = {
    workId: string;
}

const WorkDetails = ()  => {
    const { workId } = useParams<ParamsType>();
    const [work, setHome] = useState<Homes>()

    useEffect(() => {
        makeRequest({ url: `/works/${workId}`})
        .then(response => setHome(response.data));
    }, [workId]);

    return (
        <div className="work-details-container">
            <div className="card-base border-radius-20 work-details">
                <Link to="/works" className="work-details-goback">
                    <ArrowIcon className="icon-goback" />
                    <h1 className="text-goback">voltar</h1>
                </Link>
                <div className="row">
                    <div className="col-12 work-details-card">
                        <h1 className="work-description-title">
                            Descrição da tarefa
                        </h1>
                        <h1 className="work-details-name">
                            {work?.name}
                       </h1>
                        <p className="work-description-text">
                            {work?.description}
                        </p>
                        <p className="task-date">
                            {work?.date}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkDetails;