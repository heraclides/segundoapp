import React from "react";
import './style.css';
import Trailer from '../../assets/The Batman - Trailer Principal.mp4'
import Button from "../button/button";

function Video(){
    return(
        <div id="trailer-container">
            <div className="content">
                <video controls  className="trailer">
                    <source src={Trailer}/>
                    Seu Navegador não possui suporte para videos.
                 </video>
                <div id="sinopse">
                    <p className="description">
                    Após dois anos espreitando as ruas como Batman, Bruce Wayne se encontra nas profundezas mais sombrias de Gotham City. Com poucos aliados confiáveis, o vigilante solitário se estabelece como a personificação da vingança para a população.
                    </p>
                    <Button />
                </div> 
            </div>
        </div>
    )
}

export default Video;