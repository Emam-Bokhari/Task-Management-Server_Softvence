import { check } from 'express-validator';

const registerValidation = [
  check('name')
    .notEmpty()
    .withMessage('Name is required')
    .isString()
    .withMessage('Name must be a string')
    .isLength({ min: 3, max: 30 })
    .withMessage(
      'Name must be at least 3 characters and no longer 30 characters',
    ),

  check('email')
    .isEmail()
    .withMessage('Please provide a valid email address')
    .normalizeEmail(),

  check('password')
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 characters'),

  check('role')
    .optional()
    .isIn(['user', 'admin'])
    .withMessage("Role must be either 'user' or 'admin'"),

  check('status')
    .optional()
    .isIn(['active', 'banned'])
    .withMessage("Status must be either 'active' or 'banned'"),
];

const loginValidation = [
  check('email')
    .isEmail()
    .withMessage('Please provide a valid email address')
    .normalizeEmail(),

  check('password')
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 characters'),
];

export const AuthValidation = {
  registerValidation,
  loginValidation,
};
