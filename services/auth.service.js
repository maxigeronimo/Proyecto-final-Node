    // services/auth.service.js
    import jwt from 'jsonwebtoken';
    import dotenv from 'dotenv';

    dotenv.config();

    // This is a simplified example. In a real app, you'd fetch user from DB
    // and compare hashed passwords.
    const ADMIN_EMAIL = process.env.ADMIN_EMAIL;
    const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;
    const JWT_SECRET = process.env.JWT_SECRET;

    export const authenticateUser = async (email, password) => {
      if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
        const token = jwt.sign({ email: ADMIN_EMAIL, role: 'admin' }, JWT_SECRET, { expiresIn: '1h' });
        return token;
      }
      return null;
    };
    
    