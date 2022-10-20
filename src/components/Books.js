import "./Books.css";
import BookEntry from "./BookEntry";

const Books = (props) => {
  const books = props.books;
  //Delete callback function
  const onDeleteBook = props.onDeleteBook;

  //Callback function passed to the <BoonEntry />
  //component. Its called with a bookId paremeter
  //set to the book that's to be deleted.
  //
  //This function simply propagates the delete
  //event to its parent.
  const bookDeleteHandler = (bookId) => {
    if (onDeleteBook) {
      onDeleteBook(bookId);
    }
  };

  return (
    <div>
      {books.map((book) => (
        <BookEntry
          key={book.id}
          id={book.id}
          date={book.date}
          title={book.title}
          author={book.author}
          tags={book.tags}
          price={book.price}
          onDeleteBook={bookDeleteHandler}
        />
      ))}
    </div>
  );
};

export default Books;
