import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ReactComponent as ArrowIcon } from 'core/assets/images/arrow.svg';
import { makeRequest } from 'core/utils/request';
import HomeDescriptionLoader from '../Loaders/HomeDescriptionLoader';
import HomeInfoLoader from '../Loaders/HomeInfoLoader';
import './styles.scss';
import { Home } from 'core/types/Tasks';

type ParamsType = {
    homeId: string;
}

const HomeDetails = () => {
    const { homeId } = useParams<ParamsType>();
    const [home, setHome] = useState<Home>();
    const [isLoading, setIsLoading] = useState(false);

    console.log(isLoading);

    useEffect(() => {
        setIsLoading(true);
        makeRequest({ url: `/homes/${homeId}` })
            .then(response => setHome(response.data))
            .finally(() => setIsLoading(false));
    }, [homeId]);

    return (
        <div className="home-details-container">
            <div className="card-base border-radius-20 home-details">
                <Link to="/homes" className="home-details-goback">
                    <ArrowIcon className="icon-goback" />
                    <h1 className="text-goback">voltar</h1>
                </Link>
                <div className="row">
                    <div className="col-6 pr-5">
                        {isLoading ? <HomeInfoLoader /> : (
                            <>
                                <div className="home-details-card text-center">
                                <h1 className="home-details-name">
                                    {home?.name}
                                    
                                </h1>
                                </div>
                            </>
                        )}
                    </div>
                    <div className="col-6 home-details-card">
                        {isLoading ? <HomeDescriptionLoader /> : (
                            <>
                                <h1 className="home-description-title">
                                    Descrição do produto
                                </h1>
                                <p className="home-description-text">
                                    {home?.description}
                                </p>
                            </>
                        )}

                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeDetails;