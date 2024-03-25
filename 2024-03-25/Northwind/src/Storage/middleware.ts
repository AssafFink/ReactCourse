import { Dispatch, PayloadAction, configureStore } from "@reduxjs/toolkit";

export const logger = (store: ReturnType<typeof configureStore>) => 
    (next: Dispatch) => (action: PayloadAction) => {
    const result = next(action);
    console.log("Something changed... Action: ", action);
    return result;
}

// Middleware: will be invoked automatically on every dispatch:
// export function logger(store: ReturnType<typeof configureStore>) {
//     return function (next: Dispatch) {
//         return function (action: PayloadAction) {
//             // here state not changed yet.
//             const result = next(action); // Must call next for the dispatch to work.
//             // here state already changed.
//             console.log("Something changed... Action: ", action);
//             return result;
//         }
//     }
// }

