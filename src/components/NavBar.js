import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../store/auth/slice";
import { selectActiveUser, selectIsAuthenticated } from "../store/auth/selectors";
import '../App.css';

export default function Navbar(){
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
                <h3>
                    User: {activeUser && activeUser.firstName} {activeUser && activeUser.lastName}  
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
                    <Link to="/profile">My Gallery</Link>
                    </li>
                    <button style={{ color: "white", backgroundColor: "green" }} onClick={handleLogout}>Logout</button>
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