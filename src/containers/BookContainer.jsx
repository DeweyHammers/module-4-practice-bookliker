import React from "react";
import Book from "../components/Book";
import Users from "../components/Users";
import { Container } from "semantic-ui-react";

const BooksContainer = ({ book, likeBook, curretUser }) => {
  return (
    <Container text>
      <Book book={book} likeBook={likeBook} curretUser={curretUser} />
      <Users users={book.users} />
    </Container>
  );
};

export default BooksContainer;
