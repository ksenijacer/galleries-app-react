import React, { useState } from "react";
import { useDispatch } from "react-redux";

import authService from "../services/AuthService";
import { setActiveUser, setToken } from "../store/auth/slice";

export default function Login() {
  const dispatch = useDispatch();
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  async function handleSubmit(e) {
    e.preventDefault();
    const data = await authService.login(credentials);
    dispatch(setToken(data.token));
    dispatch(setActiveUser(data.user));
  }

  return (
    <div>
      <h4 style={{ color: "white", backgroundColor: "orange" }}>Login</h4>
      <form
        style={{ display: "flex", flexDirection: "column", width: 300 }}
        onSubmit={handleSubmit}
      >
        <input
          required
          value={credentials.email}
          placeholder="Email"
          onChange={({ target }) =>
            setCredentials({ ...credentials, email: target.value })
          }
        />
        <input
          required
          value={credentials.password}
          placeholder="Password"
          type="password"
          onChange={({ target }) =>
            setCredentials({ ...credentials, password: target.value })
          }
        />
        <button style={{ color: "white", backgroundColor: "green"}}>Login</button>
      </form>
    </div>
  );
}