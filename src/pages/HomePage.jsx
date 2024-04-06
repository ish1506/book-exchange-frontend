import { useEffect, useState } from "react";
import BooksGrid from "../components/books/BooksGrid";
import PageContainer from "../components/PageContainer";
import { getAllBooks } from "../services/BooksService";

export default function HomePage() {
  const [recentBooks, setRecentBooks] = useState([]);

  useEffect(() => {
    fetchBooks();
  }, []);

  function fetchBooks() {
    getAllBooks().then((books) => {
      setRecentBooks(books);
    });
  }

  // TODO: Implement search bar
  return (
    <PageContainer onBookAdded={fetchBooks}>
      <BooksGrid books={recentBooks} />
    </PageContainer>
  );
}
