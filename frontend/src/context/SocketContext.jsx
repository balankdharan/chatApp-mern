import { useEffect, useState, useContext } from "react";
import { createContext } from "react";
import { useAuthContext } from "./AuthContext";
import io from "socket.io-client";

export const SocketContext = createContext();
// eslint-disable-next-line react-refresh/only-export-components
export const useSocketContext = () => {
  return useContext(SocketContext);
};

export const SocketContextProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);

  const { authUser } = useAuthContext();
  useEffect(() => {
    if (authUser) {
      const socketResult = io("http://localhost:5000", {
        query: {
          userId: authUser._id,
        },
      });
      setSocket(socketResult);

      socketResult.on("getOnlineUsers", (users) => {
        setOnlineUsers(users);
      });
      return () => socketResult.close();
    } else {
      if (socket) {
        socket.close();
        setSocket(null);
      }
    }
  }, [authUser]);
  return (
    <SocketContext.Provider value={{ socket, onlineUsers }}>
      {children}
    </SocketContext.Provider>
  );
};
