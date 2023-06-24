import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

// Para mais informações sobre Link: <https://reactrouter.com/en/main/components/link>

export default function Home(){
    return(
        <div>
            <h1> HOME </h1>
            <div className="container">
                {/* Link to relativo: sem adição de barra no inicio
                   <Link to="exemplo"></Link> <==> path-atual/exemplo
                */}
                <Link to="sobre"> Sobre</Link>
                <Link to="perfil"> Perfil</Link>
            </div>


        </div>


    )



}