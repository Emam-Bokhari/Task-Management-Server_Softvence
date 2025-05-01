import { model, Schema } from "mongoose";
import { TTask } from "../interfaces";

const taskSchema = new Schema<TTask>({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
    category: {
        type: String,
        required: true,
        enum: ["artsAndCraft", "nature", "family", "sport", "friends", "meditation"]
    },
    status: {
        type: String,
        enum: ["allTask", "onGoing", "pending", "collaborativeTask", "done"],
        default: "pending"
    },
    endDate: {
        type: String,
        required: true,
    },
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    isDeleted: {
        type: Boolean,
        default: false,
    }
},
    {
        timestamps: true,
        versionKey: false
    }
);

export const Task = model<TTask>("Task", taskSchema);