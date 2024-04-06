import { useEffect, useState } from "react";
import BooksGrid from "../components/books/BooksGrid";
import PageContainer from "../components/PageContainer";
import SearchBar from "../components/SearchBar";
import { getBooks } from "../services/BooksService";

export default function HomePage() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks();
  }, []);

  function fetchBooks(searchTitle) {
    getBooks(searchTitle).then((books) => {
      setBooks(books);
    });
  }

  return (
    <PageContainer onBookAdded={fetchBooks}>
      <>
        <SearchBar onSearch={fetchBooks} />
        <BooksGrid books={books} />
      </>
    </PageContainer>
  );
}
