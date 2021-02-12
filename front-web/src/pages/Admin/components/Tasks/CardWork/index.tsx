import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';
import { Work } from 'core/types/Tasks';


type Props = {
    work: Work;
    onRemove: (Id: number) => void;
}

const CardWork = ({ work, onRemove }: Props) => {
    return (
        <div className="card-base work-card-admin">
            <div className="row">
                <div className="col-2 text-center py-3">
                </div>
                <div className="col-7 py-3">
                    <h3 className="work-card-name-admin">
                        {work.id}
                    </h3>
                    <h3 className="work-card-name-admin">
                        {work.name}
                    </h3>
                </div>
                <div className="col-3 pt-3 pr-5">
                    <Link
                        to={`/admin/works/${work.id}`}
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

export default CardWork; 