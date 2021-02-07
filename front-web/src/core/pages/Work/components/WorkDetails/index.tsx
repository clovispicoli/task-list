import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ReactComponent as ArrowIcon } from 'core/assets/images/arrow.svg';
import { makeRequest } from 'core/utils/request';
import { Works } from 'core/types/Task';
import InfoLoader from 'core/components/Loaders/InfoLoader';
import './styles.scss';

type ParamsType = {
    workId: string;
}

const WorkDetails = () => {
    const { workId } = useParams<ParamsType>();
    const [work, setwork] = useState<Works>()
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true);
        makeRequest({ url: `/works/${workId}` })
            .then(response => setwork(response.data))
            .finally(() => setIsLoading(false));
    }, [workId]);

    return (
        <div className="work-details-container">
            {isLoading ? <InfoLoader /> : (
                <>
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
                </>
            )}
        </div>
    );
};

export default WorkDetails;