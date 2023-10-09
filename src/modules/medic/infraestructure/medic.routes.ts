import express from 'express';

import { MedicOperation } from './medic.operation';
import { MedicController } from './medic.controller';
import { Errors } from '../../../helpers/error.helper';
import { schema as MedicSchema } from './medic.schema';
import { MedicUseCase } from '../application/medic.usecase';
import SchemaValidator from '../../../validators/schema.validator';

const medicOperation = new MedicOperation();
const medicUseCase = new MedicUseCase(medicOperation);
const medicController = new MedicController(medicUseCase);

export const router = express.Router();

router.get(
	'/',
	Errors.asyncError(medicController.getController.bind(medicController))
);
router.get(
	'/:id',
	SchemaValidator.validate(MedicSchema.GET_ONE),
	Errors.asyncError(medicController.getOneController.bind(medicController))
);
router.get(
	'/page/:page',
	SchemaValidator.validate(MedicSchema.PAGINATION),
	Errors.asyncError(medicController.getByPage.bind(medicController))
);
router.post(
	'/',
	SchemaValidator.validate(MedicSchema.POST_INSERT),
	Errors.asyncError(medicController.insertController.bind(medicController))
);
router.put(
	'/:id',
	SchemaValidator.validate(MedicSchema.UPDATE),
	Errors.asyncError(medicController.updateController.bind(medicController))
);
router.delete(
	'/:id',
	SchemaValidator.validate(MedicSchema.DELETE),
	Errors.asyncError(medicController.deleteController.bind(medicController))
);
