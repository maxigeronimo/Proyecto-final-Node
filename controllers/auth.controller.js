    // controllers/auth.controller.js
    import * as authService from '../services/auth.service.js';

    export const login = async (req, res, next) => {
      try {
        const { email, password } = req.body;
        if (!email || !password) {
          return res.status(400).json({ message: 'Email and password are required' });
        }
        const token = await authService.authenticateUser(email, password);
        if (!token) {
          return res.status(401).json({ message: 'Invalid credentials' });
        }
        res.status(200).json({ token });
      } catch (error) {
        next(error);
      }
    };
    