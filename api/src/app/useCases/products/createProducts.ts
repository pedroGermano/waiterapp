import { Request, Response } from 'express';

import { Product } from '../../models/Product';

export async function createProduct(req: Request, res: Response){
  try{
    const imagePath = req.file?.filename;
    const { name, description, price, category, ingredients } = req.body;

    console.log(ingredients);
    console.log(JSON.parse(ingredients));

    // await Product.create({
    //   name,
    //   description,
    //   price: Number(price),
    //   category,
    //   ingredients
    // });
    res.json(req.body);
  } catch (error){
    console.log(error);
    res.sendStatus(500);
  }
}
