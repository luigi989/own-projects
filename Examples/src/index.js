import React from 'react';
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';
import LoginForm from './login_forms/login_form';
import LoginFormTrans from './login_forms/login_form_trans';


const rootElement = document.getElementById('root')
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="loginForm" element={<LoginForm />} />
        <Route path="loginFormTrans" element={<LoginFormTrans />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);

