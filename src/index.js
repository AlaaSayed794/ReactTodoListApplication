import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css'
import App from './App';
import Layout from './Layout'

ReactDOM.render(

  <Layout >
    <App />
  </Layout>
  ,
  document.getElementById('root')
);


