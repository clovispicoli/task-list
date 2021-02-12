import Pagination from 'core/components/Pagination';
import { HomeResponse } from 'core/types/Tasks';
import { makePrivateRequest, makeRequest } from 'core/utils/request';
import HomeCardLoader from 'pages/Home/components/Loaders/HomeCardLoader';
import React, { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify'
import CardHome from '../CardHome';

const ListHome = () => {
    const [homesResponse, setHomesResponse] = useState<HomeResponse>();
    const [isLoading, setIsLoading] = useState(false);
    const [activePage, setActivePage] = useState(0);
    const history = useHistory();

    const getHomes = useCallback(() => {
        const params = {
            page: activePage,
            linesPerPage: 4,
            direction: 'DESC',
            orderBy: 'id'
        }
        setIsLoading(true);
        makeRequest({ url: '/homes', params })
            .then(response => setHomesResponse(response.data))
            .finally(() => {
                setIsLoading(false);
            })
    }, [activePage])

    useEffect(() => {
        getHomes();
    }, [getHomes]);

    const handleCreate = () => {
        history.push('/admin/homes/create');
    }

    const onRemove = (homeId: number) => {
        const confirm = window.confirm('Deseja realmente excluir este produto?');

        if (confirm) {
            makePrivateRequest({ url: `/homes/${homeId}`, method: 'DELETE' })
                .then(() => {
                    toast.info('Produto removido com sucesso!');
                    getHomes();
                })
                .catch(() => {
                    toast.error('Erro ao remover produto!')
                })
        }
    }

    return (
        <div className="admin-homes-list">
            <button className="btn btn-primary btn-lg" onClick={handleCreate}>
                ADICIONAR
            </button>
            <div className="admin-list-container">
                {isLoading ? <HomeCardLoader /> : (  
            homesResponse?.content.map(home => (
                    <CardHome home={home} key={home.id} onRemove={onRemove}/>
                ))
                )}
                {homesResponse && (
                    <Pagination
                        totalPages={homesResponse.totalPages}
                        activePage={activePage}
                        onChange={page => setActivePage(page)}
                    />
                )}

            </div>
        </div>
    )
}

export default ListHome; 