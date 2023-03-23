import React, { useContext } from "react";
import { UserContext } from "../../contexts/userContexts";

function Profile(){
    const {login} = useContext(UserContext);

    return(
        <div>
            {login ? 'Dados do usuario' : 'Faça o login para ter acesso a informação'}
            
        </div>
    )
}

export default Profile;