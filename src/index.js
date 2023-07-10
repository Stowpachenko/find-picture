import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {App} from './App';
import { ThemeProvider } from 'styled-components';
import {theme} from "./theme"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <App />
    <ToastContainer autoClose={3000}/>
    </ThemeProvider>
  </React.StrictMode>
);
