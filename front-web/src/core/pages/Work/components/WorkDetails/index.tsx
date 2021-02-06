import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ReactComponent as ArrowIcon } from 'core/assets/images/arrow.svg';
import './styles.scss';

type ParamsType = {
    workId: string;
}

const WorkDetails = () => {
    const { workId } = useParams<ParamsType>();

    console.log(workId);

    return (
        <div className="work-details-container">
            <div className="card-base border-radius-20 work-details">
                <Link to="/works" className="work-details-goback">
                    <ArrowIcon className="icon-goback" />
                    <h1 className="text-goback">voltar</h1>
                </Link>
                <div className="row">
                    <div className="col-12 work-details-card">
                        <h1 className="work-details-name">
                            Título da tarefa
                       </h1>
                        <h1 className="work-description-title">
                            Data: 24/09/2022
                        </h1>
                        <p className="work-description-text">
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

export default WorkDetails;