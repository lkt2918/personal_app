
import React from 'react';
import {BrowserRouter, NavLink} from 'react-router-dom';
import Router from './router';
import {Menu} from 'antd';
import styles from './App.module.less';

function App() {
  return (
    <BrowserRouter>

      <Router></Router>
    </BrowserRouter>
  );
}

export default App;
