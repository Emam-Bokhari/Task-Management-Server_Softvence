import express from 'express';
import { auth } from '../middlewares/auth.middleware';
import { USER_ROLE } from '../interfaces';
import { TaskControllers } from '../controllers/task.controller';
import { TaskValidation } from '../validations/task.validation';
import { validateRequest } from '../middlewares/validateRequest';

const router = express.Router();

router.post(
  '/',
  TaskValidation.createTaskValidation,
  validateRequest,
  auth(USER_ROLE.user, USER_ROLE.admin),
  TaskControllers.createTaskController,
);

router.get(
  '/',
  auth(USER_ROLE.user, USER_ROLE.admin),
  TaskControllers.getAllTasksBySpecificUserController,
);

router.get(
  '/:id',
  auth(USER_ROLE.user, USER_ROLE.admin),
  TaskControllers.getTaskByIdController,
);

router.patch(
  '/:id',
  TaskValidation.updateTaskValidation,
  validateRequest,
  auth(USER_ROLE.user, USER_ROLE.admin),
  TaskControllers.updateTaskByIdController,
);

router.put(
  '/:id/status',
  auth(USER_ROLE.user, USER_ROLE.admin),
  TaskControllers.updateTaskStatusByIdController,
);

router.delete(
  '/:id',
  auth(USER_ROLE.user, USER_ROLE.admin),
  TaskControllers.deleteTaskByIdController,
);

export const TaskRoutes = router;
