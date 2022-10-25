import React, { useState } from "react";
import uuid from "react-uuid";

import "./App.css";
import "./components/Books";
import Books from "./components/Books";
import BookForm from "./components/BookForm";

function App() {
  const books = [
    {
      id: uuid(),
      date: new Date("January 1, 2019"),
      title: "The Colleced Works of William Shakespeare",
      author: "Oxford University Press",
      tags: ["drama", "medieval"],
      price: 872,
    },
    {
      id: uuid(),
      date: new Date("October 12, 2020"),
      title: "Saladin",
      author: "John Man",
      tags: ["history", "biography"],
      price: 342,
    },
    {
      id: uuid(),
      date: new Date("December 27, 2016"),
      title: "Republic",
      author: "Plato and Oxford University Press",
      tags: ["plato", "philosophy"],
      price: 699,
    },
  ];

  //Create a state for the books
  let [booksData, setBooksData] = useState(books);

  //Add book callback function
  //The <BookForm /> component invokes it with the information
  //about the new book.
  const addBookHandler = (newBook) => {
    setBooksData((prevBooks) => [...prevBooks, newBook]);
  };

  //Delete book callback function
  //The <Books /> component invokes it with a bookId
  //to get that book deleted
  const deleteBookHandler = (bookId) => {
    console.log(`Deleting a book with id: ${bookId}`);
    setBooksData((prevBooks) => {
      return prevBooks.filter((book) => book.id !== bookId);
    });
  };

  return (
    <div className="App">
      <h1>** Welcome to the World of Books **</h1>
      <BookForm onAddBook={addBookHandler} />
      <Books books={booksData} onDeleteBook={deleteBookHandler} />
    </div>
  );
}

export default App;
