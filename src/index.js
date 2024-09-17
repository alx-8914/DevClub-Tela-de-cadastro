import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyle from './styles/globalStyles'
import Routes from './routes'

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Failed to find the root element');
}

const root = ReactDOM.createRoot(rootElement);

root.render(

  <React.StrictMode>
    <Routes />
    <GlobalStyle />
  </React.StrictMode>
);




