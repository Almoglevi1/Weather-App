import express from 'express';
import weatherController from '../controllers/weatherController';
import validateCityInput from '../middlewares/validateCityInput';

const router = express.Router();

// Weather route: GET /api/weather?city=CityName
router.get('/', validateCityInput, weatherController);

export default router;