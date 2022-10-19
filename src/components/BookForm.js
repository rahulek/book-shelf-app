import React, { useEffect, useState } from "react";
import "./BookForm.css";

const BookForm = (props) => {
  let [title, setTitle] = useState(props.title ? props.title : "");
  let [author, setAuthor] = useState(props.author ? props.author : "");
  let [tags, setTags] = useState(props.tags ? props.tags : "");
  let [price, setPrice] = useState(props.price ? props.price : 100);

  //Input Change Handlers
  const titleChangeHandler = (e) => {
    console.log("Title Input changed");
  };

  const authorChangeHandler = (e) => {
    console.log("Author Input changed");
  };

  const tagsChangeHandler = (e) => {
    console.log("Tags Input changed");
  };

  const priceChangeHandler = (e) => {
    console.log("Price Input changed");
  };

  //Form submit handlers
  const formSubmitHandler = () => {
    console.log("Form submitted.");
    console.log(`${title}, ${author}, ${tags}, ${price}`);
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
        <button type="submit">Add this Book!</button>
      </form>
    </div>
  );
};

export default BookForm;
