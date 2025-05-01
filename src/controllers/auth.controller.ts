import { AuthServices } from "../services/auth.service";
import { asyncHandler } from "../utils/asyncHandler";
import { sendResponse } from "../utils/sendResponse";

const registeredUserController = asyncHandler(async (req, res) => {
    const registerUserPayload = req.body;
    const registeredUser = await AuthServices.registerUser(registerUserPayload);

    sendResponse(res, {
        success: true,
        statusCode: 200,
        message: "User registered successfully",
        data: registeredUser,
    })
})

const loginUserController = asyncHandler(async (req, res) => {
    const loginUserPayload = req.body;
    const loginResult = await AuthServices.loginUser(loginUserPayload);

    sendResponse(res, {
        success: true,
        statusCode: 200,
        message: "User loggedIn successfully",
        data: loginResult,
    })
})

export const AuthControllers = {
    registeredUserController,
    loginUserController,
}