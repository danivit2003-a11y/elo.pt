import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import Login from './pages/Login.tsx';
import Register from './pages/Register.tsx';

const path = window.location.pathname;

let Page;

if (path === '/login') {
  Page = Login;
} else if (path === '/registo' || path === '/register') {
  Page = Register;
} else {
  Page = App;
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Page />
  </StrictMode>,
);