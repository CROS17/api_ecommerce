
import Joi from 'joi';

const id = Joi.string();
const name = Joi.string().min(3).max(50);
const description = Joi.string().min(3).max(150);

  const createCategorySchema = Joi.object({
    name: name.required(),
    description: description.required()
  });

  const updateCategorySchema = Joi.object({
    name: name,
    description: description
  });

  const getCategorySchema = Joi.object({
    id: id.required(),
  });

export { createCategorySchema, updateCategorySchema, getCategorySchema };
