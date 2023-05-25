import { Router } from "express"
import asyncHandler from "express-async-handler"
import {
	createBook,
	deleteBook,
	readBooks,
	updateBook,
} from "../controllers/book.controller"
import { protect } from "../middleware/auth.middleware"

const router = Router()

router
	.route("/books")
	.get(protect, asyncHandler(readBooks))
	.post(protect, asyncHandler(createBook))

router
	.route("/books/:id")
	.put(protect, asyncHandler(updateBook))
	.delete(protect, asyncHandler(deleteBook))

export default router
