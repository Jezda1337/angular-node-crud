import { User } from "@prisma/client"
import type { NextFunction, Request, Response } from "express"
import asyncHandler from "express-async-handler"
import * as jwt from "jsonwebtoken"
import { JwtPayload } from "jsonwebtoken"
import exclude from "../helpers/exclude"
import prismaClient from "../prisma/prisma-client"

export const protect = asyncHandler(
	async (req: Request, res: Response, next: NextFunction) => {
		let token

		token = req.cookies.token

		if (!token) {
			res.status(401)
			throw new Error("Not authorized")
		}

		const { userId }: JwtPayload["userId"] = jwt.verify(
			token,
			process.env.JWT_SECRET!
		)

		const user = await prismaClient.user.findFirst({
			where: {
				id: userId,
			},
		})

		const userWithoutPassword = exclude(user, ["password"] as any)

		req.user = userWithoutPassword as User
		next()
	}
)
