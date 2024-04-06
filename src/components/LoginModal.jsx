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
import { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import { login } from "../services/UserService";

function RegisterModal({ isOpen, onClose }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { setIsLoggedIn } = useContext(UserContext);
  const initialRef = React.useRef();

  function resetForm() {
    setUsername("");
    setPassword("");
    setError("");
  }

  async function onLogin() {
    try {
      await login(username, password);
      setIsLoggedIn(true);
      resetForm();
      onClose();
    } catch (error) {
      setError(error.toString());
    }
  }

  return (
    <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Login</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <FormControl>
            <FormLabel>Username</FormLabel>
            <Input
              ref={initialRef}
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Password</FormLabel>
            <Input
              placeholder="Password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>
        </ModalBody>

        {error && <Text color="red.500">{error}</Text>}

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onLogin}>
            Login
          </Button>
          <Button onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

RegisterModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default RegisterModal;
