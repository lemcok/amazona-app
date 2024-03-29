import { Router } from 'express';
import { data } from '../data.js';
import Product from '../models/productModel.js';

const productRouter = Router();

productRouter.get('/', async( req, res ) => {
    const products = await Product.find({})
    res.send(products)
})

productRouter.get('/seed', async( req, res ) => {
    const createProducts = await Product.insertMany( data.products )
    res.send({ createProducts })
})

productRouter.get('/:id', async( req, res ) => {
    const product = await Product.findById( req.params.id );
    if (product) {
        res.send(product)
    }else {
        res.status(404).send({ message: 'Product Not Found' })
    }
})

export default productRouter;
