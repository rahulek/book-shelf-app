import React, { useState } from "react";
import "./BookEntry.css";
import "./BookDate";
import BookDate from "./BookDate";

function BookEntry(props) {
  //Normal piece-meal state for title and price fields
  let [title, setTitle] = useState(props.title);
  let [price, setPrice] = useState(props.price);

  const author = props.author;
  const tags = props.tags;

  //Return the JSX that uses the data that's passed-in
  return (
    <div className="book-entry">
      <BookDate date={props.date} />
      <div className="book-entry__title_author">
        <div className="title">{title}</div>
        <div className="author">
          <em>by {author}</em>
        </div>
      </div>
      {tags.length === 2 && (
        <div className="book-entry__tags">
          <p>{tags[0]}</p>
          <p>{tags[1]}</p>
        </div>
      )}
      <div className="book-entry__price">₹{price}</div>
      <div className="book-entry__edit">
        <button>Edit Details</button>
        <button>Delete</button>
      </div>
    </div>
  );
}

export default BookEntry;
