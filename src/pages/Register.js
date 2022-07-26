import { useDispatch } from "react-redux";
import { useState } from "react";
import { register } from "../store/auth/slice";

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


    function handleSubmit(e){
        e.preventDefault();

        if (!e.target.terms.checked){
          alert("You have to accept Terms and Conditions to register.");
          return;
        }

        dispatch(register(userData));
    }

    return (
        <div>
          <h2>Register</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <input
                required placeholder="First name" value={userData.firstName}
                onChange={({ target }) => setUserData({ ...userData, firstName: target.value })}/>
            </div>
            <div>
              <input required placeholder="Last name" value={userData.lastName}
                onChange={({ target }) => setUserData({ ...userData, lastName: target.value })}/>
            </div>
            <div>
              <input required type="email" placeholder="Email" value={userData.email}
                onChange={({ target }) => setUserData({ ...userData, email: target.value })}/>
            </div>
            <div>
              <input required type="password" placeholder="Password" value={userData.password}
                onChange={({ target }) => setUserData({ ...userData, password: target.value })}/>
            </div>
            <div>
              <input required type="password" placeholder="Confirm password" value={userData.passwordConfirmation}
                onChange={({ target }) => setUserData({ ...userData, passwordConfirmation: target.value })}/>
            </div>
            <div>
              <label>
                Please read and accept Terms and Conditions before making profile.
              </label>
              <input required type="checkbox" name="terms" value={true}
                onChange={({ target }) => setUserData({ ...userData, terms: target.checked })}/>
            </div>
            <button>Register</button>
          </form>
        </div>
    );
}