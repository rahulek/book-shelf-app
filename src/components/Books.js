import "./Books.css";
import "./BookEntry";
import BookEntry from "./BookEntry";

const Books = (props) => {
  //Get all the books
  const books = props.books;

  //Parent's deleteBook handler function
  const onDeleteBook = props.onDeleteBook;

  //Delete book handler function
  //This gets triggeted by the <BoolEntry /> component
  //when it detects a book delete event
  //A book'id gets passed-in.
  const deleteBook = (bookId) => {
    //Propagate the book event handler to the parent
    onDeleteBook(bookId);
  };

  //Create a BookEntry component for every
  //book
  return books.map((book) => (
    <BookEntry
      key={book.id}
      id={book.id}
      date={book.date}
      title={book.title}
      author={book.author}
      tags={book.tags}
      price={book.price}
      onBookDelete={deleteBook}
    />
  ));
};

export default Books;
