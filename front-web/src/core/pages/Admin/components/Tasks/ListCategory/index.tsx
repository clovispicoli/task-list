import React from 'react';
import { useHistory } from 'react-router-dom';

const ListCategory = () => {
    const history = useHistory();

    const handleCreate = () => {
        history.push('/admin/categories/create');
    }

    return (
        <div className="admin-products-list">
            <button className="btn btn-primary btn-lg" onClick={handleCreate}>
                ADICIONAR
            </button>
        </div>
    )
}

export default ListCategory; 