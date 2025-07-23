    // controllers/product.controller.js
    import * as productService from '../services/product.service.js';

    export const getAllProducts = async (req, res, next) => {
      try {
        const products = await productService.findAllProducts();
        res.status(200).json(products);
      } catch (error) {
        next(error); // Pass error to global error handler
      }
    };

    export const getProductById = async (req, res, next) => {
      try {
        const { id } = req.params;
        const product = await productService.findProductById(id);
        if (!product) {
          return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json(product);
      } catch (error) {
        next(error);
      }
    };

    export const createProduct = async (req, res, next) => {
      try {
        const newProductData = req.body;
        if (!newProductData.title || !newProductData.price || !newProductData.category) {
          return res.status(400).json({ message: 'Missing required product fields' });
        }
        const product = await productService.createProduct(newProductData);
        res.status(201).json({ message: 'Product created successfully', product });
      } catch (error) {
        next(error);
      }
    };

    export const deleteProduct = async (req, res, next) => {
      try {
        const { id } = req.params;
        const success = await productService.deleteProduct(id);
        if (!success) {
          return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json({ message: 'Product deleted successfully' });
      } catch (error) {
        next(error);
      }
    };
    