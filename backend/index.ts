import cookieParser from "cookie-parser"
import cors from "cors"
import * as dotenv from "dotenv"
import express from "express"
import ErrorHandler from "./middleware/error.middleware"
import bookRoutes from "./routes/book.routes"
import userRoutes from "./routes/user.routes"
dotenv.config()

const port = process.env.PORT || 3000

const app = express()

const corsOptions = {
	origin: [
		"http://localhost",
		"http://localhost:3000",
		"http://localhost:5432",
	],
	credentials: true,
}

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors(corsOptions))
// app.use(
// 	cors({
// 		origin: "http://localhost:80",
// 		allowedHeaders: ["Content-Type", "Authorization"],
// 		credentials: true,
// 	})
// )
app.use(cookieParser(process.env.JWT_SECRET))

// app.use("/api/v1", [userRoutes, bookRouter])
app.use("/api/v1", userRoutes)
app.use("/api/v1", bookRoutes)

app.use(ErrorHandler)

app.listen(port, () => console.log(`Server running on port ${port}`))
