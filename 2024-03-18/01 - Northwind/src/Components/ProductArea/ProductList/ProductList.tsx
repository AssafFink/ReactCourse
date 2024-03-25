import { useEffect, useState } from "react";
import "./ProductList.css";
import { productService } from "../../../Services/ProductService";
import { ProductModel } from "../../../Models/ProductModel";
import { ProductCard } from "../ProductCard/ProductCard";

export function ProductList(): JSX.Element {

    const [products, setProducts] = useState<ProductModel[]>([]); // [] --> Empty products array.

    useEffect(() => {
        productService.getAllProducts().then(dbProducts => setProducts(dbProducts));
    }, []);

    return (
        <div className="ProductList">
            {products.map(p => <ProductCard key={p.id} product={p} /> )}
        </div>
    );
}
