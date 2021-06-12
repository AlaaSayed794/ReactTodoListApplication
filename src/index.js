import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css'
import App from './App';
import Layout from './Layout'
import EditList from './Components/EditList'
import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Layout >
        <Route exact path="/" component={App} />
        <Route path="/editList/:id" component={EditList} />
      </Layout>
    </BrowserRouter>
  </Provider>
  ,
  document.getElementById('root')
);


