import express from "express";
import { auth } from "../middlewares/auth.middleware";
import { USER_ROLE } from "../interfaces";
import { TaskControllers } from "../controllers/task.controller";

const router = express.Router();

router.post("/", auth(USER_ROLE.user, USER_ROLE.admin), TaskControllers.createTaskController);

router.get("/", auth(USER_ROLE.user, USER_ROLE.admin), TaskControllers.getAllTasksBySpecificUserController);

router.get("/:id", auth(USER_ROLE.user, USER_ROLE.admin), TaskControllers.getTaskByIdController)

export const TaskRoutes = router;