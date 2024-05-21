import { createContext, useContext, useState, useEffect } from "react";
import { User } from "../types/types";

interface UserContextType {
  user: User | null;
  token: string | null;
  setUser: (user: User | null) => void;
  setToken: (token: string | null) => void;
  userRole: string | null;
  setUserRole: (role: string | null) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const userDetails = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUserDetails must be used within a UserProvider");
  }
  return context;
};

export const UserProvider = ({ children }: any) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [userRole, setUserRole] = useState<string | null>(null);

  useEffect(() => {
    if (localStorage.getItem("token") && localStorage.getItem("userType")) {
      setToken(localStorage.getItem("token"));
      setUserRole(localStorage.getItem("userType"));
    } else {
      setToken(null);
      setUserRole(null);
    }
  }, []);

  return (
    <UserContext.Provider
      value={{ user, setUser, token, setToken, userRole, setUserRole }}
    >
      {children}
    </UserContext.Provider>
  );
};
