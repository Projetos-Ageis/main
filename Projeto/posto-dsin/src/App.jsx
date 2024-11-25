import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Router } from './Router.tsx';

import { defaultTheme } from './styles/themes/default.js';
import { GlobalStyle } from './styles/themes/global.js';
import { ToastContainer } from 'react-toastify';  // Certifique-se de que está importando o ToastContainer corretamente
import 'react-toastify/dist/ReactToastify.css';    // Importação dos estilos do react-toastify

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        {/* ToastContainer está no lugar certo */}
        <ToastContainer position="top-right" autoClose={5000} hideProgressBar={true} />
        <Router />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
}
