import "./BookEntry.css";
import "./BookDate";
import BookDate from "./BookDate";

function BookEntry(props) {
  //Take in props
  //props is an object that holds the data
  //that this component should consume and
  //render

  //Process props.title, tags and price data
  const title = props.title;
  const author = props.author;
  const tags = props.tags;
  const price = props.price;

  //Add an event handler for the "Edit" button clicks
  const editClickHandler = (e) => {
    //Dump the event data.
    console.log("Edit clicked: ", e);
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
        <button onClick={editClickHandler}>Edit</button>
      </div>
    </div>
  );
}

export default BookEntry;
