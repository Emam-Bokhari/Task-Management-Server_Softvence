import { check } from 'express-validator';

const createTaskValidation = [
    check('title')
        .notEmpty().withMessage('Title is required')
        .isString().withMessage('Title must be a string')
        .isLength({ min: 3, max: 100 }).withMessage('Title must be between 3 and 100 characters'),

    check('description')
        .notEmpty().withMessage('Description is required')
        .isString().withMessage('Description must be a string')
        .isLength({ min: 10 }).withMessage('Description must be at least 10 characters'),

    check('category')
        .notEmpty().withMessage('Category is required')
        .isIn(['artsAndCraft', 'nature', 'family', 'sport', 'friends', 'meditation'])
        .withMessage('Category must be one of: artsAndCraft, nature, family, sport, friends, meditation'),

    check('status')
        .optional()
        .isIn(['allTask', 'onGoing', 'pending', 'collaborativeTask', 'done'])
        .withMessage('Status must be one of: allTask, onGoing, pending, collaborativeTask, done'),

    check('endDate')
        .notEmpty().withMessage('End date is required')
];

const updateTaskValidation = [
    check('title')
        .optional()
        .isString().withMessage('Title must be a string')
        .isLength({ min: 3, max: 100 }).withMessage('Title must be between 3 and 100 characters'),

    check('description')
        .optional()
        .isString().withMessage('Description must be a string')
        .isLength({ min: 10 }).withMessage('Description must be at least 10 characters'),

    check('category')
        .optional()
        .isIn(['artsAndCraft', 'nature', 'family', 'sport', 'friends', 'meditation'])
        .withMessage('Category must be one of: artsAndCraft, nature, family, sport, friends, meditation'),

    check('status')
        .optional()
        .isIn(['allTask', 'onGoing', 'pending', 'collaborativeTask', 'done'])
        .withMessage('Status must be one of: allTask, onGoing, pending, collaborativeTask, done'),

    check('endDate')
        .optional()
];

export const TaskValidation = {
    createTaskValidation,
    updateTaskValidation,
}
