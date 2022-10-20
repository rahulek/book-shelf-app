import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import "./App.css";
import "./components/Books";
import Books from "./components/Books";
import booksData from "./data/BooksData";

function App() {
  //BooksData array is where we add new books
  //We need a state to store it.
  let [booksState, setBooksState] = useState(booksData);

  //React Router hooks
  let navigate = useNavigate();
  let location = useLocation();

  //If we get something in "location.state", we treat it
  //as a new book data.
  //For ex - AddBook Component will collect the book data
  // and navigate to this page with the "state" set to the
  // new book data.
  const [newBookData] = useState(location.state || null);

  //useEffect is a React Hook
  //When we want to update a state (side effects), we use it
  //Here, if the state has some data (new book content), we collect it
  //and push a new book object on our array.
  //When the bookData state changes, the App component is rendered again
  //and displays the new book.
  useEffect(() => {
    if (Object.keys(newBookData).length !== 0) {
      setBooksState((prevState) => {
        newBookData.tags = newBookData.tags && newBookData.tags.split(",");
        booksData.push(newBookData);
        return booksData;
      });
    }

    //We've consumed the "state" object (new book info), we can clear it
    //by navigating to self.
    navigate(".", { state: {} });
  }, [navigate, newBookData, booksState]);

  //Event handler function for the "Add New Book" button click
  const addNewBookHandler = () => {
    //Simply navigate to the "addBook" route. This will show us
    //the AddBook page
    navigate("addBook");
  };

  //Return the JSX
  return (
    <div className="App">
      <h1>Welcome to the World of Books</h1>
      <button onClick={addNewBookHandler}>
        Click Here to add a New Book to your Shelf
      </button>
      <Books books={booksState} />
    </div>
  );
}

export default App;
