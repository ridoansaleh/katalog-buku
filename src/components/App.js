import React, { Component } from 'react';
import axios from 'axios';
import '../css/App.css';
import { API_BASE_URL } from '../constant';

class App extends Component {
  constructor() {
    super();

    this.state = {
      searchKeyword: '',
      books: [],
    };

    this.handleKeywordChange = this.handleKeywordChange.bind(this);
  }

  componentDidMount() {
    axios
      .get(API_BASE_URL + '/books')
      .then(res => {
        console.log(res);
        this.setState({
          books: res.data,
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  handleKeywordChange(e) {
    this.setState({
      searchKeyword: e.target.value,
    });
  }

  render() {
    const { searchKeyword, books } = this.state;
    return (
      <div>
        <input type="text" value={searchKeyword} onChange={this.handleKeywordChange} />
        <section className="books-container">
          {books.map(book => {
            return (
              <div key={book.id}>
                <img src={book.cover} className="book-cover" />
                <p className="book-title">{book.title}</p>
                <div className="book-value-wrapper">
                  <p>{book.price}</p>
                  <p>Rating {book.rating}</p>
                </div>
                <p>{book.author}</p>
                <button type="button" className="book-show-btn">
                  Lihat
                </button>
              </div>
            );
          })}
        </section>
      </div>
    );
  }
}

export default App;
