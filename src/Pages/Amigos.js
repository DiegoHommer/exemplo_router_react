import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

// Para mais informações sobre Link: <https://reactrouter.com/en/main/components/link>

export default function Amigos(){
    return(
        <div>
            <h1> AMIGOS </h1>
            <div className="container">
                {/* Link to não relativo: com adição de barra no inicio
                   <Link to="/exemplo/teste"></Link> <==> /exemplo/teste
                */}
                <Link to="/perfil"> Voltar</Link>
                <Link to="/sobre"> Sobre</Link>
                <Link to="/"> Voltar a tela inicial</Link>
            </div>
        </div>
    )
}