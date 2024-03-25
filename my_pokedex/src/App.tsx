import { AuthProvider } from "./context/AuthContext";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import pokeballImage from "./assets/pokeball.png";
import Pokedex from "./pages/Pokedex";
import LoginPage from "./pages/Login";
import ProfilePage from "./pages/Profile";
import RegisterPage from "./pages/Register";
import "./App.css";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Pokedex />,
  },
  {
    path: "/login",
    element: <LoginPage></LoginPage>,
  },
  {
    path: "/profile",
    element: <ProfilePage></ProfilePage>,
  },
  {
    path: "/register",
    element: <RegisterPage></RegisterPage>,
  },
]);
function App() {
  return (
    <>
      <AuthProvider>
        <header>
          <div>
            <a className="pokeball-a" href="/">
              <img src={pokeballImage} className="pokeball-icon" />
            </a>
            <a href="/" className="nav-title">
              my_pokedex
            </a>
          </div>
          <div>
            <i>developed by hHanzou</i>
          </div>
        </header>
        <RouterProvider router={router} />
      </AuthProvider>
    </>
  );
}

export default App;
