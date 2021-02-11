import Pagination from 'core/components/Pagination';
import { TaskResponse } from 'core/types/Task';
import { makeRequest } from 'core/utils/request';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Card from '../Card';

const ListCategory = () => {
    const [tasksResponse, setTasksResponse] = useState<TaskResponse>();
    const [isLoading, setIsLoading] = useState(false);
    const [activePage, setActivePage] = useState(0);
    const history = useHistory();

    console.log(tasksResponse);


    useEffect(() => {
        const params = {
            page: activePage,
            inesPerPage: 4,
            direction: 'DESC',
            orderBy: 'id'
        }
        setIsLoading(true);
        makeRequest({ url: '/categories', params })
            .then(response => setTasksResponse(response.data))
            .finally(() => {
                setIsLoading(false);
            })
    }, [activePage]);

    const handleCreate = () => {
        history.push('/admin/categories/create');
    }

    return (
        <div className="admin-tasks-list">
            <button className="btn btn-primary btn-lg" onClick={handleCreate}>
                ADICIONAR
            </button>
            <div className="admin-list-container">
            {tasksResponse?.content.map(task => (
                    <Card task={task} key={task.id} />
                ))}
                {tasksResponse && (
                    <Pagination
                        totalPages={tasksResponse.totalPages}
                        activePage={activePage}
                        onChange={page => setActivePage(page)}
                    />
                )}

            </div>
        </div>
    )
}

export default ListCategory; 