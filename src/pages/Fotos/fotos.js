import React from "react";
import Footer from "../../components/footer";
import FotoCards from "../../components/fotos/fotosCards";
import Header from "../../components/header/header";
import './style.css';

function Fotos() {
    return(
        <>
            <Header />
            <div id="banner" />
            <div id="content">
            <svg class="arrows">
                <path class="a1" d="M0 0 L30 32 L60 0"></path>
                <path class="a2" d="M0 20 L30 52 L60 20"></path>
                <path class="a3" d="M0 40 L30 72 L60 40"></path>
                <path class="a4" d="M0 60 L30 92 L60 60"></path>
            </svg>
            </div>
            <div className="titulo">Elenco do Filme</div>
            <FotoCards />
            <Footer /> 
        </>
    
    )
    }

export default Fotos;