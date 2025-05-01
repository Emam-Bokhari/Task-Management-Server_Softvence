import { HttpError } from "../errors/HttpError";
import { TTask } from "../interfaces";
import { Task } from "../models/task.model";
import { User } from "../models/user.model";

const createTask = async (payload: TTask, email: string) => {
    const user = await User.findOne({ email: email })
    if (!user) {
        throw new HttpError(404, 'User not found');
    }
    payload.createdBy = user._id;
    const createdTask = await Task.create(payload)
    return createdTask;
}

const getAllTasksBySpecificUser = async (email: string) => {
    const user = await User.isUserExists(email);
    if (!user) {
        throw new HttpError(404, "User not found");
    }
    const tasks = await Task.find({ createdBy: user._id }).populate("createdBy", "_id name email role");

    if (tasks.length === 0) {
        throw new HttpError(404, "No task were found provide this user ID")
    }

    return tasks;

}

const getTaskById = async (id: string, email: string) => {
    const user = await User.isUserExists(email);
    if (!user) {
        throw new HttpError(404, "User not found");
    }

    const task = await Task.findById(id).populate("createdBy", "_id name email role")

    console.log(task)

    if (!task) {
        throw new HttpError(404, "No task found with ID")
    };



    return task;

}

export const TaskServices = {
    createTask,
    getAllTasksBySpecificUser,
    getTaskById,
}