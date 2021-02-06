import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ReactComponent as ArrowIcon } from 'core/assets/images/arrow.svg';
import './styles.scss';

type ParamsType = {
    pagedId: string;
}

const PagedDetails = () => {
    const { pagedId } = useParams<ParamsType>();

    console.log(pagedId);

    return (
        <div className="paged-details-container">
            <div className="card-base border-radius-20 home-details">
                <Link to="/" className="paged-details-goback">
                    <ArrowIcon className="icon-goback" />
                    <h1 className="text-goback">voltar</h1>
                </Link>
                <div className="row">
                    <div className="col-6 pr-5 paged-details-card text-center">
                        <h1 className="paged-details-name">
                            Computador Home
                       </h1>
                    </div>
                    <div className="col-6 paged-details-card">
                        <h1 className="paged-description-title">
                            Descrição Home
                        </h1>
                        <p className="paged-description-text">
                            Seja um mestre em multitarefas com a capacidade para exibir quatro
                            aplicativos simultâneos na tela. A tela está ficando abarrotada?
                            Crie áreas de trabalho virtuais para obter mais espaço e trabalhar
                            com os itens que você deseja. Além disso, todas as notificações e
                            principais configurações são reunidas em uma única tela de fácil acesso.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PagedDetails;