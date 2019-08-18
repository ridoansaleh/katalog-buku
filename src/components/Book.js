import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { API_BASE_URL } from '../constant';

export default class Book extends React.Component {
  constructor() {
    super();

    this.state = {
      book: {},
    };
  }

  componentDidMount() {
    const ID = this.props.match.params.id;
    axios
      .get(API_BASE_URL + '/books/' + ID)
      .then(res => {
        this.setState({
          book: res.data,
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const { book } = this.state;
    return (
      <div>
        <div className="navbar">
          <span className="navbar-title">Toko Buku</span>
        </div>
        <p className="breadcrumbs">
          <Link to="/">Home</Link> / {book.title}
        </p>
        <section className="book-detail-container">
          <div className="book-detail-cover-wrapper">
            <img className="book-detail-cover-image" src={book.cover} />
          </div>
          <div className="book-detail-misc">
            <p className="book-detail-title">{book.title}</p>
            <p>{book.author}</p>
            <p>{book.description}</p>
          </div>
        </section>
      </div>
    );
  }
}
