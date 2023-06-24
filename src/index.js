import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRoutes from './routes';

// createRoot: Cria um elemento DOM de id root, dentro deste elemento que o App será renderizado
// Mais informações: <https://www.shecodes.io/athena/3919-what-is-createroot-rootelement-in-react>

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( <AppRoutes/>)
