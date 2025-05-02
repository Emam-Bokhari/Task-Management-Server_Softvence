"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthValidation = void 0;
const express_validator_1 = require("express-validator");
const registerValidation = [
    (0, express_validator_1.check)('name')
        .notEmpty()
        .withMessage('Name is required')
        .isString()
        .withMessage('Name must be a string')
        .isLength({ min: 3, max: 30 })
        .withMessage('Name must be at least 3 characters and no longer 30 characters'),
    (0, express_validator_1.check)('email')
        .isEmail()
        .withMessage('Please provide a valid email address')
        .normalizeEmail(),
    (0, express_validator_1.check)('password')
        .isLength({ min: 6 })
        .withMessage('Password must be at least 6 characters'),
    (0, express_validator_1.check)('role')
        .optional()
        .isIn(['user', 'admin'])
        .withMessage("Role must be either 'user' or 'admin'"),
    (0, express_validator_1.check)('status')
        .optional()
        .isIn(['active', 'banned'])
        .withMessage("Status must be either 'active' or 'banned'"),
];
const loginValidation = [
    (0, express_validator_1.check)('email')
        .isEmail()
        .withMessage('Please provide a valid email address')
        .normalizeEmail(),
    (0, express_validator_1.check)('password')
        .isLength({ min: 6 })
        .withMessage('Password must be at least 6 characters'),
];
exports.AuthValidation = {
    registerValidation,
    loginValidation,
};
