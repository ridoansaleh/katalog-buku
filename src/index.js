import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './components/App';
import Book from './components/Book';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Route exact path="/" component={App} />
      <Route path="/book/:id" component={Book} />
    </BrowserRouter>
  );
};

ReactDOM.render(<AppRouter />, document.getElementById('app'));

if (process.env.NODE_ENV === 'development') {
  module.hot.accept();
}
