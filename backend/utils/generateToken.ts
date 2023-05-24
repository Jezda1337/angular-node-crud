import type { Response } from "express"
import jwt from "jsonwebtoken"

export default function generateToken(res: Response, userId: String) {
	const token = jwt.sign({ userId }, process.env.JWT_SECRET!, {
		expiresIn: "2d",
	})

	res.cookie("token", token, {
		httpOnly: true,
		// secure: process.env.NODE_ENV !== "development",
		sameSite: "strict",
		maxAge: 2 * 24 * 60 * 60 * 1000,
	})
}
