import Pagination from 'core/components/Pagination';
import { PersonalResponse } from 'core/types/Tasks';
import { makePrivateRequest, makeRequest } from 'core/utils/request';
import PersonalCardLoader from 'pages/Personal/components/Loaders/PersonalCardLoader';
import React, { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify'
import Cardpersonal from '../CardPersonal';

const ListPersonal = () => {
    const [personalsResponse, setpersonalsResponse] = useState<PersonalResponse>();
    const [isLoading, setIsLoading] = useState(false);
    const [activePage, setActivePage] = useState(0);
    const history = useHistory();

    const getpersonals = useCallback(() => {
        const params = {
            page: activePage,
            linesPerPage: 4,
            direction: 'DESC',
            orderBy: 'id'
        }
        setIsLoading(true);
        makeRequest({ url: '/personals', params })
            .then(response => setpersonalsResponse(response.data))
            .finally(() => {
                setIsLoading(false);
            })
    }, [activePage])

    useEffect(() => {
        getpersonals();
    }, [getpersonals]);

    const handleCreate = () => {
        history.push('/admin/personals/create');
    }

    const onRemove = (personalId: number) => {
        const confirm = window.confirm('Deseja realmente excluir este produto?');

        if (confirm) {
            makePrivateRequest({ url: `/personals/${personalId}`, method: 'DELETE' })
                .then(() => {
                    toast.info('Tarefa removido com sucesso!');
                    getpersonals();
                })
                .catch(() => {
                    toast.error('Erro ao remover tarefa!')
                })
        }
    }

    return (
        <div className="admin-personals-list">
            <button className="btn btn-primary btn-lg" onClick={handleCreate}>
                ADICIONAR
            </button>
            <div className="admin-list-container">
                {isLoading ? <PersonalCardLoader /> : (  
            personalsResponse?.content.map(personal => (
                    <Cardpersonal personal={personal} key={personal.id} onRemove={onRemove}/>
                ))
                )}
                {personalsResponse && (
                    <Pagination
                        totalPages={personalsResponse.totalPages}
                        activePage={activePage}
                        onChange={page => setActivePage(page)}
                    />
                )}

            </div>
        </div>
    )
}

export default ListPersonal; 