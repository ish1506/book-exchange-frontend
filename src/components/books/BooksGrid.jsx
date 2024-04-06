import { Box, Grid } from "@chakra-ui/react";
import { PropTypes } from "prop-types";
import BookCard from "./BookCard";

export default function BooksGrid({ books }) {
  return (
    <Box p={8}>
      <Grid
        templateColumns={[
          "repeat(2, 1fr)",
          "repeat(4, 1fr)",
          "repeat(6, 1fr)",
          "repeat(8, 1fr)",
        ]}
        gap={6}
      >
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </Grid>
    </Box>
  );
}

BooksGrid.propTypes = {
  books: PropTypes.array,
};
