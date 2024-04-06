import { Box, Image, Text } from "@chakra-ui/react";
import { PropTypes } from "prop-types";

export default function BookCard({ book }) {
  return (
    <Box key={book.id} borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Box p="3">
        <Box d="flex" alignItems="baseline">
          <Text mt="2" fontWeight="semibold" lineHeight="tight" isTruncated>
            {book.title}
          </Text>
        </Box>
        <Image src={book.image || "placeholder.jpg"} alt={book.title} />
        <Box>
          {book.author}
          <Box as="span" color="gray.600" fontSize="sm">
            {new Date(book.createdAt).toLocaleString()}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

BookCard.propTypes = {
  book: PropTypes.object,
};
