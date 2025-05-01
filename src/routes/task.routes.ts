import express from "express";
import { auth } from "../middlewares/auth.middleware";
import { USER_ROLE } from "../interfaces";
import { TaskControllers } from "../controllers/task.controller";

const router = express.Router();

router.post("/", auth(USER_ROLE.user, USER_ROLE.admin), TaskControllers.createTaskController)

export const TaskRoutes = router;