import { PropTypes } from "prop-types";
import { createContext, useEffect, useState } from "react";
import { io } from "socket.io-client";

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    setIsLoggedIn(!!userId);
  }, []);

  useEffect(() => {
    let newSocket;
    if (isLoggedIn) {
      // TODO fetch all unread notifs

      newSocket = io("http://localhost:3000");
      newSocket.on("notification", (data) => {
        console.log("NOTIFICATION RECEIVED", data);
      });
      setSocket(newSocket);
    }

    return () => {
      if (newSocket) {
        newSocket.disconnect();
      }
    };
  }, [isLoggedIn]);

  return (
    <UserContext.Provider value={{ isLoggedIn, setIsLoggedIn, socket }}>
      {children}
    </UserContext.Provider>
  );
}

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
