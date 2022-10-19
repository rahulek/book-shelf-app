import React from "react";
import "./EditBook.css";
import BookForm from "../components/BookForm";

const EditBook = (props) => {
  return (
    <div className="editbook_container">
      <h2>Edit the Book Information Below</h2>
      <BookForm />
    </div>
  );
};

export default EditBook;
