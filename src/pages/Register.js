import { useDispatch } from "react-redux";
import { useState } from "react";
import { register } from "../store/auth/slice";

export default function Register() {
    const dispatch = useDispatch();
    const [userData, setUserData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        password_confirmation: "",
        terms: false
    });


    function handleSubmit(e){
        e.preventDefault();

        if (!e.target.terms.checked){
          alert("You have to accept Terms and Conditions to register.");
          return;
        }

        dispatch(register({
          credentials:userData
        }));
    }

    return (
        <div>
          <h4 style={{ color: "white", backgroundColor: "orange" }}>Register</h4>
          <form onSubmit={handleSubmit}>
            <div><label>First name:
              <input
                required placeholder="First name" value={userData.firstName}
                onChange={({ target }) => setUserData({ ...userData, firstName: target.value })}/></label>
            </div>
            <div><label>Last name:
              <input required placeholder="Last name" value={userData.lastName}
                onChange={({ target }) => setUserData({ ...userData, lastName: target.value })}/></label>
            </div>
            <div><label>Email:
              <input required type="email" placeholder="Email" value={userData.email}
                onChange={({ target }) => setUserData({ ...userData, email: target.value })}/></label>
            </div>
            <div><label>Password:
              <input required type="password" placeholder="Password" value={userData.password}
                onChange={({ target }) => setUserData({ ...userData, password: target.value })}/></label>
            </div>
            <div><label>Password check:
              <input required type="password" placeholder="Confirm password" value={userData.password_confirmation}
                onChange={({ target }) => setUserData({ ...userData, password_confirmation: target.value })}/></label>
            </div>
            <div>
                <input required type="checkbox" name="terms" value={true}
                onChange={({ target }) => setUserData({ ...userData, terms: target.checked })}/>
                I have read and accept Terms and Conditions  
            </div>
            < br/>
            <button style={{ color: "white", backgroundColor: "green" }}>Register</button>
          </form>
        </div>
    );
}