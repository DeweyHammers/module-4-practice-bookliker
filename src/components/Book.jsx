import React from "react";
import { Header, Button, Image } from "semantic-ui-react";

const Book = ({ book, likeBook, curretUser }) => {
  return (
    <>
      <Header>{book.title}</Header>
      <Image src={book.img_url} size="small" />
      <p>{book.description}</p>
      <Button
        color="red"
        content={
          book.users.some((user) => user.id === curretUser.id)
            ? "Unlike"
            : "like"
        }
        icon="heart"
        onClick={() => likeBook(book.id)}
        label={{
          basic: true,
          color: "red",
          pointing: "left",
          content: book.users.length,
        }}
      />
    </>
  );
};

export default Book;
