import BookList from "../components/book-list/BookList";
import Header from "../components/header/Header";
import Search from "../components/search/Search";

function Home({ books, addBook, searchValue, setSearchValue, searchBook }) {
  return (
    <>
      <Header />
      <Search
        searchValueProps={searchValue}
        setSearchValueProps={setSearchValue}
        searchBookProps={searchBook}
      />
      <BookList booksProps={books} addBook={addBook} />
    </>
  );
}

export default Home;
