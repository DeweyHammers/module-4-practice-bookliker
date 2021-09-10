import React, { Component } from "react";
import NavBar from "./components/NavBar";
import BooksNav from "./components/BooksNav";
import BookContainer from "./containers/BookContainer";

class App extends Component {
  state = {
    books: [],
    selectedBook: false,
    curretUser: {
      id: 11,
      username: "Dewey",
    },
  };

  componentDidMount() {
    fetch("http://localhost:3000/books")
      .then((resp) => resp.json())
      .then((json) => this.setState({ books: json }));
  }

  handleSelectBook = (id) => {
    this.setState({
      selectedBook: this.state.books.filter((book) => book.id === id)[0],
    });
  };

  handleLikeBook = (id) => {
    const newState = this.state.books.map((book) => {
      if (book.id === id) {
        if (!book.users.some((user) => user.id === this.state.curretUser.id)) {
          book.users = [...book.users, this.state.curretUser];
          this.patchBook(book);
        } else {
          book.users = [
            ...book.users.filter(
              (user) => user.id !== this.state.curretUser.id
            ),
          ];
          this.patchBook(book);
        }
        return book;
      } else {
        return book;
      }
    });
    this.setState({ book: newState });
  };

  patchBook = (book) => {
    fetch(`http://localhost:3000/books/${book.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ users: book.users }),
    });
  };

  render() {
    return (
      <div>
        <NavBar />
        <main>
          <BooksNav
            selectBook={this.handleSelectBook}
            books={this.state.books}
          />
          {this.state.selectedBook && (
            <BookContainer
              likeBook={this.handleLikeBook}
              book={this.state.selectedBook}
              curretUser={this.state.curretUser}
            />
          )}
        </main>
      </div>
    );
  }
}

export default App;
