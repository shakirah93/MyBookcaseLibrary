import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import data from "./models/books.json";
import Home from "./pages/Home";
import BookCase from "./pages/BookCase";
import Header from "./components/header/Header";

// this is a Button Component
function Button({ label, buttonClassName }) {
  return <button className={buttonClassName}>{label}</button>;
}

// this creates a delete button
function DeleteButton() {
  return <Button label="Delete" buttonClassName="btn-red" />;
}

// this creates a success button
function SuccessButton() {
  return <Button label="Submit" buttonClassName="btn-success" />;
}

function App() {
  const [books, setBooks] = useState(data.books);

  const addBook = (titleParameter) => {
    console.log(titleParameter);
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home books={books} addBook={addBook} />,
    },
    {
      path: "/bookcase",
      element: <BookCase />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

{
  /* <DeleteButton />
      <SuccessButton /> */
}

export default App;
