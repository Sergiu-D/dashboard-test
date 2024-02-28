import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
// @ts-ignore
import App from './App';
import './index.css';
import './satoshi.css';

import { InternalFieldsContextProvider } from './context/InternalFieldsContext';

ReactDOM.createRoot(document.getElementById('root') as HTMLBodyElement).render(
  <React.StrictMode>
    <HashRouter>
      <InternalFieldsContextProvider>
        <App />
      </InternalFieldsContextProvider>
    </HashRouter>
  </React.StrictMode>,
);
