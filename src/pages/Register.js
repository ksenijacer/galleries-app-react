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






// import { useDispatch, useSelector } from "react-redux";
// import { useState } from "react";
// import { register } from "../store/auth/slice";
// import { selectRegistrationErrors } from "../store/auth/selectors";

// export default function Register() {
//     const dispatch = useDispatch();
//     const [userData, setUserData] = useState({
//         firstName: "",
//         lastName: "",
//         email: "",
//         password: "",
//         password_confirmation: "",
//         terms: false
//     });

//     const errors = useSelector(selectRegistrationErrors);


//     function handleSubmit(e){
//         e.preventDefault();

//         if (!e.target.terms.checked){
//           alert("You have to accept Terms and Conditions to register.");
//           return;
//         }

//         dispatch(register({
//           credentials:userData
//         }));
//     }

//     return (
//         <div>
//           <h4 style={{ color: "white", backgroundColor: "orange" }}>Register</h4>
//           <form onSubmit={handleSubmit}>
//             <div><label>First name:
//               <input
//                 required placeholder="First name" value={userData.firstName}
//                 onChange={({ target }) => setUserData({ ...userData, firstName: target.value })}/></label>
//             </div>
//             {errors?.firstName?.length && (
//               <span style={{ color: "red" }}>{errors.firstName[0]}</span>
//             )}
//             <div><label>Last name:
//               <input required placeholder="Last name" value={userData.lastName}
//                 onChange={({ target }) => setUserData({ ...userData, lastName: target.value })}/></label>
//             </div>
//             {errors?.lastName?.length && (
//               <span style={{ color: "red" }}>{errors.lastName[0]}</span>
//             )}
//             <div><label>Email:
//               <input required type="email" placeholder="Email" value={userData.email}
//                 onChange={({ target }) => setUserData({ ...userData, email: target.value })}/></label>
//             </div>
//             {errors?.email?.length && (
//               <span style={{ color: "red" }}>{errors.email[0]}</span>
//             )}
//             <div><label>Password:
//               <input required type="password" placeholder="Password" value={userData.password}
//                 onChange={({ target }) => setUserData({ ...userData, password: target.value })}/></label>
//             </div>
//             {errors?.password?.length && (
//               <span style={{ color: "red" }}>{errors.password[0]}</span>
//             )}
//             <div><label>Password check:
//               <input required type="password" placeholder="Confirm password" value={userData.password_confirmation}
//                 onChange={({ target }) => setUserData({ ...userData, password_confirmation: target.value })}/></label>
//             </div>
//             {errors?.password_confirmation?.length && (
//               <span style={{ color: "red" }}>{errors.password_confirmation[0]}</span>
//             )}
//             <div>
//                 <input required type="checkbox" name="terms" value={true}
//                 onChange={({ target }) => setUserData({ ...userData, terms: target.checked })}/>
//                 I have read and accept Terms and Conditions  
//             </div>
//             {errors?.name?.length && (
//           <span style={{ color: "red" }}>{errors.name[0]}</span>
//         )}
//             <br/>
//             <button style={{ color: "white", backgroundColor: "green" }}>Register</button>
//           </form>
//         </div>
//     );
// }




// <h4 style={{ color: "white", backgroundColor: "orange" }}>Register</h4>