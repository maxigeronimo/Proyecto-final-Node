    // routes/products.routes.js
    import { Router } from 'express';
    import {
      getAllProducts,
      getProductById,
      createProduct,
      deleteProduct,
    } from '../controllers/product.controller.js';
    import { authenticateToken } from '../middlewares/auth.middleware.js';

    const router = Router();

    router.get('/products', getAllProducts);
    router.get('/products/:id', getProductById);
    router.post('/products/create', authenticateToken, createProduct); // Protected route
    router.delete('/products/:id', authenticateToken, deleteProduct); // Protected route

    export default router;
    