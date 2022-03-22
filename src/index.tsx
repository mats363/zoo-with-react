import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './Components/Home';
import { AnimalDetails } from './Components/AnimalDetails';
import { Layout } from './Components/Layout';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='details/:id' element={<AnimalDetails/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
