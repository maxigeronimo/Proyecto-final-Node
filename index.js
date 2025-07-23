    // index.js
    import express from 'express';
    import cors from 'cors';
    import bodyParser from 'body-parser';
    import dotenv from 'dotenv';

    dotenv.config(); // Load environment variables from .env

    const app = express();
    const PORT = process.env.PORT || 3000;

    // Configure CORS
    app.use(cors());

    // Configure body-parser to parse JSON
    app.use(bodyParser.json());

    // Basic route for testing
    app.get('/', (req, res) => {
      res.send('Welcome to the Product API!');
    });

    // Middleware for handling unknown routes (404)
    app.use((req, res, next) => {
      res.status(404).json({ message: 'Route Not Found' });
    });

    // Global error handling middleware (500)
    app.use((err, req, res, next) => {
      console.error(err.stack);
      res.status(500).json({ message: 'Internal Server Error', error: err.message });
    });

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
    

    // 
        // index.js (add these imports and app.use lines)
        import productRoutes from './routes/products.routes.js';
        import authRoutes from './routes/auth.routes.js';
    
        // ... existing code ...
    
        // Use API routes
        app.use('/api', productRoutes);
        app.use('/auth', authRoutes);
    
        // ... existing error handling ...
        