import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import { checkJwt } from './middleware/authMiddleware';
import { createTables } from './database/migrations';
import userRoutes from './routes/users';

// Extend Express Request interface to include auth property
declare global {
  namespace Express {
    interface Request {
      auth?: any;
    }
  }
}

const app = express();

// CORS configuration
const corsOptions = {
  origin: ['http://localhost:3000'], // Add your frontend URL
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

// Protected routes - all routes under /api require JWT
app.use('/api', checkJwt);

// User routes
app.use('/api/users', userRoutes);

// Example protected route
app.get('/api/test', (req, res) => {
  res.json({ message: 'Protected route working!', user: req.auth });
});

// Error handling middleware
app.use((err: any, req: any, res: any, next: any) => {
  if (err.name === 'UnauthorizedError') {
    console.error('Invalid token:', err);
    res.status(401).send('Invalid token');
  } else {
    next(err);
  }
});

const PORT = process.env.PORT || 3333;

// Run migrations on startup
createTables().then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  });

