import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
// @ts-ignore
import App from './App';
import './index.css';
import './satoshi.css';

// Context
// @ts-ignore
import { FormContextProvider } from './context/FormContext';

ReactDOM.createRoot(document.getElementById('root') as HTMLBodyElement).render(
  <React.StrictMode>
    <Router>
      <FormContextProvider>
        <App />
      </FormContextProvider>
    </Router>
  </React.StrictMode>,
);
