import React from 'react';
import { useHistory } from 'react-router-dom';

const ListWork = () => {
    const history = useHistory();

    const handleCreate = () => {
        history.push('/admin/works/create');
    }

    return (
        <div className="admin-products-list">
            <button className="btn btn-primary btn-lg" onClick={handleCreate}>
                ADICIONAR
            </button>
        </div>
    )
}

export default ListWork; 