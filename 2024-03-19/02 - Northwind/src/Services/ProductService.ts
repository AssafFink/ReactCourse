import axios from "axios";
import { ProductModel } from "../Models/ProductModel";
import { appConfig } from "../Utils/AppConfig";

class ProductService {
	
    public async getAllProducts(): Promise<ProductModel[]> {
        const response = await axios.get<ProductModel[]>(appConfig.productsUrl);
        const products = response.data;
        return products;
    }

    public async getOneProduct(id: number): Promise<ProductModel> {
        const response = await axios.get<ProductModel>(appConfig.productsUrl + id);
        const product = response.data;
        return product;
    }

    public async addProduct(product: ProductModel): Promise<void> {
        const options = { headers: { "Content-Type": "multipart/form-data" }}; // Send text and files
        const response = await axios.post<ProductModel>(appConfig.productsUrl, product, options);
        const dbProduct = response.data;
        console.log(dbProduct);
    }

    public async updateProduct(product: ProductModel): Promise<void> {
        const options = { headers: { "Content-Type": "multipart/form-data" }}; // Send text and files
        const response = await axios.put<ProductModel>(appConfig.productsUrl + product.id, product, options);
        const dbProduct = response.data;
        console.log(dbProduct);
    }

    public async deleteProduct(id: number): Promise<void> {
        await axios.delete(appConfig.productsUrl + id);
        console.log(id + " deleted...");
    }
}

export const productService = new ProductService();
