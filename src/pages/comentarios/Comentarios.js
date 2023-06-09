import React from "react";
import Footer from "../../components/footer";
import Header from "../../components/header/header";
import './style.css' ;


function Comentarios() {
    return(
        
        <>
            <Header />

                <div 
                    id="banner-cm">
                </div>
                
                <div id="content">
                    <svg class="arrows">
                        <path class="a1" d="M0 0 L30 32 L60 0"></path>
                        <path class="a2" d="M0 20 L30 52 L60 20"></path>
                        <path class="a3" d="M0 40 L30 72 L60 40"></path>
                        <path class="a4" d="M0 60 L30 92 L60 60"></path>
                    </svg>
                </div>

                <div id="text-container">
                    <div className="text-content">
                        <div id="dados-text">
                        <div id="texto1">Deixe seu comentário</div>
                        <input id="input-cm" type="email" name="Email" placeholder="coloque um email válido" autoFocus/> 
                        <textarea id="textArea" maxLength="150" placeholder="Comente o que achou do Filme?"> </textarea>
                        <button id="buttonC">ENVIAR</button>
                        </div>
                    </div>
                </div>
                 <Footer />
            
        </>
    )
    }

export default Comentarios;