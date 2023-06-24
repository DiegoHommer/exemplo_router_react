import React from "react";
import { Link } from "react-router-dom";

export default function PageNotFound(){
    return(
        <div>
            <h1> 404 </h1>
            <h2> Page Not Found </h2>
            <Link to="/"> Voltar a tela inicial</Link>
        </div>
    )
}