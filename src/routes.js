import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Sobre from "./Pages/Sobre";
import Perfil from "./Pages/Perfil";
import Amigos from "./Pages/Amigos";
import PageNotFound from "./Pages/PageNotFound";

// Mais informações: <https://reactrouter.com/en/main/start/overview>

export default function AppRoutes(){
    return(
        // BrowserRouter: "Avisa" a aplicação que teremos um roteamento de componentes (administra URL e history)
        <BrowserRouter>
            {/* Routes: Nessa área devemos inserir cada componente de página e seu caminho correspondente */}
            <Routes>
                {/* Route{ Path: Caminho/rota na URL que é associado ao componente
                           Element: Elemento a ser renderizado/exibido quando a rota(path) é acessada 
                */}                          
                <Route path="/" element={<Home/>}> </Route>
                <Route path="/sobre" element={<Sobre/>}> </Route>
                <Route path="/perfil" element={<Perfil/>}> </Route>
                <Route path="/perfil/amigos" element={<Amigos/>}> </Route>

                {/* Erro 404 onde usuário tentou acessar um path inexistente */}
                <Route path="*" element={<PageNotFound/>}> </Route>
            </Routes>
        </BrowserRouter>
    );
}