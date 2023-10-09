import { Model } from 'mongoose';

import { GenericRepository } from './generic.repository';

export abstract class GenericOperation<T extends Model<any>, U>
	implements GenericRepository<U>
{
	constructor(private readonly model: T) {}

	async getAll(filter: any = {}): Promise<U[]> {
		const items: U[] = await this.model.find(filter);
		return items;
	}
	async getById(id: string | number): Promise<U> {
		const item: U = await this.model.findById(id);
		return item;
	}
	async getByPage(
		filter: any = {},
		page: number,
		pageSize: number
	): Promise<{ total: number; items: U[] }> {
		const items: U[] = await this.model
			.find(filter)
			.skip(page * pageSize)
			.limit(pageSize);

		const total = await this.model.find(filter).countDocuments();

		return { total, items };
	}
	async insert(item: U): Promise<U> {
		const itemInserted: U = await this.model.create(item);
		return itemInserted;
	}
	async update(filter: any = {}, item: U): Promise<U> {
		const itemUpdated: U = await this.model.findOneAndUpdate(filter, item, {
			new: true,
		});

		return itemUpdated;
	}
	async delete(id: string | number): Promise<U> {
		const itemDeleted: U = await this.model.findByIdAndUpdate(
			id,
			{ isActive: false },
			{ new: true }
		);

		return itemDeleted;
	}
}
