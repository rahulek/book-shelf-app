import "./App.css";
import "./components/Books";
import Books from "./components/Books";
import booksData from "./data/BooksData";

function App() {
  return (
    <div className="App">
      <h1>Welcome to the World of Books</h1>
      <button>Click Here to add a New Book to your Shelf</button>
      <Books books={booksData} />
    </div>
  );
}

export default App;
