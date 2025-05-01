import express from 'express';
import { AuthControllers } from '../controllers/auth.controller';
import { AuthValidation } from '../validations/auth.validation';
import { validateRequest } from '../middlewares/validateRequestSchema';

const router = express.Router();

router.post('/register', AuthValidation.registerValidation, validateRequest, AuthControllers.registeredUserController);

router.post('/login', AuthValidation.loginValidation, validateRequest, AuthControllers.loginUserController);

export const AuthRoutes = router;
