import React from 'react';
import { ReactComponent as MainImage } from 'core/assets/images/main-image.svg';
import ButtonIcon from 'core/components/Navbar/ButtonIcon';
import { Link } from 'react-router-dom';
import './styles.scss';

const Home = () => (
    <div className="home-container">
        <div className="row home-content">
            <div className="col-6 home-text">
                <h1 className="text-title">
                    Organize suas tarefas <br /> de um jeito prático
                </h1>
                <p className="text-subtitle">
                    Ajudaremos a se planejar <br /> para não perder nenhum compromisso.
            </p>
                <Link to='/task'>
                    <ButtonIcon text='inicie agora a suas tarefas'/>
                </Link>
            </div>
            <div className="col-6">
                <MainImage className="main-image" />
            </div>
        </div>
    </div>
);

export default Home;  