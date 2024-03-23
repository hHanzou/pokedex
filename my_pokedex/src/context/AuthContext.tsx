import React, {
  createContext,
  useContext,
  ReactNode,
  useState,
  Children,
} from "react";

type AuthContextProps = {
  authenticated: boolean;
  token: string;
  isUserAuthenticated: () => boolean;
  saveToken: (token: string) => void;
  removeToken: () => void;
  setAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
};

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [authenticated, setAuthenticated] = useState(false);
  const [token, setToken] = useState("");
  const isUserAuthenticated = () => {
    return localStorage.getItem("token") !== null;
  };
  const saveToken = (token: string) => {
    localStorage.setItem("token", token);
    setToken(token);
  };
  const removeToken = () => {
    localStorage.removeItem("token");
    localStorage.clear();
    setToken("");
  };

  async function handleLogin() {}

  return (
    <AuthContext.Provider
      value={{
        authenticated,
        token,
        saveToken,
        removeToken,
        setAuthenticated,
        isUserAuthenticated,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
