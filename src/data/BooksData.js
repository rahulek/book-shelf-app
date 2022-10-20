import uuid from "react-uuid";

const booksData = [
  {
    id: uuid(),
    date: new Date("January 1, 2019"),
    title: "The Colleced Works of William Shakespeare",
    author: "Oxford University Press",
    tags: ["drama", "medieval"],
    price: 872,
  },
  {
    id: uuid(),
    date: new Date("October 12, 2020"),
    title: "Saladin",
    author: "John Man",
    tags: ["history", "biography"],
    price: 342,
  },
  {
    id: uuid(),
    date: new Date("December 27, 2016"),
    title: "Republic",
    author: "Plato and Oxford University Press",
    tags: ["plato", "philosophy"],
    price: 699,
  },
  {
    id: uuid(),
    date: new Date("January 10, 2022"),
    title: "Tao Te Ching",
    author: "Lao Tzu",
    tags: ["chinese", "philosophy"],
    price: 1234,
  },
];

export default booksData;
