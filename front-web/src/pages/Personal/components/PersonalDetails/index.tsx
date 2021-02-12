import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ReactComponent as ArrowIcon } from 'core/assets/images/arrow.svg';
import { makeRequest } from 'core/utils/request';
import PersonalDescriptionLoader from '../Loaders/PersonalDescriptionLoader';
import PersonalInfoLoader from '../Loaders/PersonalInfoLoader';
import './styles.scss'; import { Personal } from 'core/types/Tasks';
;


type ParamsType = {
    personalId: string;
}

const PersonalDetails = () => {
    const { personalId } = useParams<ParamsType>();
    const [personal, setPersonal] = useState<Personal>();
    const [isLoading, setIsLoading] = useState(false);

    console.log(isLoading);

    useEffect(() => {
        setIsLoading(true);
        makeRequest({ url: `/personals/${personalId}` })
            .then(response => setPersonal(response.data))
            .finally(() => setIsLoading(false));
    }, [personalId]);

    return (
        <div className="personal-details-container">
            <div className="card-base border-radius-20 personal-details">
                <Link to="/personals" className="personal-details-goback">
                    <ArrowIcon className="icon-goback" />
                    <h1 className="text-goback">voltar</h1>
                </Link>
                <div className="row">
                    <div className="col-6 pr-5">
                        {isLoading ? <PersonalInfoLoader /> : (
                            <>
                                <div className="personal-details-card text-center">
                                    <h1 className="personal-details-name">
                                        {personal?.name}
                                    </h1>
                                </div>

                            </>
                        )}
                    </div>
                    <div className="col-6 personal-details-card">
                        {isLoading ? <PersonalDescriptionLoader /> : (
                            <>
                                <h1 className="personal-description-title">
                                    Descrição do produto
                                </h1>
                                <p className="personal-description-text">
                                    {personal?.description}
                                </p>
                            </>
                        )}

                    </div>
                </div>
            </div>
        </div>
    );
};

export default PersonalDetails;