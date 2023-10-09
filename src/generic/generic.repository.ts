export interface GenericRepository<T> {
	getAll(filter: any): Promise<T[]>;
	getById(id: string | number): Promise<T>;
	getByPage(
		filter: any,
		page: number,
		pageSize: number
	): Promise<{ total: number; items: T[] }>;
	insert(item: T): Promise<T>;
	update(filter: any, item: T): Promise<T>;
	delete(id: string | number): Promise<T>;
}
