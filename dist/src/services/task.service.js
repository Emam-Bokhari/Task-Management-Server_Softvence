"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskServices = void 0;
const HttpError_1 = require("../errors/HttpError");
const task_model_1 = require("../models/task.model");
const user_model_1 = require("../models/user.model");
const createTask = (payload, email) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield user_model_1.User.findOne({ email: email });
    if (!user) {
        throw new HttpError_1.HttpError(404, 'User not found');
    }
    payload.createdBy = user._id;
    const createdTask = yield task_model_1.Task.create(payload);
    return createdTask;
});
const getAllTasksBySpecificUser = (email) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield user_model_1.User.isUserExists(email);
    if (!user) {
        throw new HttpError_1.HttpError(404, 'User not found');
    }
    const tasks = yield task_model_1.Task.find({ createdBy: user._id }).populate('createdBy', '_id name email role');
    if (tasks.length === 0) {
        throw new HttpError_1.HttpError(404, 'No task were found provide this user ID');
    }
    return tasks;
});
const getTaskById = (id, email) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield user_model_1.User.isUserExists(email);
    if (!user) {
        throw new HttpError_1.HttpError(404, 'User not found');
    }
    const task = yield task_model_1.Task.findOne({ _id: id, createdBy: user._id }).populate('createdBy', '_id name email role');
    if (!task) {
        throw new HttpError_1.HttpError(404, 'No task found with ID');
    }
    return task;
});
const updateTaskById = (id, payload, email) => __awaiter(void 0, void 0, void 0, function* () {
    // check if user is exists
    const user = yield user_model_1.User.isUserExists(email);
    if (!user) {
        throw new HttpError_1.HttpError(404, 'User not found');
    }
    const task = yield task_model_1.Task.findOne({ _id: id, createdBy: user._id });
    if (!task) {
        throw new HttpError_1.HttpError(403, 'You are not allowed to update this task');
    }
    const updatedTask = yield task_model_1.Task.findOneAndUpdate({ _id: id, isDeleted: false }, payload, { new: true, runValidators: true });
    if (!updatedTask) {
        throw new HttpError_1.HttpError(404, 'No task found with ID');
    }
    return updatedTask;
});
const updateTaskStatusById = (id, status, email) => __awaiter(void 0, void 0, void 0, function* () {
    // check if user exists
    const user = yield user_model_1.User.isUserExists(email);
    if (!user)
        throw new HttpError_1.HttpError(404, 'User not found');
    // update task status
    const updatedTaskStatus = yield task_model_1.Task.findOneAndUpdate({ _id: id, createdBy: user._id, isDeleted: false }, { status }, { runValidators: true, new: true });
    if (!updatedTaskStatus)
        throw new HttpError_1.HttpError(403, 'You are not allowed to update this task status');
    return updatedTaskStatus;
});
const deleteTaskById = (id, email) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield user_model_1.User.isUserExists(email);
    if (!user) {
        throw new HttpError_1.HttpError(404, 'User not found');
    }
    const task = yield task_model_1.Task.findOne({ _id: id, createdBy: user._id });
    if (!task) {
        throw new HttpError_1.HttpError(403, 'You are not allowed to delete this task');
    }
    const deletedTask = yield task_model_1.Task.findOneAndUpdate({ _id: id }, { isDeleted: true }, { new: true });
    return deletedTask;
});
exports.TaskServices = {
    createTask,
    getAllTasksBySpecificUser,
    getTaskById,
    updateTaskById,
    updateTaskStatusById,
    deleteTaskById,
};
