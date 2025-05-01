import { TaskServices } from "../services/task.service";
import { asyncHandler } from "../utils/asyncHandler";
import { sendResponse } from "../utils/sendResponse";

const createTaskController = asyncHandler(async (req, res) => {
    const taskPayload = req.body;
    const { email } = req.user.jwtPayload;
    const createdTask = await TaskServices.createTask(taskPayload, email)
    sendResponse(res, {
        success: true,
        statusCode: 200,
        message: "Task created successfully",
        data: createdTask,
    })
})

const getAllTasksBySpecificUserController = asyncHandler(async (req, res) => {
    const { email } = req.user.jswPayload;
    const tasks = await TaskServices.getAllTasksBySpecificUser(email);

    sendResponse(res, {
        success: true,
        statusCode: 200,
        message: "Task are retrieved successfully",
        data: tasks,
    })
})

export const TaskControllers = {
    createTaskController,
    getAllTasksBySpecificUserController,
}