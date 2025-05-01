import { TaskServices } from "../services/task.service";
import { asyncHandler } from "../utils/asyncHandler";
import { sendResponse } from "../utils/sendResponse";

const createTaskController = asyncHandler(async (req, res) => {
    const taskPayload = req.body;
    const { email } = req.user;
    const createdTask = await TaskServices.createTask(taskPayload, email)
    sendResponse(res, {
        success: true,
        statusCode: 200,
        message: "Task created successfully",
        data: createdTask,
    })
})

const getAllTasksBySpecificUserController = asyncHandler(async (req, res) => {
    const { email } = req.user;
    const tasks = await TaskServices.getAllTasksBySpecificUser(email);

    sendResponse(res, {
        success: true,
        statusCode: 200,
        message: "Task are retrieved successfully",
        data: tasks,
    })
})

const getTaskByIdController = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const { email } = req.user;


    const task = await TaskServices.getTaskById(id, email);

    sendResponse(res, {
        success: true,
        statusCode: 200,
        message: "Task is retrieved successfully",
        data: task,
    })
})

const updateTaskByIdController = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const updatedPayload = req.body;
    const { email } = req.user;


    const updatedTask = await TaskServices.updateTaskById(id, updatedPayload, email);

    sendResponse(res, {
        success: true,
        statusCode: 200,
        message: "Task is updated successfully",
        data: updatedTask,
    })
})



export const TaskControllers = {
    createTaskController,
    getAllTasksBySpecificUserController,
    getTaskByIdController,
    updateTaskByIdController,
}