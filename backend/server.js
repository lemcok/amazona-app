import express from 'express';
import mongoose from 'mongoose'
import { data } from './data.js';
import productRouter from './routers/productRouter.js';
import userRouter from './routers/userRouter.js';

const app = express();
( async() => {
    const db = await mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost:27017/amazona', {
        useNewUrlParser:true,
        useUnifiedTopology:true,
    });
    console.log('Database is connected to:',db.connection.name)
} )();


app.use('/api/products', productRouter);
app.use('/api/users', userRouter);

app.get( '/', ( req, res ) => {
    res.send('Server is ready');
} )

const port = process.env.PORT || 5000;

app.listen(port, ()=> {
    console.log(`Server at http://localhost:${ port }`)
})

