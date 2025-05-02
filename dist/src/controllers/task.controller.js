'use strict';
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator['throw'](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.TaskControllers = void 0;
const task_service_1 = require('../services/task.service');
const asyncHandler_1 = require('../utils/asyncHandler');
const sendResponse_1 = require('../utils/sendResponse');
const createTaskController = (0, asyncHandler_1.asyncHandler)((req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const taskPayload = req.body;
    const { email } = req.user;
    const createdTask = yield task_service_1.TaskServices.createTask(
      taskPayload,
      email,
    );
    (0, sendResponse_1.sendResponse)(res, {
      success: true,
      statusCode: 200,
      message: 'Task created successfully',
      data: createdTask,
    });
  }),
);
const getAllTasksBySpecificUserController = (0, asyncHandler_1.asyncHandler)(
  (req, res) =>
    __awaiter(void 0, void 0, void 0, function* () {
      const { email } = req.user;
      const tasks =
        yield task_service_1.TaskServices.getAllTasksBySpecificUser(email);
      (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: 200,
        message: 'Task are retrieved successfully',
        data: tasks,
      });
    }),
);
const getTaskByIdController = (0, asyncHandler_1.asyncHandler)((req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { email } = req.user;
    const task = yield task_service_1.TaskServices.getTaskById(id, email);
    (0, sendResponse_1.sendResponse)(res, {
      success: true,
      statusCode: 200,
      message: 'Task is retrieved successfully',
      data: task,
    });
  }),
);
const updateTaskByIdController = (0, asyncHandler_1.asyncHandler)((req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const updatedPayload = req.body;
    const { email } = req.user;
    const updatedTask = yield task_service_1.TaskServices.updateTaskById(
      id,
      updatedPayload,
      email,
    );
    (0, sendResponse_1.sendResponse)(res, {
      success: true,
      statusCode: 200,
      message: 'Task is updated successfully',
      data: updatedTask,
    });
  }),
);
const updateTaskStatusByIdController = (0, asyncHandler_1.asyncHandler)(
  (req, res) =>
    __awaiter(void 0, void 0, void 0, function* () {
      const { id } = req.params;
      const { status } = req.body;
      const { email } = req.user;
      const updatedTaskStatus =
        yield task_service_1.TaskServices.updateTaskStatusById(
          id,
          status,
          email,
        );
      (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: 200,
        message: 'Task status is updated successfully',
        data: updatedTaskStatus,
      });
    }),
);
const deleteTaskByIdController = (0, asyncHandler_1.asyncHandler)((req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { email } = req.user;
    const deletedTask = yield task_service_1.TaskServices.deleteTaskById(
      id,
      email,
    );
    (0, sendResponse_1.sendResponse)(res, {
      success: true,
      statusCode: 200,
      message: 'Task is deleted successfully',
      data: deletedTask,
    });
  }),
);
exports.TaskControllers = {
  createTaskController,
  getAllTasksBySpecificUserController,
  getTaskByIdController,
  updateTaskByIdController,
  updateTaskStatusByIdController,
  deleteTaskByIdController,
};
