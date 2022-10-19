import React, { useState } from "react";
import "./BookEntry.css";
import "./BookDate";
import BookDate from "./BookDate";

function BookEntry(props) {
  //State as an object
  //State now stores title and price together
  //
  //Start with an initial state of the "props"
  let [titlePrice, setTitlePrice] = useState({
    title: props.title,
    price: props.price,
  });
  const author = props.author;
  const tags = props.tags;

  //Add an event handler for the "Edit Title" button clicks
  const editTitleClickHandler = () => {
    //Change only the Title
    //
    //use the ES6 spead syntax to get title and price
    //and then change the title to the new one.
    setTitlePrice({
      ...titlePrice,
      title: "New Title",
    });
  };

  //Add an event handler for the "Edit Price" button clicks
  const editPriceClickHandler = () => {
    //Change only the price
    //
    //use the ES6 spead syntax to get title and price
    //and then change the price to a new random number between 100 & 1000.
    setTitlePrice({
      ...titlePrice,
      price: Math.floor(Math.random() * (1000 - 100) + 100),
    });
  };

  //Return the JSX that uses the data that's passed-in
  //
  //Use the Object state now.
  //price as priceTitle.price
  //title as priceTitle.title
  return (
    <div className="book-entry">
      <BookDate date={props.date} />
      <div className="book-entry__title_author">
        <div className="title">{titlePrice.title}</div>
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
      <div className="book-entry__price">₹{titlePrice.price}</div>
      <div className="book-entry__edit">
        {/* Register a onClick handler */}
        <button onClick={editTitleClickHandler}>Edit Title</button>
        <button onClick={editPriceClickHandler}>Edit Price</button>
      </div>
    </div>
  );
}

export default BookEntry;
