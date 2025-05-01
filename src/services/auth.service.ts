import { HttpError } from "../errors/HttpError";
import { TLogin, TUser } from "../interfaces";
import { User } from "../models/user.model";

const registerUser = async (payload: TUser) => {
    // check if user is exists
    const existingUser = await User.isUserExists(payload.email)

    if (existingUser) {
        throw new HttpError(
            400,
            `A user with the email '${payload.email}' already exists. Please use a different email.`,
        );
    }

    const registeredUser = await User.create(payload);

    return registeredUser;

}

const loginUser = async (payload: TLogin) => {
    // if email is not provided throw error
    if (!payload.email) {
        throw new HttpError(400, "Email must be provided")
    }
    // if user is not exists
    const user = await User.isUserExists(payload.email);
    if (!user) {
        throw new HttpError(400, "User not found!")
    }
    // check user is already deleted
    if (user.isDeleted) {
        throw new HttpError(400, "The user is already deleted.")
    }
    // check if the user is already banned
    if (user.status === "banned") {
        throw new HttpError(403, "The user account is banned")
    }
}

export const AuthServices = {
    registerUser,
}

