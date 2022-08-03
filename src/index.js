import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './pages/App';
import { StyledEngineProvider, ThemeProvider, createTheme } from '@mui/material/styles';


const root = ReactDOM.createRoot(document.getElementById('root'));

const theme = createTheme({
  typography: {
    fontFamily: [
      'NunitoSans',
      'sans-serif',
    ].join(','),
  },
});

document.body.style.background = '#fafafa';

root.render(
  <StyledEngineProvider injectFirst>
    <ThemeProvider theme={theme}>
      <App>
      </App>
    </ThemeProvider>
  </StyledEngineProvider>

);


