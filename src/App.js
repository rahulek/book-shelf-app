import "./App.css";

//Import a new component
import "./components/BookEntry";
import BookEntry from "./components/BookEntry";

function App() {
  return (
    <div className="App">
      <h1>Welcome to the world of Books</h1>
      {/* Use a new component */}
      <BookEntry />
    </div>
  );
}

export default App;
