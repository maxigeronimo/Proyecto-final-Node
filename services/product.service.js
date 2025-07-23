    // services/product.service.js
    import * as productModel from '../models/product.model.js';

    export const findAllProducts = async () => {
      return await productModel.getProducts();
    };

    export const findProductById = async (id) => {
      return await productModel.getProductById(id);
    };

    export const createProduct = async (productData) => {
      return await productModel.addProduct(productData);
    };

    export const deleteProduct = async (id) => {
      return await productModel.deleteProduct(id);
    };
    