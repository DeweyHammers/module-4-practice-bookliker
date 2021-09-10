import React from "react";
import { Menu } from "semantic-ui-react";

const BooksNav = ({ books, selectBook }) => {
  return (
    <Menu vertical inverted>
      {books.map((book) => (
        <Menu.Item key={book.id} as={"a"} onClick={() => selectBook(book.id)}>
          {book.title}
        </Menu.Item>
      ))}
    </Menu>
  );
};

export default BooksNav;
