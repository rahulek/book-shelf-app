import "./BookDate.css";

//A modern way to write the functional component
// as an arrow function
//Apart from the stylistic difference, there is no
// functional difference

const BookDate = (props) => {
  //Process props.date and pull out month, day and year
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <div className="book-date">
      <div className="book-date__year">{year}</div>
      <div className="book-date__month">{month}</div>
      <div className="book-date__day">{day}</div>
    </div>
  );
};

export default BookDate;
