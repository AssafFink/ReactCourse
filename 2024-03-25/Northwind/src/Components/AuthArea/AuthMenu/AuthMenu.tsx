import { useSelector } from "react-redux";
import "./AuthMenu.css";
import { AppState } from "../../../Storage/store";
import { UserModel } from "../../../Models/UserModel";
import { NavLink, useNavigate } from "react-router-dom";
import { authService } from "../../../Services/AuthService";
import { notify } from "../../../Utils/Notify";

export function AuthMenu(): JSX.Element {

    const user = useSelector<AppState, UserModel>(store => store.user);
    const navigate = useNavigate();

    function logout(): void {
        authService.logout();
        notify.success("Bye bye");
        navigate("/home");
    }

    if (!user) {
        return (
            <div className="AuthMenu">
                <span>Hello Guest | </span>
                <NavLink to="/login">Login</NavLink>
                <span> | </span>
                <NavLink to="/register">Register</NavLink>
            </div>
        );
    }

    return (
        <div className="AuthMenu">
            <span>Hello {user.firstName} {user.lastName} | </span>
            <NavLink to="#" onClick={logout}>Logout</NavLink>
        </div>
    );
}
