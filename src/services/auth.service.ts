import { HttpError } from "../errors/HttpError";
import { TUser } from "../interfaces";
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

export const AuthServices = {
    registerUser,
}