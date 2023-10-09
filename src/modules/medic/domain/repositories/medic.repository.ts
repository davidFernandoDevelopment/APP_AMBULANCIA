import { Medic } from '../entities/medic.entity';
import { GenericRepository } from '../../../../generic/generic.repository';

export interface MedicRepository extends GenericRepository<Medic> {
	getBylocation(): void;
}
