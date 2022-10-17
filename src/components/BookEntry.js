import "./BookEntry.css";

function BookEntry(props) {
  //Take in props
  //props is an object that holds the data
  //that this component should consume and
  //render

  //Process props.date and pull out month, day and year
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();

  //Process props.title, tags and price data
  const title = props.title;
  const tags = props.tags;
  const price = props.price;

  //Return the JSX that uses the data that's passed-in
  return (
    <div className="book-entry">
      <div>
        <div>{year}</div>
        <div>{month}</div>
        <div>{day}</div>
      </div>
      <div className="book-entry__title_author">
        <p>{title}</p>
      </div>
      {tags.length === 2 && (
        <div className="book-entry__tags">
          <p>{tags[0]}</p>
          <p>{tags[1]}</p>
        </div>
      )}
      <div className="book-entry__price">₹{price}</div>
    </div>
  );
}

export default BookEntry;
