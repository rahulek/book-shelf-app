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

  //Add an event handler for the "Edit Title" button clicks
  const editTitleClickHandler = () => {
    //Instead of setting the new state directly,
    //call the state modify method with a function.
    //
    //This function gets called asynchronously with
    //the old state as a a parameter
    //
    //The function should return the new state.
    setTitle((oldState) => "New Title");
  };

  //Add an event handler for the "Edit Price" button clicks
  const editPriceClickHandler = () => {
    //Instead of setting the new state directly,
    //call the state modify method with a function.
    //
    //This function gets called asynchronously with
    //the old state as a a parameter
    //
    //The function should return the new state.
    setPrice((oldPrice) => {
      const newPrice = Math.floor(Math.random() * (1000 - 100) + 100);
      return newPrice;
    });
  };

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
        {/* Register a onClick handler */}
        <button onClick={editTitleClickHandler}>Edit Title</button>
        <button onClick={editPriceClickHandler}>Edit Price</button>
      </div>
    </div>
  );
}

export default BookEntry;
