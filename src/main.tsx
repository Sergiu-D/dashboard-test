import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
// @ts-ignore
import App from './App';
import './index.css';
import './satoshi.css';

import { InternalFieldsContextProvider } from './context/InternalFieldsContext';

ReactDOM.createRoot(document.getElementById('root') as HTMLBodyElement).render(
  <React.StrictMode>
    <Router>
      <InternalFieldsContextProvider>
        <App />
      </InternalFieldsContextProvider>
    </Router>
  </React.StrictMode>,
);
