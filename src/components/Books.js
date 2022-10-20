import "./Books.css";
import BookEntry from "./BookEntry";
import BookForm from "./BookForm";

const Books = (props) => {
  const books = props.books;

  return (
    <div>
      <BookForm />
      {books.map((book) => (
        <BookEntry
          key={book.id}
          date={book.date}
          title={book.title}
          author={book.author}
          tags={book.tags}
          price={book.price}
        />
      ))}
    </div>
  );
};

export default Books;
