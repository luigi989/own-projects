import React from 'react';
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';

import App from './App';
import Sidebar from './sidebar'
import LoginForm from './login_forms/login_form';
import LoginFormTrans from './login_forms/login_form_trans';
import SearchBox from './misc/searchbox';

const rootElement = document.getElementById('root')
render(
  <BrowserRouter>
    <div id="outer-container" className='h-full'>
      <Sidebar outerContainerId={'outer-container'} pageWrapId={'page-wrap'} />
      {/* < Header /> */}
      <div id='page-wrap' className='flex h-full'>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="loginForm" element={<LoginForm />} />
          <Route path="loginFormTrans" element={<LoginFormTrans />} />
          <Route path='searchbox' element={<SearchBox />} />
        </Routes>
      </div>
    </div>
  </BrowserRouter>,
  rootElement
);

