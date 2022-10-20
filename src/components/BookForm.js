import React, { useState } from "react";
import uuid from "react-uuid";
import "./BookForm.css";

const BookForm = (props) => {
  let [title, setTitle] = useState("");
  let [author, setAuthor] = useState("");
  let [tags, setTags] = useState("");
  let [price, setPrice] = useState("");

  //Input Change Handlers
  const titleChangeHandler = (e) => {
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
    setPrice(e.target.value);
  };

  //Form submit handlers
  const formSubmitHandler = (e) => {
    e.preventDefault();

    //Collect all the information into an object
    //Parse the string input into a numeric one
    //It can fail if the entered price was not numeric
    //If NaN (Not-a-Number) was returned, set the price to 0
    let parsedPrice = parseInt(price);
    if (isNaN(parsedPrice)) {
      parsedPrice = 0;
    }

    const bookData = {
      id: uuid(),
      date: new Date(Date.now()), //now
      title,
      author,
      tags: tags.split(","),
      price: parsedPrice,
    };
    console.log(`BookData: ${JSON.stringify(bookData)}`);

    //Clear the input fields
    setTitle("");
    setAuthor("");
    setTags("");
    setPrice("");
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
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default BookForm;
