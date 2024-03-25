import { Navigate, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import { Home } from "../../HomeArea/Home/Home";
import { ProductList } from "../../ProductArea/ProductList/ProductList";
import { Page404 } from "../Page404/Page404";
import "./Routing.css";
import { Spinner } from "../../SharedArea/Spinner/Spinner";
import { ProductDetails } from "../../ProductArea/ProductDetails/ProductDetails";
import { AddProduct } from "../../ProductArea/AddProduct/AddProduct";
import { EditProduct } from "../../ProductArea/EditProduct/EditProduct";
import { EmployeeList } from "../../EmployeeArea/EmployeeList/EmployeeList";
import { Register } from "../../AuthArea/Register/Register";
import { Login } from "../../AuthArea/Login/Login";
import { ContactUs } from "../../AboutArea/ContactUs/ContactUs";

export function Routing(): JSX.Element {

    // Describe where the about component located: 
    const LazyAbout = lazy(() => import("../../AboutArea/About/About"));

    // Load about component only when browsing to "/about" route:
    const suspenseAbout = <Suspense fallback={<Spinner />}> <LazyAbout /> </Suspense>

    return (
        <div className="Routing">
            <Routes>

                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />

                <Route path="/home" element={<Home />} />
                
                <Route path="/products" element={<ProductList />} />
                <Route path="/products/details/:id" element={<ProductDetails />} />
                <Route path="/products/new" element={<AddProduct />} />
                <Route path="/products/edit/:id" element={<EditProduct />} />

                <Route path="/employees" element={<EmployeeList />} />

                <Route path="/about" element={suspenseAbout} />
                <Route path="/contact-us" element={<ContactUs />} />

                <Route path="/" element={<Navigate to="/home" />} />
                <Route path="*" element={<Page404 />} />
            </Routes>
        </div>
    );
}
