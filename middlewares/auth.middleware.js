    // middlewares/auth.middleware.js
    import jwt from 'jsonwebtoken';
    import dotenv from 'dotenv';

    dotenv.config();

    const JWT_SECRET = process.env.JWT_SECRET;

    export const authenticateToken = (req, res, next) => {
      const authHeader = req.headers['authorization'];
      const token = authHeader && authHeader.split(' ')[1]; // Bearer TOKEN

      if (token == null) {
        return res.status(401).json({ message: 'Authentication token required' }); // Unauthorized
      }

      jwt.verify(token, JWT_SECRET, (err, user) => {
        if (err) {
          // Token is invalid or expired
          return res.status(403).json({ message: 'Invalid or expired token' }); // Forbidden
        }
        req.user = user; // Attach user payload to request
        next(); // Proceed to the next middleware/route handler
      });
    };
    