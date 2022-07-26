import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../store/auth/slice";
import { selectActiveUser, selectIsAuthenticated } from "../store/auth/selectors";
import '../App.css';

export default function NavBar(){
    const dispatch = useDispatch();
    const activeUser = useSelector(selectActiveUser);
    const isAuthenticated = useSelector(selectIsAuthenticated);

    function handleLogout(){
        dispatch(logout());
    }

    return (
        <div>
        <nav>
            <ul style={{listStyleType: "none", text_align: "center" }}>
            {isAuthenticated ? (
                <h3 style={{color: "red"}}>
                    User: {activeUser && activeUser.first_name} {activeUser && activeUser.last_name}  
                </h3>
            ) : (
                <h3 style={{color: "red"}}>
                    Guest
                </h3>
            )}
            <li>
                <Link to="/">All Galleries</Link>
            </li>
            {isAuthenticated ? (
                <>
                    <li>
                        <Link to="/create">Create New Gallery</Link>
                    </li>
                    <li>
                    <Link to="/my-galleries">My Gallery</Link>
                    </li>
                    <button 
                    className="btn mb-2"
                    style={{ color: "white", backgroundColor: "green" }} 
                    onClick={handleLogout}>Logout</button>
                </>
            ) : (
                <>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                    <li>
                        <Link to="/register">Register</Link>
                    </li>
                </>
            )}
            </ul>
        </nav> 
    </div>
    );
} 