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

export const AuthControllers = {
    registeredUserController,
}