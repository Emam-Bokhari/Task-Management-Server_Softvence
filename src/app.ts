import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import router from './routes';

const app = express();

// middleware
app.use(express.json());
app.use(cors());
app.use(helmet());

// application routes
app.use('/api/v1', router);

// check health
app.get('/', (req, res) => {
  res.send('Server is running...');
});

export default app;
