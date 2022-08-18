import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Details from './details';
import Home from './home';

import * as React from 'react';
import Header from '../components/titleAndButtonHeader';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { lightTheme, darkTheme } from '../themes/themes';
import { useState } from 'react';


function App() {

  let mode;
  if (localStorage.getItem('mode')) {
    mode = localStorage.getItem('mode');
  } else {
    localStorage.setItem('mode', 'light');
    mode = 'light';
  }

  let [theme, setTheme] = useState(createTheme(mode === 'light' ? lightTheme : darkTheme))


  function toggleMode() {
    let newMode = (localStorage.getItem('mode') === 'light' ? 'dark' : 'light');
    setTheme(createTheme(newMode === 'light' ? lightTheme : darkTheme));
    localStorage.setItem('mode', newMode);
  }

  document.getElementById("root").style.backgroundColor = theme.palette.secondary.main;

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <CssBaseline />
        <Header onToggleMode={toggleMode} />
        <Routes>
          <Route path="/world-countries" element={<Home />} />
          <Route path="/world-countries/details/:handle" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;