import React from 'react';
import { createRoot } from 'react-dom/client';

import './index.css';

import App from './App';
import reportWebVitals from './reportWebVitals';
import GlobalStyles from './styles/GlobalStyles';
import Typography from './styles/Typography';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <GlobalStyles />
    <Typography />
    <App />
  </React.StrictMode>
);

reportWebVitals();