import { PayloadAction } from "@reduxjs/toolkit";
import { ProductModel } from "../Models/ProductModel";
import { EmployeeModel } from "../Models/EmployeeModel";

// Init all products:
export function initProducts(currentState: ProductModel[], action: PayloadAction<ProductModel[]>): ProductModel[] {
    return action.payload; // payload = product array.
}

// Add one product:
export function addProduct(currentState: ProductModel[], action: PayloadAction<ProductModel>): ProductModel[] {
    // const productToAdd = action.payload; // Take payload (payload is a product.)
    // const newState = [...currentState]; // Duplicate current state.
    // newState.push(productToAdd); // Perform logic.
    // return newState; // Return current state.
    return [...currentState, action.payload]; // Same as above.
}

// Update product: 
export function updateProduct(currentState: ProductModel[], action: PayloadAction<ProductModel>): ProductModel[] {
    // const newState = [...currentState];
    // const index = newState.findIndex(p => p.id === action.payload.id); // payload is a product.
    // if (index >= 0) newState[index] = action.payload;
    // return newState;
    return currentState.map(p => p.id === action.payload.id ? action.payload : p);
}

// Delete product:
export function deleteProduct(currentState: ProductModel[], action: PayloadAction<number>): ProductModel[] {
    return currentState.filter(p => p.id !== action.payload); // payload is an id.
}


// Init all employees:
export function initEmployees(currentState: EmployeeModel[], action: PayloadAction<EmployeeModel[]>): EmployeeModel[] {
    return action.payload; // payload = employee array.
}

// Add one Employee:
export function addEmployee(currentState: EmployeeModel[], action: PayloadAction<EmployeeModel>): EmployeeModel[] {
    return [...currentState, action.payload];
}

// Update Employee: 
export function updateEmployee(currentState: EmployeeModel[], action: PayloadAction<EmployeeModel>): EmployeeModel[] {
    return currentState.map(emp => emp.id === action.payload.id ? action.payload : emp);
}

// Delete Employee:
export function deleteEmployee(currentState: EmployeeModel[], action: PayloadAction<number>): EmployeeModel[] {
    return currentState.filter(emp => emp.id !== action.payload); // payload is an id.
}

