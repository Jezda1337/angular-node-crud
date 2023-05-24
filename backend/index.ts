import cookieParser from "cookie-parser"
import cors from "cors"
import * as dotenv from "dotenv"
import express from "express"
import bookRoutes from "./routes/book.routes"
import userRoutes from "./routes/user.routes"
dotenv.config()

const port = process.env.PORT || 3000

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())
app.use(cookieParser())

// app.use("/api/v1", [userRoutes, bookRouter])
app.use("/api/v1", userRoutes)
app.use("/api/v1", bookRoutes)

app.listen(port, () => console.log(`Server running on port ${port}`))
