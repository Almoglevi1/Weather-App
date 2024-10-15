import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import weatherRoute from './routes/weatherRoutes';
import { notFoundHandler, invalidCityHandler, errorHandler } from './middlewares/errorHandler';

dotenv.config(); // Load environment variables

const app = express();
const PORT = 3001;

app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON body

// Routes
app.use("/api/weather", weatherRoute);

// Use the 404 handler for unmatched routes
app.use(notFoundHandler);

// Use the 400 handler for invalid city
app.use(invalidCityHandler);

// Use the general error handler
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});