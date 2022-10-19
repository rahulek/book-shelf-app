import React, { useState } from "react";
import "./BookEntry.css";
import "./BookDate";
import BookDate from "./BookDate";

function BookEntry(props) {
  //Take in props
  //props is an object that holds the data
  //that this component should consume and
  //render

  //Create a new piece of state with useState()
  //for changing and render the title
  let [title, setTitle] = useState(props.title);

  const author = props.author;
  const tags = props.tags;

  //Challenge Solution: Create a new piece of state for price
  let [price, setPrice] = useState(props.price);

  //Add an event handler for the "Edit" button clicks
  const editClickHandler = (e) => {
    //When the button is clicked, we want to change the title of the
    //book to "New Title".
    //
    //We must use setTitle() state management ReactJS function
    //This will not only change the state and set the title to the
    //new value but will also render the JSX again. This will, in turn,
    //render the updated title on the screen.

    setTitle("New Title");
  };

  //Challenge Solution:
  const editClickHandlerForPrice = () => {
    //calculate a new random number between 100 and 100
    //and set that as a new price
    const newPrice = Math.floor(Math.random() * (1000 - 100) + 100);

    setPrice(newPrice);
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
        <button onClick={editClickHandlerForPrice}>Edit</button>
      </div>
    </div>
  );
}

export default BookEntry;
