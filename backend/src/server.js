import express from 'express';
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import productRouter from './routers/productRouter.js';
import userRouter from './routers/userRouter.js';
import orderRouter from './routers/orderRouter.js';

dotenv.config();

const app = express();

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );


( async() => {
    mongoose.set("strictQuery", false)
    const db = await mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost:27017/amazona', {
        useNewUrlParser:true,
        useUnifiedTopology:true
    });
    console.log('Database is connected to:',db.connection.name)
} )();


app.use('/api/products', productRouter);
app.use('/api/users', userRouter);
app.use('/api/orders', orderRouter);
// app.get('/api/config/paypal', ( req, res ) => {
//     res.send( process.env.PAYPAL_CLIENT_ID || 'sb' );
// });

app.get( '/', ( _, res ) => {
    res.send('Server is ready');
} )

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server at http://localhost:${ port }`)
})

