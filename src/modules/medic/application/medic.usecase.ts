import { Medic } from '../domain/entities/medic.entity';
import { MedicRepository } from '../domain/repositories/medic.repository';
import yenv from 'yenv';

const env = yenv();

export class MedicUseCase {
	constructor(private readonly repository: MedicRepository) {}

	async insertUseCase(medic: Medic) {
		return this.repository.insert(medic);
	}
	async getUseCase(isActive: boolean) {
		return this.repository.getAll({ isActive });
	}
	async getOneUseCase(id: string | number) {
		return this.repository.getById(id);
	}
	async getByPageUseCase(page: number) {
		return this.repository.getByPage(
			{ isActive: true },
			page,
			env.PAGINATION.PAGE_SIZE
		);
	}
	async udpadeUseCase(id: string | number, medic: Medic) {
		return this.repository.update({ _id: id }, medic);
	}
	async deleteUseCase(id: string | number) {
		return this.repository.delete(id);
	}

	getBylocation() {
		this.repository.getBylocation();
	}
}
