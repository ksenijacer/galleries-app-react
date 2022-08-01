import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../store/auth/slice";

export default function Login() {
  const dispatch = useDispatch();
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(login(credentials));
  }

  return (
    <div>
      <h4 style={{ color: "white", backgroundColor: "orange" }}>Login</h4>
      <form
        style={{ display: "flex", flexDirection: "column", width: 300, padding:5 }}
        onSubmit={handleSubmit}
      > <label>
        <input
          required
          value={credentials.email}
          placeholder="Email"
          onChange={({ target }) =>
            setCredentials({ ...credentials, email: target.value })
          }
        /> </label>
        <label>
        <input
          required
          value={credentials.password}
          placeholder="Password"
          type="password"
          onChange={({ target }) =>
            setCredentials({ ...credentials, password: target.value })
          }
        /> </label>
        < br/>
        <button style={{ color: "white", backgroundColor: "green", width: 160}}>Login</button>
      </form>
    </div>
  );
}