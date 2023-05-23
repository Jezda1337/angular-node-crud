import cookieParser from "cookie-parser"
import cors from "cors"
import * as dotenv from "dotenv"
import express from "express"
import {
	default as bookRouter,
	default as userRoutes,
} from "./routes/user.routes"
dotenv.config()

const port = process.env.PORT || 3000

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())
app.use(cookieParser())

app.use("/api/v1", [userRoutes, bookRouter])

app.listen(port, () => console.log(`Server running on port ${port}`))
