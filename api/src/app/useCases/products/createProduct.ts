import { Request, Response } from 'express';

import { Product } from '../../models/Product';

export async function createProducts(req: Request, res: Response) {
  try{
    console.log('...');

  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
