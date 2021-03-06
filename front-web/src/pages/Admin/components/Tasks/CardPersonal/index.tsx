import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';
import { Personal } from 'core/types/Tasks';


type Props = {
    personal: Personal;
    onRemove: (Id: number) => void;
}

const CardPersonal = ({ personal, onRemove }: Props) => {
    return (
        <div className="card-base personal-card-admin">
            <div className="row">
                <div className="col-2 text-center py-3">
                </div>
                <div className="col-7 py-3">
                    <h3 className="personal-card-name-admin">
                        {personal.id}
                    </h3>
                    <h3 className="personal-card-name-admin">
                        {personal.name}
                    </h3>
                </div>
                <div className="col-3 pt-3 pr-5">
                    <Link
                        to={`/admin/personals/${personal.id}`}
                        type="button"
                        className="btn btn-outline-secondary btn-block border-radius-10 mb-3 btn-edit"
                    >
                        EDITAR
                    </Link>
                    <button
                        type="button"
                        className="btn btn-outline-danger btn-block border-radius-10"
                    >
                        EXCLUIR
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CardPersonal; 