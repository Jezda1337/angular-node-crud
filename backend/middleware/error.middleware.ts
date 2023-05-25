import type { NextFunction, Request, Response } from "express"

export default function ErrorHandler(
	err: any,
	_req: Request,
	res: Response,
	_next: NextFunction
) {
	if (res.status(500)) res.status(500).json(err.message)

	return res.status(400).json(err.message)
}
