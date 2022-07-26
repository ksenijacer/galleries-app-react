import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../store/auth/slice";

export default function Login(){
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
          <h2 style={{ color: "white", backgroundColor: "orange" }}>Login</h2>
          <form onSubmit={handleSubmit}>
            <div> Email:
              <input required type="email" placeholder="Email" value={credentials.email}
                onChange={({ target }) => setCredentials({ ...credentials, email: target.value })}/>
            </div>
            <br/>
            <div>Password:
              <input required type="password" placeholder="Password" value={credentials.password}
                onChange={({ target }) => setCredentials({ ...credentials, password: target.value })}/>
            </div>
            <br/>
            <button style={{ color: "white", backgroundColor: "green" }}>Login</button>
          </form>
        </div>
      );
}