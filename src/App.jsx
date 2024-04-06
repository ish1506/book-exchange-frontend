import { ChakraProvider } from "@chakra-ui/react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { UserProvider } from "./contexts/UserContext";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <ChakraProvider>
      <UserProvider>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </Router>
      </UserProvider>
    </ChakraProvider>
  );
}

export default App;
