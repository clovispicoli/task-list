import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ReactComponent as ArrowIcon } from 'core/assets/images/arrow.svg';
import { makeRequest } from 'core/utils/request';
import { Personals } from 'core/types/Task';
import InfoLoader from 'core/components/Loaders/InfoLoader';
import './styles.scss';

type ParamsType = {
    personalId: string;
}

const PersonalDetails = () => {
    const { personalId } = useParams<ParamsType>();
    const [personal, setpersonal] = useState<Personals>()
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true);
        makeRequest({ url: `/personals/${personalId}` })
            .then(response => setpersonal(response.data))
            .finally(() => setIsLoading(false));
    }, [personalId]);

    return (
        <div className="personal-details-container">
            {isLoading ? <InfoLoader /> : (
                <>
                    <div className="card-base border-radius-20 personal-details">
                        <Link to="/personals" className="personal-details-goback">
                            <ArrowIcon className="icon-goback" />
                            <h1 className="text-goback">voltar</h1>
                        </Link>
                        <div className="row">
                            <div className="col-12 personal-details-card">
                                <h1 className="personal-description-title">
                                    Descrição da tarefa
                                </h1>
                                <h1 className="personal-details-name">
                                    {personal?.name}
                                </h1>
                                <p className="personal-description-text">
                                    {personal?.description}
                                </p>
                                <p className="task-date">
                                    {personal?.date}
                                </p>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default PersonalDetails;