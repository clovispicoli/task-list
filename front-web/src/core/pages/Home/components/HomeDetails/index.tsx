import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ReactComponent as ArrowIcon } from 'core/assets/images/arrow.svg';
import { makeRequest } from 'core/utils/request';
import { Homes } from 'core/types/Task';
import InfoLoader from 'core/components/Loaders/InfoLoader';
import './styles.scss';

type ParamsType = {
    homeId: string;
}

const HomeDetails = () => {
    const { homeId } = useParams<ParamsType>();
    const [home, setHome] = useState<Homes>()
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true);
        makeRequest({ url: `/homes/${homeId}` })
            .then(response => setHome(response.data))
            .finally(() => setIsLoading(false));
    }, [homeId]);

    return (
        <div className="home-details-container">
            {isLoading ? <InfoLoader /> : (
                <>
                    <div className="card-base border-radius-20 home-details">
                        <Link to="/homes" className="home-details-goback">
                            <ArrowIcon className="icon-goback" />
                            <h1 className="text-goback">voltar</h1>
                        </Link>
                        <div className="row">
                            <div className="col-12 home-details-card">
                                <h1 className="home-description-title">
                                    Descrição da tarefa
                                </h1>
                                <h1 className="home-details-name">
                                    {home?.name}
                                </h1>
                                <p className="home-description-text">
                                    {home?.description}
                                </p>
                                <p className="task-date">
                                    {home?.date}
                                </p>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default HomeDetails;