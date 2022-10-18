import "./App.css";
import "./components/Books";
import Books from "./components/Books";

function App() {
  const books = [
    {
      date: new Date("January 1, 2019"),
      title: "The Colleced Works of William Shakespeare",
      author: "Oxford University Press",
      tags: ["drama", "medieval"],
      price: 872,
    },
    {
      date: new Date("October 12, 2020"),
      title: "Saladin",
      author: "John Man",
      tags: ["history", "biography"],
      price: 342,
    },
    {
      date: new Date("December 27, 2016"),
      title: "Republic",
      author: "Plato and Oxford University Press",
      tags: ["plato", "philosophy"],
      price: 699,
    },
  ];

  return (
    <div className="App">
      <h2>Welcome to the World of Books</h2>
      <Books books={books} />
    </div>
  );
}

export default App;
