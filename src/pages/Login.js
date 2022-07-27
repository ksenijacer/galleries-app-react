import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../store/auth/slice";
import { useHistory } from "react-router-dom";
export default function Login(){
    const dispatch = useDispatch();
    const history = useHistory()
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
          <form onSubmit={handleSubmit}>
            <div>
            <label>Email <input required type="email" placeholder="Email" value={credentials.email}
                onChange={({ target }) => setCredentials({ ...credentials, email: target.value })}/></label>
            </div>
            <br/>
            <div><label>Password:
              <input required type="password" placeholder="Password" value={credentials.password}
                onChange={({ target }) => setCredentials({ ...credentials, password: target.value })}/></label>
            </div>
            <br/>
            <button style={{ color: "white", backgroundColor: "green" }}>Login</button>
          </form>
        </div>
      );
}