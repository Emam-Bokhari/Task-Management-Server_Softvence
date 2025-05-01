import { Types } from "mongoose";

export type TTask = {
    title: string;
    description: string;
    category: "artsAndCraft" | "nature" | "family" | "sport" | "friends" | "meditation";
    status?: "allTask" | "onGoing" | "pending" | "collaborativeTask" | "done";
    endDate: string;
    createdBy?: Types.ObjectId;
    isDeleted?: boolean;
}