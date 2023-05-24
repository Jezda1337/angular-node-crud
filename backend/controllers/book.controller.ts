import type { Request, Response } from "express"
import prismaClient from "../prisma/prisma-client"

export async function createBook(req: any, res: Response) {
	const body = req.body
	const book = await prismaClient.book.create({
		data: {
			...body,
			userId: req.user?.id,
			pages: +body.pages,
			read: Boolean(body.read),
		},
	})

	res.status(201).json(book)
}

export async function readBooks(req: any, res: Response) {
	const books = await prismaClient.book.findMany({
		where: {
			userId: req.user?.id,
		},
	})

	res.status(200).json(books)
}

export async function updateBook(req: Request, res: Response) {
	const { body, params } = req

	const book = await prismaClient.book.update({
		where: {
			id: params.id,
		},
		data: {
			...body,
		},
	})

	if (!book) {
		res.status(400).json({ message: "Book to update does not exist." })
		throw new Error("Book to update does not exist.")
	}

	res.status(200).json(book)
}

export async function deleteBook(req: Request, res: Response) {
	const params = req.params

	if (!params.id) {
		res.status(400)
		throw new Error("Book doesn't exist")
	}

	const book = await prismaClient.book.delete({
		where: {
			id: params.id,
		},
	})

	if (!book) {
		res.status(400).json({ message: "Book to delete does not exist." })
		throw new Error("Book to delete does not exist.")
	}

	res.status(200).json(book)
}
