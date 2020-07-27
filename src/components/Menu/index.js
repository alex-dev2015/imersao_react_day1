import React from 'react';
import Logo from '../../assets/img/lexflix-blue.png';
import './menu.css';
import ButtonLink from './components/ButtonLink';


function Menu () {
    return(
        <nav className="Menu">
            <a href="/"> 
                <img className="Logo" src={Logo} alt="LexFlix"/>
            </a>

            <ButtonLink className="ButtonLink" href="/">
                Novo Vídeo
            </ButtonLink>
           
        </nav>
    )
}

export default Menu;