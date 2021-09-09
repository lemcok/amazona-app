import { Router } from 'express';
import { data } from '../data.js';
import User from '../models/userModel.js';

const userRouter = Router();

userRouter.get( '/seed', async( req, res ) => {
    const createUsers = await User.insertMany( data.users );
    res.send({ createUsers });
})

export default userRouter