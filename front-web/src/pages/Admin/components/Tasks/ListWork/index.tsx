import Pagination from 'core/components/Pagination';
import { WorkResponse } from 'core/types/Tasks';
import { makePrivateRequest, makeRequest } from 'core/utils/request';
import WorkCardLoader from 'pages/Work/components/Loaders/WorkCardLoader';
import React, { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify'
import CardWork from '../CardWork';

const ListWork = () => {
    const [worksResponse, setworksResponse] = useState<WorkResponse>();
    const [isLoading, setIsLoading] = useState(false);
    const [activePage, setActivePage] = useState(0);
    const history = useHistory();

    const getworks = useCallback(() => {
        const params = {
            page: activePage,
            linesPerPage: 4,
            direction: 'DESC',
            orderBy: 'id'
        }
        setIsLoading(true);
        makeRequest({ url: '/works', params })
            .then(response => setworksResponse(response.data))
            .finally(() => {
                setIsLoading(false);
            })
    }, [activePage])

    useEffect(() => {
        getworks();
    }, [getworks]);

    const handleCreate = () => {
        history.push('/admin/works/create');
    }

    const onRemove = (workId: number) => {
        const confirm = window.confirm('Deseja realmente excluir esta tarefa?');

        if (confirm) {
            makePrivateRequest({ url: `/works/${workId}`, method: 'DELETE' })
                .then(() => {
                    toast.info('Tarefa removido com sucesso!');
                    getworks();
                })
                .catch(() => {
                    toast.error('Erro ao remover tarefa!')
                })
        }
    }

    return (
        <div className="admin-works-list">
            <button className="btn btn-primary btn-lg" onClick={handleCreate}>
                ADICIONAR
            </button>
            <div className="admin-list-container">
                {isLoading ? <WorkCardLoader /> : (  
            worksResponse?.content.map(work => (
                    <CardWork work={work} key={work.id} onRemove={onRemove}/>
                ))
                )}
                {worksResponse && (
                    <Pagination
                        totalPages={worksResponse.totalPages}
                        activePage={activePage}
                        onChange={page => setActivePage(page)}
                    />
                )}

            </div>
        </div>
    )
}

export default ListWork; 