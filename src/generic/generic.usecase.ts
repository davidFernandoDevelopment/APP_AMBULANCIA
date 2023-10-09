import { GenericRepository } from './generic.repository';

export abstract class GenericUseCase<T> {
	constructor(private readonly repository: GenericRepository<T>) {}

    
}
