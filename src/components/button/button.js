import React from "react";
import './styles.css';
import { Link } from "react-router-dom";


function Button(){
    return( 
        <>
        <Link to='/contato'>
          <button  className='button'>Comprar Ingressos</button>     
        </Link>  
        </> 
    )
}

export default Button;