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
import { CssBaseline } from '@mui/material';



function App() {
  return (
    <BrowserRouter>
      <CssBaseline />
      <Header />

      <Routes>
        <Route path="/world-countries" element={<Home />} />
        <Route path="/world-countries/details" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;