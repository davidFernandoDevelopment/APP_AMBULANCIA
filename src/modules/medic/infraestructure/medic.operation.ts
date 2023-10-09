import { GenericOperation } from '../../../generic/generic.operation';
import { Medic } from '../domain/entities/medic.entity';
import medicModel from './medic.model';
export class MedicOperation extends GenericOperation<typeof medicModel, Medic> {
	constructor() {
		super(medicModel);
	}

	getBylocation() {}
}
