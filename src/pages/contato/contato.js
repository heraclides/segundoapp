import React from "react";
import { Form } from "react-router-dom";
import Header from "../../components/header/header";
import './style-contato.css';
import Email from '../../assets/email.png';
import Footer from "../../components/footer";

function Contato() {
    return(
        <>
            <Header />
                <div 
                    id="banner-ct">
                </div>
                
                <div id="content">
                    <svg class="arrows">
                        <path class="a1" d="M0 0 L30 32 L60 0"></path>
                        <path class="a2" d="M0 20 L30 52 L60 20"></path>
                        <path class="a3" d="M0 40 L30 72 L60 40"></path>
                        <path class="a4" d="M0 60 L30 92 L60 60"></path>
                    </svg>
                </div>

                <div
                    className="titulo">DEIXE SEU CONTATO
                </div> 
                <div id="forma">
                    <form action="./contato.js">
                        <div className="form-container">
                            <div id="form-content">
                                <div className="imagem">
                                    <img className="logoEmail" src={Email} />
                                </div>
                                <div class="dados">
                                    <p id="mens">ENTRAR EM CONTATO</p>
                                    
                                    <form className="content-dados">
                                    
                                    <input name="text" id="input" type={Text} placeholder="Nome do Usuario" autoFocus></input>

                                    <input id="input" type="email" name="Email" placeholder="coloque um email válido"/> 
                            
                                    <input id="input" type="tel" name="f-tel" pattern="\[9][0-9]{4}-[0-9]{4}" placeholder="Tel: 9xxxx-xxxx"></input>
                                    <button class="button">ENVIAR</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </form>       
                </div>
            <Footer />
        </>
        
    )
    }

export default Contato;