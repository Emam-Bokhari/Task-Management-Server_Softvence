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

export const TaskServices = {
    createTask,
}