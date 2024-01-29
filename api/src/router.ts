import { Router } from 'express';
import { listCategories } from './app/useCases/categories/listCategories';
import { createCategory } from './app/useCases/categories/createCategory';

export const router = Router();

router.get('/categories', listCategories);

router.post('/categories', createCategory);


router.get('/products', (req, res) => {
  res.send('OK');
});

router.post('/products', (req, res) => {
  res.send('ok');
});

router.get('/categories/:categoryId/products', (req, res) => {
  res.send('ok');
});

router.get('/orders', (req, res) => {
  res.send('ok');
});

router.post('/orders', (req, res) => {
  res.send('ok');
});

router.patch('/orders/:orderId', (req, res) => {
  res.send('ok');
});


router.delete('/orders/:orderId', (req, res) => {
  res.send('ok');
});
