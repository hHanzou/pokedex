import React, {
  createContext,
  useContext,
  ReactNode,
  useState,
  Children,
} from "react";

export type UserDetails = {
  _id: string;
  name: string;
  email: string;
  pokemons_caught: string[];
  pokemons_wishlist: string[];
};

type AuthContextProps = {
  authenticated: boolean;
  token: string | null;
  user: UserDetails | null;
  unsetAll: () => void;
  isUserAuthenticated: () => boolean;
  saveToken: (token: string) => void;
  removeToken: () => void;
  setAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
  addUser: (user: UserDetails) => void;
};

export const AuthContext = createContext<AuthContextProps>(
  {} as AuthContextProps
);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [authenticated, setAuthenticated] = useState(false);
  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<UserDetails | null>(null);
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
    setToken(null);
  };

  const unsetAll = () => {
    removeToken;
    setUser(null);
    setAuthenticated(false);
  };

  const addUser = (user: UserDetails) => {
    setUser(user);
    setAuthenticated(true);
  };

  async function handleLogin() {}

  return (
    <AuthContext.Provider
      value={{
        authenticated,
        token,
        user,
        unsetAll,
        saveToken,
        removeToken,
        setAuthenticated,
        isUserAuthenticated,
        addUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
