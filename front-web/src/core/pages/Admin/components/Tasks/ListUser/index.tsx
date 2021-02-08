import React from 'react';
import { useHistory } from 'react-router-dom';

const ListUser = () => {
    const history = useHistory();

    const handleCreate = () => {
        history.push('/admin/users/create');
    }

    return (
        <div className="admin-products-list">
            <button className="btn btn-primary btn-lg" onClick={handleCreate}>
                ADICIONAR
            </button>
        </div>
    )
}

export default ListUser; 