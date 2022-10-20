import "./Books.css";
import "./BookEntry";
import BookEntry from "./BookEntry";

const Books = (props) => {
  //Get all the books
  const books = props.books;

  //Create a BookEntry component for every
  //book
  return books.map((book) => (
    <BookEntry
      key={book.id}
      date={book.date}
      title={book.title}
      author={book.author}
      tags={book.tags}
      price={book.price}
    />
  ));
};

export default Books;
