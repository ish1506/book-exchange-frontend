import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import { PropTypes } from "prop-types";
import * as React from "react";
import { useState } from "react";
import { createBookListing } from "../services/BooksService";

function ListBookModal({ isOpen, onClose, onBookAdded }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");
  const [error, setError] = useState("");
  const initialRef = React.useRef();

  function resetForm() {
    setTitle("");
    setAuthor("");
    setGenre("");
    setError("");
  }

  async function onCreateBookListing() {
    try {
      await createBookListing(title, author, genre);
      resetForm();
      onBookAdded();
      onClose();
    } catch (error) {
      setError(error.toString());
    }
  }

  return (
    <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Create Book Listing</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <FormControl>
            <FormLabel>Title</FormLabel>
            <Input
              ref={initialRef}
              placeholder="Book Title"
              onChange={(e) => setTitle(e.target.value)}
            />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Author</FormLabel>
            <Input
              placeholder="Author"
              onChange={(e) => setAuthor(e.target.value)}
            />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Genre</FormLabel>
            <Input
              placeholder="Genre (optional)"
              onChange={(e) => setGenre(e.target.value)}
            />
          </FormControl>
        </ModalBody>

        {error && <Text color="red.500">{error}</Text>}

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onCreateBookListing}>
            Create Listing
          </Button>
          <Button onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

ListBookModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onBookAdded: PropTypes.func.isRequired,
};

export default ListBookModal;
