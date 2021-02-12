import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ReactComponent as ArrowIcon } from 'core/assets/images/arrow.svg';
import { makeRequest } from 'core/utils/request';
import WorkDescriptionLoader from '../Loaders/WorkDescriptionLoader';
import WorkInfoLoader from '../Loaders/WorkInfoLoader';
import './styles.scss';
import { Work } from 'core/types/Tasks';

type ParamsType = {
    workId: string;
}

const WorkDetails = () => {
    const { workId } = useParams<ParamsType>();
    const [work, setwork] = useState<Work>();
    const [isLoading, setIsLoading] = useState(false);

    console.log(isLoading);

    useEffect(() => {
        setIsLoading(true);
        makeRequest({ url: `/works/${workId}` })
            .then(response => setwork(response.data))
            .finally(() => setIsLoading(false));
    }, [workId]);

    return (
        <div className="work-details-container">
            <div className="card-base border-radius-20 work-details">
                <Link to="/works" className="work-details-goback">
                    <ArrowIcon className="icon-goback" />
                    <h1 className="text-goback">voltar</h1>
                </Link>
                <div className="row">
                    <div className="col-6 pr-5">
                        {isLoading ? <WorkInfoLoader /> : (
                            <>
                                <div className="work-details-card text-center">
                                    <h1 className="work-details-name">
                                        {work?.name}
                                    </h1>
                                </div>
                            </>
                        )}
                    </div>
                    <div className="col-6 work-details-card">
                        {isLoading ? <WorkDescriptionLoader /> : (
                            <>
                                <h1 className="work-description-title">
                                    Descrição do produto
                                </h1>
                                <p className="work-description-text">
                                    {work?.description}
                                </p>
                            </>
                        )}

                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkDetails;