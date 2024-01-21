import { Router } from 'express';

export const router = Router();

router.get('/categories', (req, res) => {
  res.send('OK');
});

router.post('/categories', (req, res) => {
  res.send('OK');
});


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
