import express from 'express';
import CategoryService from '../services/category.service.js';
import validatorHandler from './../middlewares/validator.handler.js';
import { createCategorySchema, updateCategorySchema, getCategorySchema } from '../schemas/category.schema.js';

const router = express.Router();
const service = new CategoryService();

router.get('/',
  async (req, res,next) => {
    try {
      const categories = await service.find();
      res.json(categories);
    } catch (error) {
      next(error);
    }

});

router.post('/',
  validatorHandler(createCategorySchema, 'body'),
  async (req, res, next) => {
    try {
        // console.log(req.body);
      const body = req.body
      const newCategory = await service.create(body);
      res.json(newCategory);
    } catch (error) {
      next(error);
    }
  }
);

router.get('/:id',
  validatorHandler(getCategorySchema, 'params'),
  async (req, res, next) => {
    try {
      const id = req.params.id;
      const category = await service.findOne(id);
      res.json(category);
    } catch (error) {
      next(error);
    }
  }
);

router.patch('/:id',
  validatorHandler(getCategorySchema, 'params'),
  validatorHandler(updateCategorySchema, 'body'),

  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const category = await service.update(id, body);
      res.json(category);
    } catch (error) {
      next(error);
    }
  }
);

router.delete('/:id',
  async (req, res,next) => {
  try {
    const { id } = req.params;
    const category = await service.delete(id);
    res.json(category);
  } catch (error) {
    next(error);
  }
});

export default router;
// module.exports = router;