import { Navigate, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import { Home } from "../../HomeArea/Home/Home";
import { ProductList } from "../../ProductArea/ProductList/ProductList";
import { Page404 } from "../Page404/Page404";
import "./Routing.css";
import { Spinner } from "../../SharedArea/Spinner/Spinner";
import { ProductDetails } from "../../ProductArea/ProductDetails/ProductDetails";

export function Routing(): JSX.Element {

    // Describe where the about component located: 
    const LazyAbout = lazy(() => import("../../AboutArea/About/About"));

    // Load about component only when browsing to "/about" route:
    const suspenseAbout = <Suspense fallback={<Spinner />}> <LazyAbout /> </Suspense>

    return (
        <div className="Routing">
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/products" element={<ProductList />} />
                <Route path="/products/details/:id" element={<ProductDetails />} />
                <Route path="/about" element={suspenseAbout} />
                <Route path="/" element={<Navigate to="/home" />} />
                <Route path="*" element={<Page404 />} />
            </Routes>
        </div>
    );
}
