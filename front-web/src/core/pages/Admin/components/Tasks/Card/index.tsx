import React from 'react';

import './styles.scss';
// import TaskDate from 'core/components/TaskDate';
import { Task } from 'core/types/Task';
import { Link } from 'react-router-dom';


type Props = {
    task: Task;
}

const Card = ({ task }: Props) => {
    return (
        <div className="card-base task-card-admin">
            <div className="row">
                <div className="col-2 text-center border-right py-3">
                </div>
                <div className="col-7 py-3">
                    <h3 className="task-card-name-admin">
                        {task.name}
                    </h3>
                    {/* <TaskDate date={task.date} /> */}
                    <div >
                        <span className="badge badge-pill badge-secondary mr-2">
                            Categoria 1
                        </span>
                        <span className="badge badge-pill badge-secondary mr-2">
                            Categoria 2
                        </span>
                    </div>
                </div>
                <div className="col-3 pt-3 pr-5">
                    <Link
                        to={`/admin/products/${task.id}`}
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

export default Card; 