import {
  Box,
  Button,
  Flex,
  Spacer,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { PropTypes } from "prop-types";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import ListBookModal from "./ListBookModal";
import LoginModal from "./LoginModal";
import RegisterModal from "./RegisterModal";

/**
 * Wraps Page components in a with a Header row
 */
function PageContainer({ children, onBookAdded }) {
  const { isLoggedIn, setIsLoggedIn } = useContext(UserContext);
  const {
    isOpen: isRegisterOpen,
    onOpen: onRegisterOpen,
    onClose: onRegisterClose,
  } = useDisclosure();
  const {
    isOpen: isLoginOpen,
    onOpen: onLoginOpen,
    onClose: onLoginClose,
  } = useDisclosure();
  const {
    isOpen: isListBookOpen,
    onOpen: onListBookOpen,
    onClose: onListBookClose,
  } = useDisclosure();

  const handleRegister = () => {
    onRegisterOpen();
  };

  const handleLogin = () => {
    onLoginOpen();
  };

  const handleLogout = () => {
    localStorage.removeItem("userId");
    setIsLoggedIn(false);
  };

  const handleListBook = () => {
    onListBookOpen();
  };

  const loggedInButtons = (
    <>
      <Button
        bgColor="lightgray"
        variant="solid"
        size="lg"
        onClick={handleLogout}
      >
        Logout
      </Button>
      <Button
        ml={3}
        bgColor="white"
        variant="solid"
        size="lg"
        onClick={handleListBook}
      >
        List a Book
      </Button>
    </>
  );

  const loggedOutButtons = (
    <>
      <Button
        bgColor="lightgray"
        variant="solid"
        size="lg"
        onClick={handleRegister}
      >
        Register
      </Button>
      <Button
        ml={3}
        bgColor="white"
        variant="solid"
        size="lg"
        onClick={handleLogin}
      >
        Login
      </Button>
    </>
  );

  return (
    <>
      <Box bg="teal.400" w="100%" p={4} color="white">
        <Flex>
          <Text fontSize="2xl" fontWeight="bold" color="white">
            BookExchange
          </Text>
          <Spacer />
          {isLoggedIn ? loggedInButtons : loggedOutButtons}
        </Flex>
      </Box>
      {children}
      <RegisterModal isOpen={isRegisterOpen} onClose={onRegisterClose} />
      <LoginModal isOpen={isLoginOpen} onClose={onLoginClose} />
      <ListBookModal
        isOpen={isListBookOpen}
        onClose={onListBookClose}
        onBookAdded={onBookAdded}
      />
    </>
  );
}

PageContainer.propTypes = {
  children: PropTypes.object,
  onBookAdded: PropTypes.func,
};

export default PageContainer;
