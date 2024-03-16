import React from "react";
import registerMethod from "../controller/register";

const RegisterPage: React.FC = ({}) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const values: { [key: string]: string } = {};
    formData.forEach((value, key) => {
      values[key] = value as string;
    });
    console.log(values);
    registerMethod(values);
  };

  return (
    <main>
      <div className="div-link">
        <a href="/login">login</a>
      </div>
      <div className="reglog-container">
        <form onSubmit={handleSubmit}>
          <div>
            <label>name:</label>
            <input type="text" name="name" id="name" />
          </div>
          <div>
            <label>email:</label>
            <input type="text" name="email" id="email" />
          </div>
          <div>
            <label>password:</label>
            <input type="text" name="password" id="password" />
          </div>
          <div>
            <label>confirm password:</label>
            <input type="text" name="passwordConfirm" id="passwordConfirm" />
          </div>
          <div>
            <button type="submit">register</button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default RegisterPage;
