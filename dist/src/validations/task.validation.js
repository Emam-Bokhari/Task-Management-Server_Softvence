'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.TaskValidation = void 0;
const express_validator_1 = require('express-validator');
const createTaskValidation = [
  (0, express_validator_1.check)('title')
    .notEmpty()
    .withMessage('Title is required')
    .isString()
    .withMessage('Title must be a string')
    .isLength({ min: 3, max: 100 })
    .withMessage('Title must be between 3 and 100 characters'),
  (0, express_validator_1.check)('description')
    .notEmpty()
    .withMessage('Description is required')
    .isString()
    .withMessage('Description must be a string')
    .isLength({ min: 10 })
    .withMessage('Description must be at least 10 characters'),
  (0, express_validator_1.check)('category')
    .notEmpty()
    .withMessage('Category is required')
    .isIn([
      'artsAndCraft',
      'nature',
      'family',
      'sport',
      'friends',
      'meditation',
    ])
    .withMessage(
      'Category must be one of: artsAndCraft, nature, family, sport, friends, meditation',
    ),
  (0, express_validator_1.check)('status')
    .optional()
    .isIn(['allTask', 'onGoing', 'pending', 'collaborativeTask', 'done'])
    .withMessage(
      'Status must be one of: allTask, onGoing, pending, collaborativeTask, done',
    ),
  (0, express_validator_1.check)('endDate')
    .notEmpty()
    .withMessage('End date is required'),
];
const updateTaskValidation = [
  (0, express_validator_1.check)('title')
    .optional()
    .isString()
    .withMessage('Title must be a string')
    .isLength({ min: 3, max: 100 })
    .withMessage('Title must be between 3 and 100 characters'),
  (0, express_validator_1.check)('description')
    .optional()
    .isString()
    .withMessage('Description must be a string')
    .isLength({ min: 10 })
    .withMessage('Description must be at least 10 characters'),
  (0, express_validator_1.check)('category')
    .optional()
    .isIn([
      'artsAndCraft',
      'nature',
      'family',
      'sport',
      'friends',
      'meditation',
    ])
    .withMessage(
      'Category must be one of: artsAndCraft, nature, family, sport, friends, meditation',
    ),
  (0, express_validator_1.check)('status')
    .optional()
    .isIn(['allTask', 'onGoing', 'pending', 'collaborativeTask', 'done'])
    .withMessage(
      'Status must be one of: allTask, onGoing, pending, collaborativeTask, done',
    ),
  (0, express_validator_1.check)('endDate').optional(),
];
exports.TaskValidation = {
  createTaskValidation,
  updateTaskValidation,
};
