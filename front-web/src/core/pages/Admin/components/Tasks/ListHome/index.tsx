import React from 'react';
import { useHistory } from 'react-router-dom';

const ListHome = () => {
    const history = useHistory();

    const handleCreate = () => {
        history.push('/admin/homes/create');
    }

    return (
        <div className="admin-products-list">
            <button className="btn btn-primary btn-lg" onClick={handleCreate}>
                ADICIONAR
            </button>
        </div>
    )
}

export default ListHome; 