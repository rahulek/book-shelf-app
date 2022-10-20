import React from "react";
import { useNavigate } from "react-router-dom";

import "./AddBook.css";
import BookForm from "../components/BookForm";

const AddBook = (props) => {
  //useNavgate() is a react-router function
  //we use it to navigate to the home page with
  //the new book information
  let navigate = useNavigate();

  //handler function that the BookForm component invokes
  //We take the book data and pass it back to the / route (App Component)
  //This book data is passed as a "state" object inside the navigate() call
  const addBookHandler = (bookData) => {
    console.log(`AddBook.js -> ${JSON.stringify(bookData)}`);
    navigate("/", { state: bookData });
  };

  //Pass in a handler function to BookForm
  //BookForm component will call that function when
  //new book information is availble.
  return (
    <div className="addbook_container">
      <h2>Complete the Form Below</h2>
      <BookForm onAddBook={addBookHandler} />
    </div>
  );
};

export default AddBook;
