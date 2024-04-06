import {
  Box,
  Button,
  Flex,
  Spacer,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { PropTypes } from "prop-types";
// import * as React from "react";
import RegisterModal from "./RegisterModal";
import LoginModal from "./LoginModal";

/**
 * Wraps Page components in a with a Header row
 */
function PageContainer({ children }) {
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

  return (
    <>
      <Box bg="teal.400" w="100%" p={4} color="white">
        <Flex>
          <Text fontSize="2xl" fontWeight="bold" color="white">
            BookExchange
          </Text>
          <Spacer />
          <Button variant="solid" size="lg" onClick={handleRegister}>
            Register
          </Button>
          <Button variant="solid" size="lg" ml={3} onClick={handleLogin}>
            Login
          </Button>
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
