import { configureStore, createSlice } from "@reduxjs/toolkit";
import { EmployeeModel } from "../Models/EmployeeModel";
import { ProductModel } from "../Models/ProductModel";
import { logger } from "./middleware";
import { addEmployee, addProduct, deleteEmployee, deleteProduct, initEmployees, initProducts, login, logout, register, updateEmployee, updateProduct } from "./reducers";
import { UserModel } from "../Models/UserModel";

// The application entire state: 
export type AppState = {
    products: ProductModel[];
    employees: EmployeeModel[];
    user: UserModel;
    // More global state here...
};

// Creating product slice: 
const productSlice = createSlice({
    name: "products", // For internal use.
    reducers: { initProducts, addProduct, updateProduct, deleteProduct },
    initialState: null
});

const employeeSlice = createSlice({
    name: "employees", // For internal use.
    reducers: { initEmployees, addEmployee, updateEmployee, deleteEmployee },
    initialState: null
});

const authSlice = createSlice({
    name: "auth", // For internal use.
    reducers: { register, login, logout },
    initialState: null
});

// Action creators - automatically generated from the reducers:
export const productActions = productSlice.actions;
export const employeeActions = employeeSlice.actions;
export const authActions = authSlice.actions;

// Creating the store: 
export const store = configureStore<AppState>({
    reducer: {
        products: productSlice.reducer,
        employees: employeeSlice.reducer,
        user: authSlice.reducer
     },
     middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger) as any
});
