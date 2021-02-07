import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ReactComponent as ArrowIcon } from 'core/assets/images/arrow.svg';
import './styles.scss';
import { makeRequest } from 'core/utils/request';
import { Homes } from 'core/types/Task';

type ParamsType = {
    personalId: string;
}

const PersonalDetails = ()  => {
    const { personalId } = useParams<ParamsType>();
    const [personal, setHome] = useState<Homes>()

    useEffect(() => {
        makeRequest({ url: `/personals/${personalId}`})
        .then(response => setHome(response.data));
    }, [personalId]);

    return (
        <div className="personal-details-container">
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
        </div>
    );
};

export default PersonalDetails;