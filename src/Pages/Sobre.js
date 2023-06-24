import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

export default function Sobre(){
    return(
        <div>
            <h1> SOBRE </h1>
            <div className="container">
                <Link to="/perfil"> Perfil </Link>
                <Link to="/"> Voltar a tela inicial</Link>
            </div>
        </div>
    )
}