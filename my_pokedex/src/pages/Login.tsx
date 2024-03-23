import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import loginMethod from "../controller/login";
import privateMethod from "../controller/privateRoute";
import { AuthContext } from "../context/AuthContext";
import { UserDetails } from "../context/AuthContext";

const LoginPage: React.FC = ({}) => {
  const navigate = useNavigate();
  const { unsetAll, saveToken, addUser, user } = useContext(AuthContext);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const values: { [key: string]: string } = {};
    formData.forEach((value, key) => {
      values[key] = value as string;
    });
    console.log(values);
    try {
      const data = await loginMethod(values);
      saveToken(data.token);
      const userInfo = await privateMethod(data.id);
      await addUser(userInfo as UserDetails);
      console.log(user);
      navigate("/");
    } catch (err) {
      console.log(err);
      alert(err);
      unsetAll;
    }
  };
  return (
    <main>
      <div className="div-link">
        <a href="/register">register</a>
      </div>
      <div className="reglog-container">
        <form onSubmit={handleSubmit}>
          <div>
            <label>email:</label>
            <input type="text" name="email" id="email" />
          </div>
          <div>
            <label>password:</label>
            <input type="text" name="password" id="password" />
          </div>
          <div>
            <button type="submit">login</button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default LoginPage;
