import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Navbar } from '../components/Navbar';
import { API_BASE_URL } from '../constant';

class Home extends Component {
  constructor() {
    super();

    this.state = {
      searchKeyword: '',
      books: [],
      listOfBook: [],
    };

    this.handleKeywordChange = this.handleKeywordChange.bind(this);
  }

  componentDidMount() {
    axios
      .get(API_BASE_URL + '/books')
      .then((res) => {
        this.setState({
          books: res.data,
          listOfBook: res.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  handleKeywordChange(e) {
    const { listOfBook } = this.state;
    const val = e.target.value;
    this.setState(
      {
        searchKeyword: val,
      },
      () => {
        const result = listOfBook.filter((book) => {
          if (book.title.startsWith(val[0]) || book.title.search(val) > -1) {
            return book;
          }
        });
        this.setState({
          books: result,
        });
      },
    );
  }

  render() {
    const { searchKeyword, books } = this.state;
    return (
      <div className="page-container">
        <Navbar />
        <div className="content-wrapper">
          <section className="search-box">
            <input
              type="text"
              className="search-input"
              value={searchKeyword}
              onChange={this.handleKeywordChange}
              placeholder="Cari nama buku"
            />
          </section>
          <section className="books-container">
            {books.map((book) => {
              return (
                <div key={book.id}>
                  <img src={book.cover} className="book-cover" />
                  <p className="book-title">{book.title}</p>
                  <div className="book-value-wrapper">
                    <p>{book.price}</p>
                    <p>Rating {book.rating}</p>
                  </div>
                  <p>{book.author}</p>
                  <Link to={`/katalog-buku/book/${book.id}`}>
                    <button type="button" className="book-show-btn">
                      Lihat
                    </button>
                  </Link>
                </div>
              );
            })}
          </section>
        </div>
      </div>
    );
  }
}

export default Home;
