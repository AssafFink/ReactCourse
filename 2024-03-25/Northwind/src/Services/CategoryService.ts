import axios from "axios";
import { CategoryModel } from "../Models/CategoryModel";
import { appConfig } from "../Utils/AppConfig";

class CategoryService {

	public async getTotalCategories(): Promise<number> {

        const response = await axios.get<CategoryModel[]>(appConfig.categoriesUrl);

        const categories = response.data;

        const count = categories.length;

        return count;
    }
}

export const categoryService = new CategoryService();
