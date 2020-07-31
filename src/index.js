import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/Home';
import Book from './pages/Book';
import './css/App.css';

const AppRouter = () => (
  <BrowserRouter>
    <Route exact path="/katalog-buku" component={Home} />
    <Route path="/katalog-buku/book/:id" component={Book} />
  </BrowserRouter>
);

ReactDOM.render(<AppRouter />, document.getElementById('app'));

if (process.env.NODE_ENV === 'development') {
  module.hot.accept();
}
