import { useParams } from "react-router-dom";
import "./ProductDetails.css";
import { productService } from "../../../Services/ProductService";
import { useEffect, useState } from "react";
import { ProductModel } from "../../../Models/ProductModel";
import { NavLink } from "react-router-dom";

export function ProductDetails(): JSX.Element {

    const [product, setProduct] = useState<ProductModel>();
    const params = useParams();
    const id = +params.id;

    useEffect(()=>{
        productService.getOneProduct(id)
            .then(dbProduct => setProduct(dbProduct));
    }, []);

    return (
        <div className="ProductDetails">

			<h3>Name: {product?.name}</h3>
			<h3>Price: {product?.price}</h3>
			<h3>Stock: {product?.stock}</h3>
            <img src={product?.imageUrl} />

            <br /><br />
            
            <NavLink to="/products">Back</NavLink>
        </div>
    );
}
