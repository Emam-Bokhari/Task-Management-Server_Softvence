import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import router from './routes';
import { globalErrorHandler } from './middlewares/globalErrorHandler.middleware';
import notFound from './middlewares/notFound.middleware';
import cookieParser from 'cookie-parser';

const app = express();

// middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: ['https://task-management-frontend-softvence.vercel.app'], credentials: true }));
app.use(helmet());

// application routes
app.use('/api/v1', router);

// check health
app.get('/', (req, res) => {
  res.send('Server is running...');
});

// global error handler
app.use(globalErrorHandler);

// not found error handler
app.use(notFound);

export default app;
