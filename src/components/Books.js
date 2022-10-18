import "./Books.css";
import "./BookEntry";
import BookEntry from "./BookEntry";

const Books = (props) => {
  const books = props.books;

  return books.map((book) => (
    <BookEntry
      key={book.title}
      date={book.date}
      title={book.title}
      author={book.author}
      tags={book.tags}
      price={book.price}
    />
  ));
};

export default Books;
