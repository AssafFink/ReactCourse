import axios from "axios";
import { ProductModel } from "../Models/ProductModel";
import { appConfig } from "../Utils/AppConfig";
import { productActions, store } from "../Storage/store";

class ProductService {

    public async getAllProducts(): Promise<ProductModel[]> {

        // Check first if we have the products in global state: 
        if (store.getState().products) return store.getState().products;

        // Get products from backend:
        const response = await axios.get<ProductModel[]>(appConfig.productsUrl);
        const products = response.data;

        // Save in global state: 
        store.dispatch(productActions.initProducts(products));

        return products;
    }

    public async getOneProduct(id: number): Promise<ProductModel> {

        // If we have the product - get it from the global store: 
        let product = store.getState().products?.find((p: ProductModel) => p.id === id);
        if (product) return product;

        // If not - get it from backend:
        const response = await axios.get<ProductModel>(appConfig.productsUrl + id);
        product = response.data;
        return product;
    }

    public async addProduct(product: ProductModel): Promise<void> {

        // Send product to backend:
        const options = { headers: { "Content-Type": "multipart/form-data" } }; // Send text and files
        const response = await axios.post<ProductModel>(appConfig.productsUrl, product, options);
        const dbProduct = response.data;

        // Add product to global state: 
        store.dispatch(productActions.addProduct(dbProduct));
    }

    public async updateProduct(product: ProductModel): Promise<void> {

        // Update in backend:
        const options = { headers: { "Content-Type": "multipart/form-data" } }; // Send text and files
        const response = await axios.put<ProductModel>(appConfig.productsUrl + product.id, product, options);
        const dbProduct = response.data;

        // Update product in global state: 
        store.dispatch(productActions.updateProduct(dbProduct));
    }

    public async deleteProduct(id: number): Promise<void> {

        // Delete in backend: 
        await axios.delete(appConfig.productsUrl + id);
        
        // Delete from global state: 
        store.dispatch(productActions.deleteProduct(id));
    }
}

export const productService = new ProductService();
