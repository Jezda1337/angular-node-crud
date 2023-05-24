import { Router } from "express"
import {
	authUser,
	createUser,
	getUser,
	logoutUser,
} from "../controllers/user.controller"
import { protect } from "../middleware/auth.middleware"

const router = Router()

router.post("/", createUser)
router.post("/auth", authUser)
router.post("/logout", logoutUser)

router.route("/getUser").get(protect, getUser)

export default router
