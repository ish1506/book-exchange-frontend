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
import RegisterModal from "./RegisterModal";
import LoginModal from "./LoginModal";
import { UserContext } from "../contexts/UserContext";

/**
 * Wraps Page components in a with a Header row
 */
function PageContainer({ children }) {
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

  return (
    <>
      <Box bg="teal.400" w="100%" p={4} color="white">
        <Flex>
          <Text fontSize="2xl" fontWeight="bold" color="white">
            BookExchange
          </Text>
          <Spacer />
          {isLoggedIn ? (
            <Button variant="solid" size="lg" onClick={handleLogout}>
              Logout
            </Button>
          ) : (
            <>
              <Button variant="solid" size="lg" onClick={handleRegister}>
                Register
              </Button>
              <Button variant="solid" size="lg" ml={3} onClick={handleLogin}>
                Login
              </Button>
            </>
          )}
        </Flex>
      </Box>
      {children}
      <RegisterModal isOpen={isRegisterOpen} onClose={onRegisterClose} />
      <LoginModal isOpen={isLoginOpen} onClose={onLoginClose} />
    </>
  );
}

PageContainer.propTypes = {
  children: PropTypes.object,
};

export default PageContainer;
