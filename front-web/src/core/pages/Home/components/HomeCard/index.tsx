import React from 'react';
import './styles.scss';

const HomeCard = () => (
    <div className="card-base border-radius-10 home-card">
        Descricao da Tarefa
        <div className="home-info">
        Voce deve procurar um psicoterapeuta urgente para lhe ajudar com seus problemas amorosos.
            <h6 className="home-name">
               22/06/2008
            </h6>
            <div className="home-container"></div>
        </div>
    </div>
);

export default HomeCard; 