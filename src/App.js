import "./App.css";

//Import a new component
import "./components/BookEntry";
import BookEntry from "./components/BookEntry";

function App() {
  return (
    <div className="App">
      <h1>Welcome to the World of Books</h1>
      {/* Use a new component */}
      <BookEntry
        date={new Date()}
        title={"The Story of Civilization"}
        tags={["History", "Multi-Volume"]}
        price={1234}
      />
    </div>
  );
}

export default App;
