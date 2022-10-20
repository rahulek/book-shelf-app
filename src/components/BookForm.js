import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import uuid from "react-uuid";
import "./BookForm.css";

const BookForm = (props) => {
  let [title, setTitle] = useState(props.title ? props.title : "");
  let [author, setAuthor] = useState(props.author ? props.author : "");
  let [tags, setTags] = useState(props.tags ? props.tags : "");
  let [price, setPrice] = useState(props.price ? props.price : 100);

  //see if we're adding/editing
  let location = useLocation();
  let isEditing = location && location.pathname === "/editbook";

  //Input Change Handlers
  const titleChangeHandler = (e) => {
    //Modify the title state to reflect the user entered keystroke
    setTitle(e.target.value);
  };

  const authorChangeHandler = (e) => {
    //Modify the author state to reflect the user entered keystroke
    setAuthor(e.target.value);
  };

  const tagsChangeHandler = (e) => {
    //Modify the tags state to reflect the user entered keystroke
    setTags(e.target.value);
  };

  const priceChangeHandler = (e) => {
    //Modify the tags state to reflect the user entered keystroke
    setPrice(parseInt(e.target.value));
  };

  //Form submit handlers
  const formSubmitHandler = (e) => {
    e.preventDefault();

    //Collect all the information into an object
    const bookData = {
      id: uuid(),
      date: new Date(Date.now()), //now
      title,
      author,
      tags: tags.split(","),
      price,
    };

    //Invoke the parent's handler
    props.onAddBook(bookData);
  };

  return (
    <div className="form_wrapper">
      <form onSubmit={formSubmitHandler}>
        <div>
          <label htmlFor="name">Title </label>
          <input
            name="title"
            type="text"
            placeholder="Book Title"
            value={title}
            onChange={titleChangeHandler}
          />
        </div>

        <div>
          <label htmlFor="name">Author </label>
          <input
            name="author"
            type="text"
            placeholder="Author"
            value={author}
            onChange={authorChangeHandler}
          />
        </div>

        <div>
          <label htmlFor="tags">Tags </label>
          <input
            name="tags"
            type="text"
            placeholder="Tags separated by commas"
            value={tags}
            onChange={tagsChangeHandler}
          />
        </div>

        <div>
          <label htmlFor="name">Price </label>
          <input
            name="price"
            type="number"
            placeholder="Price in Rupees between 100 and 10,000"
            min="100"
            max="10000"
            value={price}
            onChange={priceChangeHandler}
          />
        </div>
        <button type="submit">{isEditing ? "Save Book" : "Add Book"}</button>
      </form>
    </div>
  );
};

export default BookForm;
