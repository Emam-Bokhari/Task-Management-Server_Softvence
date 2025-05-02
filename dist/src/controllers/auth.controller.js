'use strict';
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator['throw'](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.AuthControllers = void 0;
const auth_service_1 = require('../services/auth.service');
const asyncHandler_1 = require('../utils/asyncHandler');
const sendResponse_1 = require('../utils/sendResponse');
const registeredUserController = (0, asyncHandler_1.asyncHandler)((req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const registerUserPayload = req.body;
    const registeredUser =
      yield auth_service_1.AuthServices.registerUser(registerUserPayload);
    (0, sendResponse_1.sendResponse)(res, {
      success: true,
      statusCode: 200,
      message: 'User registered successfully',
      data: registeredUser,
    });
  }),
);
const loginUserController = (0, asyncHandler_1.asyncHandler)((req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const loginUserPayload = req.body;
    const loginResult =
      yield auth_service_1.AuthServices.loginUser(loginUserPayload);
    (0, sendResponse_1.sendResponse)(res, {
      success: true,
      statusCode: 200,
      message: 'User loggedIn successfully',
      data: loginResult,
    });
  }),
);
exports.AuthControllers = {
  registeredUserController,
  loginUserController,
};
