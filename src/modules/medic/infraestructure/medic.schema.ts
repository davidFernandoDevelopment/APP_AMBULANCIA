import Joi from 'joi';

export const schema = {
	POST_INSERT: {
		body: Joi.object({
			name: Joi.string().required(),
			surname: Joi.string().required(),
			lastname: Joi.string().required(),
			cmp: Joi.string().required(),
			dni: Joi.string().required(),
			photo: Joi.string(),
			email: Joi.string().email().required(),
			locations: Joi.array().required(),
			isActive: Joi.boolean(),
		}),
	},
	UPDATE: {
		params: Joi.object({
			id: Joi.string(),
		}),
		body: Joi.object({
			name: Joi.string(),
			surname: Joi.string(),
			lastname: Joi.string(),
			cmp: Joi.string(),
			dni: Joi.string(),
			photo: Joi.string(),
			email: Joi.string().email(),
			locations: Joi.array(),
			isActive: Joi.boolean(),
		}),
	},
	GET_ONE: {
		params: Joi.object({
			id: Joi.string(),
		}),
	},
	DELETE: {
		params: Joi.object({
			id: Joi.string(),
		}),
	},
	PAGINATION: {
		params: Joi.object({
			page: Joi.number().required(),
		}),
	},
};
