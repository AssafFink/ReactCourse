import axios from "axios";

class Interceptors {

    public registerInterceptors(): void {

        // Invoke every request: 
        axios.interceptors.request.use(requestObject => {

            // Take token from local storage: 
            const token = localStorage.getItem("token");

            // If exist: 
            if (token) {
                requestObject.headers.Authorization = "Bearer " + token;
            }

            // Return request object: 
            return requestObject;
        });
    }

}

export const interceptors = new Interceptors();
