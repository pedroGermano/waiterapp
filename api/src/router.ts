import path from 'node:path';
import multer from 'multer';
import { Router } from 'express';

import { createCategory } from './app/useCases/categories/createCategory';
import { createProduct } from './app/useCases/products/createProduct';
import { listCategories } from './app/useCases/categories/listCategories';
import { listProducts } from './app/useCases/products/listProducts';

export const router = Router();

const upload = multer({
    storage: multer.diskStorage({
        destination(req, file, callback) {
            callback(null, path.resolve(__dirname, '..', 'uploads'));
        },
        filename(req, file, callback){
            callback(null, `${Date.now()}-${file.originalname}`);
        },
    }),
});
 
// List categories
router.get('/categories', listCategories);

// Create category
router.post('/categories', createCategory);
// List products
router.get('/products', listProducts);

// Create product
router.post('/products', upload.single('image'), createProduct);

// Get products by category
router.get('/categories/:categoryId/products', (req, res) => {
    res.send('ok');
});

// List orders
router.get('/orders', (req, res) => {
    res.send('ok');
});

// Create order
router.post('/orders', (req, res) => {
    res.send('ok');
});

// Change order status
router.patch('/orders/:ordersId', (req, res) => {
    res.send('ok');
});

// Delete/cancel 

router.delete('/orders/:orderId', (req, res) => {
    res.send('ok');
});