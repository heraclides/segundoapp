import React from "react";
import Logo from '../../assets/btm.jpg';
import { Link } from 'react-router-dom';
import './styles.css';

function Footer() {
    return(    
        <footer>
            <img className="logo" src={Logo}/>
            <span>Todos os direitos reservados ©</span>
            <span> Desenvolvido por: Heraclides Mourão</span>
            <nav className="footer-navigation">
                <ul className="footer-list"> 
                    <Link style={{textDecoration: 'none'}} to='/'>
                    <li>HOME</li>
                    </Link>
                    <Link style={{textDecoration: 'none'}} to='/fotos'>
                    <li>FOTOS</li>
                    </Link>
                    <Link style={{textDecoration: 'none'}} to='/contato'>
                    <li>CONTATOS</li>
                    </Link>
                    <li>COMENTÁRIOS</li>
                </ul>
            </nav>    
        </footer>
    )
}

export default Footer;