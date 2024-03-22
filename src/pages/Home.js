import BookList from "../components/book-list/BookList";
import Header from "../components/header/Header";

function Home({ books, addBook }) {
  return (
    <>
      <Header />
      <BookList booksProps={books} addBook={addBook} />
    </>
  );
}

export default Home;
