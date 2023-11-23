import './App.css';
import Home from './Components/Home';
import { createTheme } from '@mui/material/styles';
import {ThemeProvider } from '@mui/material';
import { purple } from '@mui/material/colors';
import { Provider } from 'react-redux';
import store from './Redux/Store';
import { Route,  Routes } from 'react-router-dom';
import Cart from './Components/Cart';
import React from 'react';

const theme = createTheme({
  palette : {
    primary : {
      main : '#fefefe'
    },
    secondary : purple,
  }
})
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <ThemeProvider theme={theme}>
            <Routes>
              <Route path='/' element={<Home />}/>
              <Route path='cart' element={<Cart />}/>
            </Routes>
        </ThemeProvider>
      </Provider>
    </div>
  );
}

export default App;
