import { Router } from "express"
import {
	createBook,
	deleteBook,
	readBooks,
	updateBook,
} from "../controllers/book.controller"
import { protect } from "../middleware/auth.middleware"

const router = Router()

router.route("/books").get(protect, readBooks).post(protect, createBook)

router.route("/books/:id").put(protect, updateBook).delete(protect, deleteBook)

export default router
