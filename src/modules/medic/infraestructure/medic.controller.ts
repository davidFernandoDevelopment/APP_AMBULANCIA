import { Request, Response } from 'express';

import { Medic } from '../domain/entities/medic.entity';
import { MedicUseCase } from '../../medic/application/medic.usecase';

export class MedicController {
	constructor(private readonly usecase: MedicUseCase) {}

	async insertController(req: Request, res: Response) {
		const medic: Medic = req.body as Medic;
		const result = await this.usecase.insertUseCase(medic);
		res.json(result);
	}
	async getController(req: Request, res: Response) {
		const result = await this.usecase.getUseCase(true);
		return res.json(result);
	}
	async getOneController(req: Request, res: Response) {
		const id = req.params.id;
		const result = await this.usecase.getOneUseCase(id);
		res.json(result);
	}
	async getByPage(req: Request, res: Response) {
		const page = +req.params.page;
		const result = await this.usecase.getByPageUseCase(page);
		res.json(result);
	}
	async updateController(req: Request, res: Response) {
		const id = req.params.id;
		const medic: Medic = req.body as Medic;
		const result = await this.usecase.udpadeUseCase(id, medic);
		res.json(result);
	}
	async deleteController(req: Request, res: Response) {
		const id = req.params.id;
		const result = await this.usecase.deleteUseCase(id);
		res.json(result);
	}
}
