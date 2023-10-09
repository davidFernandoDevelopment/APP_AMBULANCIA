import { Request, Response, NextFunction } from 'express';

interface IError extends Error {
	ok: boolean;
	status: number;
}

export class Errors {
	static generateError(objError: Partial<IError>, next: NextFunction) {
		const error = new Error(objError.name);
	}

	static asyncError(
		fn: (req: Request, res: Response, next: NextFunction) => Promise<any>
	) {
		return async (req: Request, res: Response, next: NextFunction) => {
			try {
				return await fn(req, res, next);
			} catch (err) {
				return res.status(500).json({
					status: 500,
					err,
				});
			}
		};
	}

	static pathNotFound(req: Request, res: Response, next: NextFunction) {
		return res.status(404).json({
			status: 404,
			message: 'Ruta no válida',
		});
	}

	static genericError(err: any, req: Request, res: Response, next: NextFunction) {
		
	}
}
