import React from 'react';
import Logo from '../../assets/img/lexflix-blue.png';
import {Link} from 'react-router-dom';
import './menu.css';
import Button from '../Button';

// import ButtonLink from './components/ButtonLink';

function Menu() {
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={Logo} alt="LexFlix" />
      </Link>

      <Button as={Link} className="ButtonLink" to="/cadastro/video">
        Novo Vídeo
      </Button>
    </nav>
  );
}

export default Menu;
