import { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import data from "./models/books.json";
import Home from "./pages/Home";
import BookCase from "./pages/BookCase";
import Header from "./components/header/Header";
import Contact from "./pages/Contact";

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
  const [books, setBooks] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState("");

  const handleBookSearch = async () => {
    const results = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${searchKeyword}&filter=paid-ebooks&print-type=books&projection=lite`
    ).then((res) => res.json());

    if (!results.error) {
      setBooks(results.items);
    }
  };

  const addBook = (titleParameter) => {
    console.log(titleParameter);
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Home
          books={books}
          addBook={addBook}
          searchValue={searchKeyword}
          setSearchValue={setSearchKeyword}
          searchBook={handleBookSearch}
        />
      ),
    },
    {
      path: "/bookcase",
      element: <BookCase />,
    },
    {
      path: "/contact",
      element: <Contact />,
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
