import bcrypt from "bcrypt"
import type { Request, Response } from "express"
import prismaClient from "../prisma/prisma-client"
import generateToken from "../utils/generateToken"

export async function authUser(req: Request, res: Response) {
	const { email, password } = req.body

	const user = await prismaClient.user.findFirst({
		where: {
			email: email,
		},
	})

	if (!user) {
		res.status(401)
		throw new Error("Invalid email or password.")
	}

	const comparedPasswors = await bcrypt.compare(password, user.password)

	if (user && comparedPasswors) {
		generateToken(res, user.id)

		res.status(200).json({
			id: user.id,
			firstName: user.firstName,
			lastName: user.lastName,
			email: user.email,
		})
	} else {
		res.status(401)
		throw new Error("Invalid email or password.")
	}
}

export async function createUser(req: Request, res: Response) {
	const body = req.body
	const { email, password } = body

	const userExist = await prismaClient.user.findFirst({
		where: {
			email,
		},
	})

	if (userExist) {
		res.status(400)
		throw new Error("This email is already in use, please choose another.")
	}

	const salt = await bcrypt.genSalt(10)
	const hashedPassword = await bcrypt.hash(password, salt)

	const user = await prismaClient.user.create({
		data: {
			...body,
			password: hashedPassword,
		},
	})

	if (!user) {
		res.status(400)
		throw new Error("Invalid user data")
	}

	if (user) {
		generateToken(res, user.id)

		res.status(201).json({
			id: user.id,
			firstName: user.firstName,
			lastName: user.lastName,
			email: user.email,
		})
	}
}

export async function logoutUser(_req: Request, res: Response) {
	res.cookie("token", "", {
		httpOnly: true,
		expires: new Date(0),
	})
	res.status(200).json({
		message: "Successfully logged out",
	})
}

export async function getUser(req: Request, res: Response) {
	const user = await prismaClient.user.findFirst({
		where: {
			id: req.user.id,
		},
	})

	if (!user) {
		res.status(404)
		throw new Error("User not found.")
	}

	res.status(200).json({
		id: user.id,
		firstName: user.firstName,
		lastName: user.lastName,
		email: user.email,
	})
}
