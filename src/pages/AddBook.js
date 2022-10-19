import React from "react";
import "./AddBook.css";
import BookForm from "../components/BookForm";

const AddBook = (props) => {
  return (
    <div className="addbook_container">
      <h2>Complete the Form Below</h2>
      <BookForm />
    </div>
  );
};

export default AddBook;
