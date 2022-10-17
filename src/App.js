import "./App.css";

//Import a new component
import "./components/BookEntry";
import BookEntry from "./components/BookEntry";

function App() {
  const books = [
    {
      date: new Date("January 1, 2019"),
      title: "The Colleced Works of William Shakespeare",
      tags: ["drama", "medieval"],
      price: 872,
    },
    {
      date: new Date("October 12, 2020"),
      title: "Saladin",
      tags: ["history", "biography"],
      price: 342,
    },
    {
      date: new Date("December 27, 2016"),
      title: "Republic",
      tags: ["plato", "philosophy"],
      price: 699,
    },
  ];

  return (
    <div className="App">
      <h1>Welcome to the World of Books</h1>
      {/* Use a new component */}
      <BookEntry
        date={books[0].date}
        title={books[0].title}
        tags={books[0].tags}
        price={books[0].price}
      />
      <BookEntry
        date={books[1].date}
        title={books[1].title}
        tags={books[1].tags}
        price={books[1].price}
      />
      <BookEntry
        date={books[2].date}
        title={books[2].title}
        tags={books[2].tags}
        price={books[2].price}
      />

      {/* Use JS Array method */}
      {books.map((book) => (
        <BookEntry
          date={book.date}
          title={book.title}
          tags={book.tags}
          price={book.price}
        />
      ))}
    </div>
  );
}

export default App;
