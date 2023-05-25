import { Router } from "express"
import asyncHandler from "express-async-handler"

import {
	authUser,
	createUser,
	getUser,
	logoutUser,
} from "../controllers/user.controller"
import { protect } from "../middleware/auth.middleware"

const router = Router()

router.post("/", asyncHandler(createUser))
router.post("/auth", asyncHandler(authUser))
router.post("/logout", asyncHandler(logoutUser))

router.route("/getUser").get(protect, asyncHandler(getUser))

export default router
