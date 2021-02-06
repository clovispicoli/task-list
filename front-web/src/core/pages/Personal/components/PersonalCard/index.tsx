import React from 'react';
import './styles.scss';

const PersonalCard = () => (
    <div className="card-base border-radius-10 personal-card">
        Descricao da Tarefa
        <div className="personal-info">
        Voce deve procurar um psicoterapeuta urgente para lhe ajudar com seus problemas amorosos.
            <h6 className="personal-name">
               22/06/2008
            </h6>
            <div className="personal-container"></div>
        </div>
    </div>
);

export default PersonalCard; 