import "./BookEntry.css";

//A React component that handles one book

function BookEntry() {
  return (
    <div className="book-entry">
      <div>October 18, 2022</div>
      <div className="book-entry__title_author">
        <p>The Story of Civilization</p>
      </div>
      <div className="book-entry__tags">
        <p>History</p>
        <p>Multi-Volume</p>
      </div>
      <div className="book-entry__price">₹1234</div>
    </div>
  );
}

export default BookEntry;
