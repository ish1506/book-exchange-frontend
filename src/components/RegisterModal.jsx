import {
  Button,
  FormControl,
  FormHelperText,
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
import { useContext, useRef, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import { register } from "../services/UserService";

function RegisterModal({ isOpen, onClose }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [error, setError] = useState("");
  const initialRef = useRef();
  const { setIsLoggedIn } = useContext(UserContext);

  function isUsernameValid() {
    return username.length >= 6;
  }
  function isPasswordValid() {
    return password.length >= 6 && password == password2;
  }

  function resetForm() {
    setUsername("");
    setPassword("");
    setError("");
  }

  async function onRegister() {
    if (!isUsernameValid() || !isPasswordValid()) return;

    try {
      await register(username, password);
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
        <ModalHeader>Register</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <form>
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

            <FormControl mt={4} isInvalid={password2 && password2 !== password}>
              <FormLabel>Confirm Password</FormLabel>
              <Input
                placeholder="Confirm Password"
                type="password"
                onChange={(e) => setPassword2(e.target.value)}
              />
              {password2.length > 0 && !isPasswordValid() && (
                <FormHelperText color="red.500">
                  Passwords do not match
                </FormHelperText>
              )}
            </FormControl>
          </form>
        </ModalBody>

        {error && <Text color="red.500">{error}</Text>}

        <ModalFooter>
          <Button
            colorScheme="blue"
            mr={3}
            onClick={onRegister}
          >
            Register
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
