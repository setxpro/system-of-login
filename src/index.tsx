import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import AuthProvider from './Contexts/AuthProvider';
import GlobalStyle from './Styles/GlobalStyle';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
        <AuthProvider>
      <BrowserRouter>
            <GlobalStyle/>
            <App />
      </BrowserRouter>
        </AuthProvider>
  </React.StrictMode>
);
