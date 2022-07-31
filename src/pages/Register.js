import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { register } from "../store/auth/slice";
import { selectRegistrationErrors } from "../store/auth/selectors";

export default function Register() {
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    password_confirmation: "",
    terms: false
  });

  const errors = useSelector(selectRegistrationErrors);

  async function handleSubmit(e) {
    e.preventDefault();
    dispatch(register(userData));
  }

  return (
    <div>
      <h4 style={{ color: "white", backgroundColor: "orange" }}>Register</h4>
      <form
        style={{ display: "flex", flexDirection: "column", width: 300, padding: 5 }}
        onSubmit={handleSubmit}
      > <label>
        <input style= {{ display: "flex", flexDirection: "column", width: 250 }}
          required
          value={userData.first_name}
          placeholder="First name"
          onChange={({ target }) =>
            setUserData({ ...userData, first_name: target.value })
          }
        />
        {errors?.first_name?.length && (
          <span style={{ color: "red" }}>{errors.first_name[0]}</span>
        )}</label>

        <label>
        <input style= {{ display: "flex", flexDirection: "column", width: 250 }}
          required
          value={userData.last_name}
          placeholder="Last name"
          onChange={({ target }) =>
            setUserData({ ...userData, last_name: target.value })
          }
        />
        {errors?.last_name?.length && (
          <span style={{ color: "red" }}>{errors.last_name[0]}</span>
        )}</label>

        <label>
        <input style= {{ display: "flex", flexDirection: "column", width: 250 }}
          required
          value={userData.email}
          type="email"
          placeholder="Email"
          onChange={({ target }) =>
            setUserData({ ...userData, email: target.value })
          }
        />
        {errors?.email?.length && (
          <span style={{ color: "red" }}>{errors.email[0]}</span>
        )}</label>

        <label>
        <input style= {{ display: "flex", flexDirection: "column", width: 250 }}
          required
          value={userData.password}
          placeholder="Password"
          type="password"
          onChange={({ target }) =>
            setUserData({ ...userData, password: target.value })
          }
        />
        {errors?.password?.length && (
          <span style={{ color: "red" }}>{errors.password[0]}</span>
        )}</label>

        <label>
        <input style= {{ display: "flex", flexDirection: "column", width: 250 }}
          required
          value={userData.password_confirmation}
          placeholder="Password confirmation"
          type="password"
          onChange={({ target }) =>
            setUserData({ ...userData, password_confirmation: target.value })
          }
        />
        {errors?.password_confirmation?.length && (
          <span style={{ color: "red" }}>{errors.password_confirmation[0]}</span>
        )}</label>

        <div>
        <label>
        <input
          equired type="checkbox" name="terms" value={true}
                onChange={({ target }) => setUserData({ ...userData, terms: target.checked })}/>
                I have read and accept Terms and Conditions  
        
        {errors?.password?.length && (
          <span style={{ color: "red" }}>{errors.password[0]}</span>
        )}
        </label>
        </div>
        <button style={{ color: "white", backgroundColor: "green" }}>Register</button>
      </form>
    </div>
  );
}
