import React from 'react';
import './styles.scss';

const WorkCard = () => (
    <div className="card-base border-radius-10 work-card">
        Descricao da Tarefa
        <div className="work-info">
        Voce deve procurar um psicoterapeuta urgente para lhe ajudar com seus problemas amorosos.
            <h6 className="work-name">
               22/06/2008
            </h6>
            <div className="work-container"></div>
        </div>
    </div>
);

export default WorkCard; 