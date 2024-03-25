import axios from "axios";
import { UserModel } from "../Models/UserModel";
import { appConfig } from "../Utils/AppConfig";
import { jwtDecode } from "jwt-decode"; // npm i jwt-decode
import { authActions, store } from "../Storage/store";
import { CredentialsModel } from "../Models/CredentialsModel";

class AuthService {

    public constructor() {

        // Get token from local storage: 
        const token = localStorage.getItem("token");

        // If exists:
        if (token) {
            
            // Extract container:
            const container = jwtDecode<{ user: UserModel }>(token);

            // Extract token user: 
            const dbUser = container.user;

            // Save to global state: 
            store.dispatch(authActions.login(dbUser));
        }
    }

    // Register
    public async register(user: UserModel): Promise<void> {

        // Send user to backend, get back token:
        const response = await axios.post<string>(appConfig.registerUrl, user);

        // Extract token: 
        const token = response.data;

        // Save token to local storage:
        localStorage.setItem("token", token);

        // Extract container:
        const container = jwtDecode<{ user: UserModel }>(token);

        // Extract token user: 
        const dbUser = container.user;

        // Save to global state: 
        store.dispatch(authActions.register(dbUser));
    }

    // Login
    public async login(credentials: CredentialsModel): Promise<void> {

        // Send credentials to backend, get back token:
        const response = await axios.post<string>(appConfig.loginUrl, credentials);

        // Extract token: 
        const token = response.data;

        // Save token to local storage:
        localStorage.setItem("token", token);

        // Extract container:
        const container = jwtDecode<{ user: UserModel }>(token);

        // Extract token user: 
        const dbUser = container.user;

        // Save to global state: 
        store.dispatch(authActions.login(dbUser));
    }

    // Logout:
    public logout(): void {

        // Remove user from global storage:
        store.dispatch(authActions.logout());

        // Remove token from local storage: 
        localStorage.removeItem("token");
    }

}

export const authService = new AuthService();
