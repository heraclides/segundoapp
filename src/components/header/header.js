import React, {useContext, useState} from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import Logo from '../../assets/btm.jpg';


function Header(){
  

    return(
        <header>
            <img id='logo' src={Logo} />
            <nav>
                <ul>
                    <Link style={{textDecoration: 'none'}} to='/'>
                    <li>HOME</li>
                    </Link>
                    <Link style={{textDecoration: 'none'}} to='/fotos'>
                    <li>FOTOS</li>
                    </Link>
                    <Link style={{textDecoration: 'none'}} to='/contato'>
                    <li>CONTATOS</li>
                    </Link>
                    <Link style={{textDecoration: 'none'}} to='/Comentarios'>
                    <li>COMENTÁRIOS</li>
                    </Link>
                </ul>
            </nav>
        </header>
    )
}

export default Header;